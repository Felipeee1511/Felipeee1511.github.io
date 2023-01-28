import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { extname } from 'path';

// https://vitejs.dev/config/



export default defineConfig({
  plugins: [react(),
    babel({
      babelConfig: {
          babelrc: false,
          configFile: false,
          plugins: ['@babel/plugin-proposal-decorators'],
          
          // uses the jsx loader for .jsx files
          loader: path => {
            if (extname(path) === '.jsx') {
              return 'jsx';
            }
          },
      }
    })],
  path: {'@': './dist'}
  
 
})
