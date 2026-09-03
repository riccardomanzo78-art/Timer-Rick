"use strict";

const CACHE_VERSION = "aba-pratico-pwa-v2-4";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./apple-touch-icon-180.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches
      .keys()
      .then(keys =>
        Promise.all(
          keys
            .filter(key =>
              key.startsWith("aba-pratico-pwa-") &&
              key !== CACHE_VERSION
            )
            .map(key => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  const request = event.request;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_VERSION)
            .then(cache => cache.put("./index.html", copy));
          return response;
        })
        .catch(() =>
          caches.match("./index.html")
            .then(cached => cached || caches.match("./"))
        )
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;

      return fetch(request).then(response => {
        if (
          response &&
          response.status === 200 &&
          response.type !== "opaque"
        ) {
          const copy = response.clone();
          caches.open(CACHE_VERSION)
            .then(cache => cache.put(request, copy));
        }

        return response;
      });
    })
  );
});
