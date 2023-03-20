import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import react from '@vitejs/plugin-react-swc'
import legacy from '@vitejs/plugin-legacy'
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
  plugins: [
    react(),
    // https://www.npmjs.com/package/@vitejs/plugin-legacy
    // Vite's default browser support baseline is Native ESM, native ESM dynamic import, and import.meta. This plugin provides support for legacy browsers that do not support those features when building for production.
    // 低版本浏览器兼容
    legacy({
      targets: ['chrome 52', 'Android >= 39', 'iOS >= 10.3', 'IE >= 11'], // 需要兼容的目标列表，可以设置多个
      modernPolyfills: true
      // additionalLegacyPolyfills: ['regenerator-runtime/runtime'], // 面向IE11时需要此插件
      // polyfills: ['es.promise', 'es.array.iterator']
    })
  ]
})
