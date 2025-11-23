import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const BASE_PATH = '/vite-create-react-app/';
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? BASE_PATH : '/',
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
});
