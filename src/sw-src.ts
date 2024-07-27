import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { CacheFirst } from "workbox-strategies";
import { ExpirationPlugin } from "workbox-expiration";
import { cacheNames } from "workbox-core";

// Precache and route the assets
precacheAndRoute(self.__WB_MANIFEST);

// Define cache names
let currentCacheNames: { [key: string]: string } = Object.assign(
  { precacheTemp: cacheNames.precache + "-temp" },
  cacheNames
);

// Add custom cache name for fonts
currentCacheNames.fonts = "googlefonts";

// Register route for fonts
registerRoute(
  /https:\/\/fonts\.(?:googleapis|gstatic)\.com\/(.*)/,
  new CacheFirst({
    cacheName: currentCacheNames.fonts,
    plugins: [new ExpirationPlugin({ maxEntries: 30 })],
  }),
  "GET"
);

// Clean up old service worker caches
self.addEventListener("activate", function (event: ExtendableEvent) {
  event.waitUntil(
    caches.keys().then(function (cacheNames: string[]) {
      let validCacheSet: Set<string> = new Set(
        Object.values(currentCacheNames)
      );
      return Promise.all(
        cacheNames
          .filter(function (cacheName: string) {
            return !validCacheSet.has(cacheName);
          })
          .map(function (cacheName: string) {
            console.log("deleting cache", cacheName);
            return caches.delete(cacheName);
          })
      );
    })
  );
});
