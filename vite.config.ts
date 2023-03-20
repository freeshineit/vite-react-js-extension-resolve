import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
// import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // esbuild: {
  //   loader: 'jsx'
  // },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  },
  server: {
    // port: 3000, // 设置端口号
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
        // rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
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
    react({
      babel: {
        plugins: ['@babel/plugin-transform-react-jsx']
      }
    }),
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
