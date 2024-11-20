import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // Configure CSS Modules behavior
      scopeBehaviour: 'local', // Default is 'local', which scopes classes locally
      generateScopedName: '[name]__[local]___[hash:base64:5]', // Custom class naming
      localsConvention: 'camelCaseOnly', // Use camelCase class names
    },
  },
});
