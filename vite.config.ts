import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import fs from 'fs';
import ssl from '@vitejs/plugin-basic-ssl';

// Works in terms of /vite-dev/entrypoints/application.js is loaded, but can't connect to dev server, as it's making requests to https://localhost:3036
// export default defineConfig({
//   plugins: [
//     RubyPlugin(),
//   ]
// })

// Causes a 500 when loading /vite-dev/entrypoints/application.js
// Rack app ("GET /vite-dev/entrypoints/application.js" - (127.0.0.1)): #<EOFError: end of file reached>
export default defineConfig({
  plugins: [
    RubyPlugin(),
  ],
  server: {
    https: {
      key: fs.readFileSync('./ssl/localhost.key'),
      cert: fs.readFileSync('./ssl/localhost.crt'),
      ca: fs.readFileSync('./ssl/RootCA.pem'),
    },
    hmr: true,
  }
})

// Alternative dev server SSL config that also doesn't work
// Causes a 500 when loading /vite-dev/entrypoints/application.js
// Rack app ("GET /vite-dev/entrypoints/application.js" - (127.0.0.1)): #<EOFError: end of file reached>
// export default defineConfig({
//   plugins: [
//     RubyPlugin(),
//     ssl()
//   ],
//   server: {
//     https: true,
//     hmr: true,
//   }
// })