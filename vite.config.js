import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import { resolve } from 'path'
export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.js'),
        demo: resolve(__dirname, 'demo/index.html'),
      },
      output: {
        globals: {
          vue: 'Vue',
        },
      },
      external: ['vue'],
      lib: {
        entry: 'src/index.js',
        name: 'IVViewerV2',
        fileName: (format) => `iv-viewer-v2.${format}.js`,
      },
    },
  },
})
