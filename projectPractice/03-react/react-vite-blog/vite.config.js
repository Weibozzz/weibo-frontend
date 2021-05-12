import { defineConfig } from 'vite'
import path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    proxy: {
      "/mxnzp": {
        target: "https://www.mxnzp.com",
        ws: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/mxnzp/, '')
      },
      "/api": {
        target: "http://www.liuweibo.cn:7654",
        ws: true,
      },
    }
  }
})
