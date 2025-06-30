import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),
    react()

  ],
   server: {
    host: '0.0.0.0',   // ye zaroori hai
    port: 5174         // optional: port fix rakh sakte ho
  }
})
