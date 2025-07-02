import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/

export default defineConfig({
  plugins: [  tailwindcss(),react()],

  server: {
    proxy: {
      // Development में localhost से API calls को proxy करने के लिए
      '/api': {
        target: 'https://mahadeva-diagnostics.onrender.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },
  build: {
    // Production build के लिए chunk size warning को बढ़ाने के लिए
    chunkSizeWarningLimit: 1600,
  },
  define: {
    // Environment variables को access करने के लिए
    'process.env': process.env
  }
});
