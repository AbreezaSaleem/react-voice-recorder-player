import { resolve } from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'VoiceRecorder',
      fileName: 'react-voice-recorder-player',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [
    react(),
    svgr(),
    cssInjectedByJsPlugin(),
  ],
  define: {
    RECORDING: JSON.stringify('recording'),
    PAUSED_RECORDING: JSON.stringify('paused_recording'),
    PAUSED_PLAYING: JSON.stringify('paused_playing'),
    PLAYING: JSON.stringify('playing'),
    PLAYING_REQUESTED: JSON.stringify('playing_requested'),
    STOPPED: JSON.stringify('stopped'),
  }
})
