import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { VitePWA } from 'vite-plugin-pwa';
import viteTsConfigPaths from 'vite-tsconfig-paths';

const config = defineConfig({
  server: {
    port: 4000,
  },
  plugins: [
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
    checker({
      typescript: true,
      biome: {
        command: 'check',
      },
      enableBuild: true,
    }),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['favicon.ico', 'favicon.svg', 'robots.txt'],
      manifest: {
        name: 'Notebook',
        short_name: 'Notebook',
        description: 'Offline-first notebook with real-time sync',
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'logo192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'logo512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      devOptions: {
        enabled: true,
        type: 'module',
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        navigateFallback: null,
      },
    }),
  ],
  resolve: {
    dedupe: ['yjs'],
  },
});

export default config;
