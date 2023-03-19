import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    minify: 'terser'
  },
  define: {},
  plugins: [react()]
})
