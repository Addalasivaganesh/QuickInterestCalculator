// service-worker.js

// Install event: cache essential files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("app-cache").then((cache) => {
      return cache.addAll([
        "/",            // root
        "/index.html",  // main page
        "/style.css",   // styles
        "/script.js"    // app logic
      ]);
    })
  );
});

// Fetch event: serve cached files, else fetch from network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached response if available
      if (response) {
        return response;
      }
      // Otherwise fetch from network
      return fetch(event.request);
    })
  );
});
