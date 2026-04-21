const CACHE_NAME = "mynotes-cache-v2";
const urlsToCache = [
  "/MyNotes/v/styled/",
  "/MyNotes/v/styled/index.html",
  "/MyNotes/v/styled/manifest.json",
  "/MyNotes/v/styled/logo.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
