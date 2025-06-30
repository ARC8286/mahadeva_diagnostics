import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaArrowRight, FaClock, FaCheck, FaShieldAlt, FaWhatsapp } from 'react-icons/fa';

const CallbackSection = () => {
    const [phone, setPhone] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const inputRef = useRef(null);

    // Only attempt to focus on mobile after a delay if user hasn't scrolled
    useEffect(() => {
        if (window.innerWidth > 768) return;
        
        const timer = setTimeout(() => {
            if (window.pageYOffset < 100 && inputRef.current) {
                inputRef.current.focus({ preventScroll: true });
            }
        }, 1500);
        
        return () => clearTimeout(timer);
    }, []);

    const handlePhoneChange = (e) => {
        const input = e.target.value;
        const numbersOnly = input.replace(/\D/g, '');
        
        if (numbersOnly.length <= 10) {
            setPhone(numbersOnly);
            setError('');
        }
    };

    const formatPhoneDisplay = (value) => {
        if (!value) return '';
        const numbersOnly = value.replace(/\D/g, '');
        
        if (numbersOnly.length <= 3) return numbersOnly;
        if (numbersOnly.length <= 6) return `${numbersOnly.slice(0, 3)} ${numbersOnly.slice(3)}`;
        return `${numbersOnly.slice(0, 3)} ${numbersOnly.slice(3, 6)} ${numbersOnly.slice(6, 10)}`;
    };

    const sendWhatsAppMessage = (phoneNumber) => {
        const whatsappNumber = '918356984945';
        const message = `Hi, I'm interested in your services. Please call me back at ${phoneNumber}.`;
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        
        if (window.innerWidth > 768) {
            window.open(url, '_blank');
        } else {
            window.location.href = url;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (phone.length !== 10) {
            setError('Please enter a valid 10-digit phone number');
            inputRef.current?.focus({ preventScroll: true });
            return;
        }
        
        setIsSubmitting(true);
        setError('');
        
        try {
            await new Promise(resolve => setTimeout(resolve, 800));
            sendWhatsAppMessage(`+91 ${formatPhoneDisplay(phone)}`);
            setIsSuccess(true);
            setPhone('');
            
            setTimeout(() => {
                setIsSuccess(false);
            }, 5000);
        } catch (err) {
            setError('Failed to submit request. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-700 text-white py-12 md:py-16 px-4 sm:px-6 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-purple-400 mix-blend-screen"></div>
                <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-cyan-400 mix-blend-screen"></div>
                <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-pink-400 mix-blend-screen"></div>
            </div>
            
            <div className="max-w-3xl mx-auto relative z-10">
                <div className="text-center mb-8 md:mb-10">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200"
                    >
                        Need Help? Get a Call Back
                    </motion.h2>
                    
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-3 md:mb-4 text-sm sm:text-base border border-white/20"
                    >
                        <FaClock className="mr-2 text-cyan-300 animate-pulse" />
                        <span className="font-medium">Get a callback within 10 minutes!</span>
                    </motion.div>
                    
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-blue-100/90 max-w-xl mx-auto text-base sm:text-lg"
                    >
                        Leave your number and our experts will call you back promptly. Available 24/7 for your convenience.
                    </motion.p>
                </div>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="max-w-md mx-auto space-y-3 md:space-y-4"
                    noValidate
                >
                    <div className="flex items-stretch bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-white/20">
                        <div className="flex items-center bg-cyan-600/80 px-3 sm:px-4">
                            <FaPhone className="text-white text-lg sm:text-xl" />
                        </div>
                        <div className="flex items-center bg-cyan-700/80 px-2 sm:px-3 border-l border-white/20">
                            <span className="font-medium text-white text-sm sm:text-base">+91</span>
                        </div>
                        <input
                            ref={inputRef}
                            type="tel"
                            inputMode="numeric"
                            placeholder="Enter 10-digit number"
                            className="flex-grow px-3 sm:px-4 py-3 sm:py-4 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-white/60 text-sm sm:text-base"
                            value={formatPhoneDisplay(phone)}
                            onChange={handlePhoneChange}
                            required
                            minLength={10}
                            maxLength={14}
                            pattern="[0-9]{10}"
                            disabled={isSubmitting || isSuccess}
                            aria-label="Phone number"
                            aria-invalid={!!error}
                            aria-describedby="phone-error"
                            data-no-jump
                        />
                    </div>

                    <AnimatePresence>
                        {error && (
                            <motion.p 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-red-300 text-xs sm:text-sm flex items-start"
                                id="phone-error"
                            >
                                <svg className="w-4 h-4 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                                </svg>
                                {error}
                            </motion.p>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {isSuccess && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-3 rounded-lg flex items-center shadow-lg"
                            >
                                <FaWhatsapp className="mr-2 flex-shrink-0 text-lg" />
                                <span className="text-sm sm:text-base">Request sent to WhatsApp! We'll contact you shortly.</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.button
                        type="submit"
                        disabled={isSubmitting || isSuccess}
                        whileTap={!isSubmitting && !isSuccess ? { scale: 0.98 } : {}}
                        className={`w-full py-3 sm:py-4 px-6 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden
                            ${isSubmitting
                                ? 'bg-indigo-700 cursor-not-allowed'
                                : isSuccess
                                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 cursor-default'
                                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 hover:shadow-xl'
                            }`}
                        aria-busy={isSubmitting}
                    >
                        {!isSubmitting && !isSuccess && (
                            <motion.span 
                                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 opacity-0 hover:opacity-100 transition-opacity duration-300"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            />
                        )}
                        
                        <span className="relative z-10 flex items-center">
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Processing...</span>
                                </>
                            ) : isSuccess ? (
                                <>
                                    <FaWhatsapp className="mr-2 text-lg" />
                                    <span>Message Sent!</span>
                                </>
                            ) : (
                                <>
                                    <span>Call Me Now</span>
                                    <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                </>
                            )}
                        </span>
                    </motion.button>
                </motion.form>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="text-center text-blue-100/80 text-xs sm:text-sm mt-4 md:mt-6 flex items-center justify-center"
                >
                    <FaShieldAlt className="mr-2 text-blue-200" />
                    <span>We respect your privacy. Your information is secure and will not be shared.</span>
                </motion.div>
            </div>
        </section>
    );
};

export default CallbackSection;