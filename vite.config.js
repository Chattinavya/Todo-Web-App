import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Todo-Web-App/', // 👈 Important: Use repo name with slashes
  plugins: [react()],
});
