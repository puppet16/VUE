import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 配置路径别名, 就是输入@符号时，就自动联想到 项目中的src目录
      "@": path.resolve(__dirname, 'src')
    }
  }
})
