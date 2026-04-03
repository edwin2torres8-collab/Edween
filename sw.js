self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('countdown-app').then(cache => {
      return cache.addAll(['./']);
    })
  );
});