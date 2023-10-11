import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: '0.0.0.0', // Cambiado a una cadena para que funcione con Docker
    strictPort: true,
    port: 1010, // Puedes reemplazar este puerto por cualquier otro
  }
});
