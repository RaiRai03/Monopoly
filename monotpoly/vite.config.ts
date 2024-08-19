import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const LOCAL_AUTH = "http://localhost:6001"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy: {
      "/register": LOCAL_AUTH,
      "/login": LOCAL_AUTH,
    }
  }
})
