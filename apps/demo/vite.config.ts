import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import path from 'path'

export default defineConfig({
  plugins: [solid()],
  resolve: {
    alias: {
      'solid-tweet': path.resolve(__dirname, '../../src'),
      'solid-tweet/solid-tweet.css': path.resolve(__dirname, '../../src/solid-tweet.css'),
    },
  },
})
