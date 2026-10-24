
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// https://vite.dev/config/.....for github deployment
// export default defineConfig({
  
//   plugins: [react()],
//   base: '/Sotech/',
// })
// for vercel deployment

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
})