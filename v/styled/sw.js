const CACHE_NAME = "mynotes-cache-v1";
const urlsToCache = [
  "/MyNotes/",
  "/MyNotes/index.html",
  "/MyNotes/manifest.json",
  "https://yoylecookie.github.io/MyNotes/logo.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
