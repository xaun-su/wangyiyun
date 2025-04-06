import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          '@primary-color': '#3498db', // 设置全局变量
          '@font-size': '16px',        // 设置字体大小
          '@min-weight': '1200px',      // 设置最小宽度
        },
        javascriptEnabled: true, // 启用 JavaScript 支持
      },
    },
  },
})
