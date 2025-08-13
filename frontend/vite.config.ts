import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import os from 'os';

function getLocalIp() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]!) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

const host = getLocalIp();
const port = 3000; // porta del backend
const url = `http://${host}:${port}`;

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/service': url,
    },
  },
});
