import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: false, // Esto determina si se habilitan los módulos CSS
    // Aquí puedes agregar otras configuraciones CSS según tus necesidades
  }
});
