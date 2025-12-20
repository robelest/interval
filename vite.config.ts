import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { VitePWA } from 'vite-plugin-pwa';
import viteTsConfigPaths from 'vite-tsconfig-paths';

const config = defineConfig({
  server: {
    port: 4000,
  },
  plugins: [
    {
      ...nodePolyfills({
        globals: {
          process: true,
        },
      }),
      applyToEnvironment: (env: { name: string }) => env.name === 'client',
    },
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
    // VitePWA with injectManifest for custom service worker
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.ts',
      registerType: 'prompt',
      injectRegister: false, // ReloadPrompt handles registration via virtual:pwa-register/react
      includeAssets: ['favicon.ico', 'favicon.svg', 'robots.txt'],
      manifest: {
        name: 'Interval',
        short_name: 'Interval',
        description: 'Offline-first task tracker with real-time sync',
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
      injectManifest: {
        globPatterns: ['**/*.{js,css,ico,png,svg,woff2,wasm}'],
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024, // 3 MiB
      },
      devOptions: {
        enabled: true,
        type: 'module',
        suppressWarnings: true,
      },
    }),
  ],
  resolve: {
    dedupe: ['yjs'],
  },
});

export default config;
