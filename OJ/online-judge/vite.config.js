import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true, // Adding changeOrigin to help with CORS issues
      },
    },
  },
  plugins: [react()],
});
