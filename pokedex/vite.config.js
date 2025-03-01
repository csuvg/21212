import { defineConfig } from 'vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import react from '@vitejs/plugin-react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host: '0.0.0.0',
    port: '3001'
  },
  resolve:{
    alias: [
      {
        find: '@components', 
        replacement: resolve(__dirname, './src/components')
      },
      {
        find: '@hooks', 
        replacement: resolve(__dirname, './src/hooks')
      },
    ]
  },
})
