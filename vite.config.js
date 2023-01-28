import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/



export default defineConfig({
  plugins: [react(),],
  path: {'@': './dist'},
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  
  esbuild: {
    jsxFactory: '_jsx',
    jsxFragment: '_jsxFragment',
    jsxInject: `import { createElement as _jsx, Fragment as _jsxFragment } from 'react'`,
  }
  
  
 
})
