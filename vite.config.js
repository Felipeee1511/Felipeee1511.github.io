import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/



module.exports = defineConfig({
  plugins: [react(),],
  path: {'@': './dist'},
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
  
 
})

