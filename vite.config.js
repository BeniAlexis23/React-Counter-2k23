import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true,
      },
      injectRegister: 'auto',

      includeAssets: ['android', 'ios', 'windows11'],

      includeAssets: ['vite.svg'],

      manifest: {
        name: 'PWA React + Vite',
        short_name: 'PWA-React',
        description: 'React and vite app + PWA',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'vite.svg',
            sizes: '192x192',
            type: 'image/png'
          },
        ],
      },
    }),
  ],
});
