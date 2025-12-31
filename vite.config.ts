import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/frontwebsite/',
  plugins: [react()],
  assetsInclude: ['**/*.pdf'],
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext'
    }
  }
})
