import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),// 路径别名
      '@components': path.resolve(__dirname, './src/components'), // components别名
      '@router': path.resolve(__dirname, './src/router'), // router别名
      '@stores': path.resolve(__dirname, './src/stores'), // stores别名
      '@views': path.resolve(__dirname, './src/views'), // views别名

    },
    extensions: ['.js', '.ts', '.json'] // 导入时想要省略的扩展名列表
  },

  plugins: [vue()],
})
