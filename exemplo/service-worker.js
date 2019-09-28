let cacheName = 'sw-son';

let filesToCache = [
 '/',
 '/estilo.css',
 'index.html'
]

self.addEventListener('install', (e) => {
  console.log('[ServiceWorker] installer')
  e.waitUntil(
    caches.open(cacheName)
    .then(cache => {
      console.log('[Servicework] Caching app shell')
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', (e) => console.log('[Service-worker] ativado'))

self.addEventListener('fetch', (e) => {
  console.log('[Service-worker] fetch', e.request.url);
  e.respondWith(
    caches.match(e.request)
    .then(resp => resp || fetch(e.request))
  );
})
