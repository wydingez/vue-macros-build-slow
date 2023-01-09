import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import timeReporter from 'vite-plugin-time-reporter';
import VueMacros from "unplugin-vue-macros/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueMacros({}), 
    timeReporter()
  ],
})
