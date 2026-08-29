// Service Worker for the DGL 2026 Tagungsführer.
//
// Goal: once someone has opened the app once with a network connection, the
// whole app (programme, all days, floor plan, etc.) keeps working even with
// no or a very poor connection in the conference venue.
//
// Design note: this uses a "network-first, falling back to cache" strategy
// for every file, including app.js and app-data.js. That means whenever
// there IS a connection, people always get the latest version automatically
// — no manual cache-version bump needed when you update the app. The cache
// is purely a safety net for when the network is slow or unavailable.
const CACHE_NAME = 'dgl2026-cache';

// The "app shell": static files to pre-cache on install, so the very first
// offline visit already has something to fall back to. Update this list if
// you add new core files (e.g. a new logo).
const CORE_ASSETS = [
  './',
  'index.html',
  'app.js',
  'app-data.js',
  'announcement.json',
  'logo.png',
  'logo_dgl.png',
  'logo_igb.png',
  'logo_hu_berlin.png',
  'logo_sbahn.svg',
  'logo_pdf.png',
  'poster_ecr_de.png',
  'poster_ecr_en.png',
  'poster_s21_de.png',
  'poster_s21_en.png',
  'poster_gettogether_de.png',
  'poster_gettogether_en.png',
  'poster_gesellschaftsabend_de.png',
  'poster_gesellschaftsabend_en.png',
  'poster_menu_de.png',
  'poster_menu_en.png',
  'poster_e1_de.png',
  'poster_e1_en.png',
  'poster_e2_de.png',
  'poster_e2_en.png',
  'poster_e3_de.png',
  'poster_e3_en.png',
  'poster_e4_de.png',
  'poster_e4_en.png',
  'poster_e5_de.png',
  'poster_e5_en.png',
  'poster_e6_de.png',
  'poster_e6_en.png',
  'poster_e7_de.png',
  'poster_e7_en.png',
  'floorplan_de.svg',
  'floorplan_en.svg',
  'poster_stellplan_de.svg',
  'poster_stellplan_en.svg',
  'manifest.json',
  'icon-192.png',
  'icon-512.png'
];

// How long we wait for the network before giving up and using the cache
// instead. Keeps things responsive on a bad connection without waiting
// forever for a request that will never complete.
const NETWORK_TIMEOUT_MS = 4000;

self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      // Cache each core asset individually instead of cache.addAll(), which
      // aborts the ENTIRE install if even one URL 404s (e.g. a poster
      // filename that changed but wasn't updated here yet). One missing
      // file should degrade gracefully, not break offline support for
      // everything else.
      return Promise.all(CORE_ASSETS.map(function(url){
        return cache.add(url).catch(function(err){
          console.warn('sw: skipping uncachable asset', url, err);
        });
      }));
    }).then(function(){
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(
        keys.filter(function(key){ return key !== CACHE_NAME; })
            .map(function(key){ return caches.delete(key); })
      );
    }).then(function(){
      return self.clients.claim();
    })
  );
});

function fetchWithTimeout(req, ms){
  return new Promise(function(resolve, reject){
    var timer = setTimeout(function(){ reject(new Error('timeout')); }, ms);
    fetch(req).then(function(res){
      clearTimeout(timer);
      resolve(res);
    }).catch(function(err){
      clearTimeout(timer);
      reject(err);
    });
  });
}

self.addEventListener('fetch', function(event){
  var req = event.request;
  if(req.method !== 'GET') return;

  event.respondWith(
    fetchWithTimeout(req, NETWORK_TIMEOUT_MS).then(function(res){
      // Got a fresh response — use it, and update the cache for next time
      // we're offline. Only cache "ok" same-origin-ish responses.
      if(res && res.ok){
        var resClone = res.clone();
        caches.open(CACHE_NAME).then(function(cache){ cache.put(req, resClone); });
      }
      return res;
    }).catch(function(){
      // No network (or too slow) — serve whatever we last cached.
      return caches.match(req).then(function(cached){
        return cached || Promise.reject('no-cache-match');
      });
    })
  );
});
