const cacheName = 'black-hole-v1';

self.addEventListener('fetch', (event) => {
  event.respondWith(
    (async () => {
      const responseFromCache = await caches.match(event.request);

      if (responseFromCache !== undefined) {
        return responseFromCache;
      }

      const cache = await caches.open(cacheName);

      try {
        const response = await fetch(event.request);
        if (response.status === 200) {
          cache.put(event.request, response.clone());
        }
        return response;
      } catch {
        return responseFromCache;
      }
    })()
  );
});
