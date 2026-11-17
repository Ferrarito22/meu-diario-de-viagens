const CACHE_NAME = 'diario-viagens-v2';
const ASSETS = ['/', '/index.html', '/manifest.json', '/logo-app.jpg', '/cristo-br.jpg'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
