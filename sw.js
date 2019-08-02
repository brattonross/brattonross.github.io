importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/31f62385a13e96c9eb12.js",
    "revision": "e22b09c603937a4f39004a553e0c25eb"
  },
  {
    "url": "/_nuxt/40e0cf6a6d1c6071b912.js",
    "revision": "365acab9ee199cc5604ff75eeab3033d"
  },
  {
    "url": "/_nuxt/9e860c009f5976e4dba9.js",
    "revision": "77d38de2d5122e35e7d8f2d262d0e3e8"
  },
  {
    "url": "/_nuxt/d1672c2bd59b5d6175f5.js",
    "revision": "5fcd8a5df83a904b240f4e75d4f8f9b1"
  }
], {
  "cacheId": "brattonross.github.io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
