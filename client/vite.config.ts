import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~shared': resolve(__dirname, './src/shared'),
      '~widgets': resolve(__dirname, './src/widgets'),
      '~pages': resolve(__dirname, './src/pages')
    }
  }
})
