const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

// CORS Configuration
app.use(cors({
  origin: 'http://localhost:5174 ',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// File upload configuration
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|pdf|doc|docx/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only images (JPEG, JPG, PNG), PDFs and Word documents are allowed!'));
    }
  }
});

// Generate booking reference
const generateBookingRef = () => {
  const now = new Date();
  const year = now.getFullYear().toString().slice(-2);
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `BK-${year}${month}${day}-${randomNum}`;
};

// Template Helper Functions
const loadTemplate = (templateName) => {
  try {
    return fs.readFileSync(path.join(__dirname, 'email-templates', `${templateName}.html`), 'utf8');
  } catch (err) {
    console.error(`Error loading template ${templateName}:`, err);
    return null;
  }
};

const clinicTemplate = loadTemplate('clinic-template');
const patientTemplate = loadTemplate('patient-template');

// Email Template Renderers
const renderClinicEmail = (data, file, bookingRef) => {
  if (!clinicTemplate) return '<h1>New Appointment Booking</h1>';

  const formattedDate = new Date().toLocaleString('en-IN', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const servicesHtml = data.usePrescription === 'true' 
    ? '<span class="badge badge-warning">Prescription Uploaded</span>'
    : `<div class="services-list">${data.services.split(',').map(service => 
        `<span class="service-item">${service.trim()}</span>`
      ).join('')}</div>`;

  const fileHtml = file ? `
    <div class="file-card">
      <h3 style="margin-top: 0; color: var(--primary);">Prescription Details</h3>
      <div class="file-info">
        <div class="file-icon">📄</div>
        <div>
          <strong>File Name:</strong> ${file.originalname}<br>
          <small>${file.mimetype} (${(file.size / 1024).toFixed(2)} KB)</small>
        </div>
      </div>
    </div>
  ` : '';

  return clinicTemplate
    .replace('{{patientName}}', data.name)
    .replace('{{ageGender}}', `${data.age} years, ${data.gender}`)
    .replace('{{dob}}', data.dob || 'Not provided')
    .replace('{{contact}}', `+91 ${data.contact}`)
    .replace('{{email}}', data.email || 'Not provided')
    .replace('{{address}}', data.address)
    .replace('{{services}}', servicesHtml)
    .replace('{{fileSection}}', fileHtml)
    .replace('{{submissionDate}}', formattedDate)
    .replace('{{patientEmail}}', data.email || 'amitchaudhary8286@gmail.com')
    .replace('{{bookingRef}}', bookingRef);
};

const renderPatientEmail = (data, hasPrescription, bookingRef) => {
  if (!patientTemplate) return '<h1>Appointment Confirmed</h1>';

  const testsHtml = hasPrescription 
    ? `<div class="prescription-note">
        <p>📋 We've received your prescription and will contact you shortly to confirm the tests.</p>
       </div>`
    : `<p><strong>Tests Booked:</strong></p>
       <div style="margin-top: 10px;">
         ${data.services.split(',').map(service => 
           `<span class="test-badge">${service.trim()}</span>`
         ).join('')}
       </div>`;

  return patientTemplate
    .replace('{{patientName}}', data.name)
    .replace('{{testsContent}}', testsHtml)
    .replace('{{bookingRef}}', bookingRef);
};

// Appointment Booking Route
app.post('/api/book-appointment', upload.single('prescription'), async (req, res) => {
  try {
    const { 
      name, age, gender, dob, 
      contact, email, address, 
      services, usePrescription 
    } = req.body;

    if (!name || !age || !gender || !contact || !address) {
      return res.status(400).json({
        success: false,
        message: 'Please fill all required fields'
      });
    }

    // Generate booking reference
    const bookingRef = generateBookingRef();
    const attachments = [];
    
    if (req.file) {
      attachments.push({
        filename: req.file.originalname,
        content: req.file.buffer,
        contentType: req.file.mimetype
      });
    }

    // Send email to clinic
    await transporter.sendMail({
      from: `"Diagnostic Center" <${process.env.EMAIL_USER}>`,
      to: 'amitchaudhary8286@gmail.com',
      subject: `New Appointment [${bookingRef}]: ${name}`,
      html: renderClinicEmail(req.body, req.file, bookingRef),
      attachments: attachments
    });

    // Send confirmation email to patient if email is provided
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      await transporter.sendMail({
        from: `"Diagnostic Center" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Your Appointment Confirmation [${bookingRef}]`,
        html: renderPatientEmail(req.body, usePrescription === 'true', bookingRef)
      });
    }

    res.status(200).json({ 
      success: true, 
      message: 'Appointment booked successfully',
      bookingRef: bookingRef
    });
  } catch (error) {
    console.error('Error booking appointment:', error);
    res.status(500).json({ 
      success: false, 
      message: 'An error occurred while booking the appointment',
      error: error.message 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({
      success: false,
      message: err.code === 'LIMIT_FILE_SIZE' 
        ? 'File size should be less than 5MB' 
        : 'File upload error'
    });
  } else if (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
  next();
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});