'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d07d10cb42533a040fb904b7e329e4f1",
"assets/assets/images/dark/dark1.png": "95bc7424548d32a2d4b952c58e4893e8",
"assets/assets/images/dark/dark1_.png": "8e05f72784610bdb89f002517de0e12c",
"assets/assets/images/dark/dark1_lowheight.png": "6cb4310654c43ea51594c2a7cf1090c7",
"assets/assets/images/dark/dark1_lowheight_.png": "75961822f2507abf1474bf495c6891f5",
"assets/assets/images/dark/dark2.png": "e9f4f2a9f26395d59ab4293fadf0d48a",
"assets/assets/images/dark/dark2_.png": "b06cb935dde60e60255ecd5577193fc5",
"assets/assets/images/dark/dark_splash_logo.gif": "2930542c89203d82ebba90ab4a4e8b25",
"assets/assets/images/general/error.jpg": "f730f2f90d8e25f9bacf18d3725d0338",
"assets/assets/images/general/logo_full.png": "600770bab4c5db40ea483241b96c7a74",
"assets/assets/images/general/maintenance.jpg": "d7e446669824eee723d17b196175f6a0",
"assets/assets/images/general/splash_logo.png": "d84c97ada11aa43497b3bab8d9b2bbec",
"assets/assets/images/intro/analyst.jpg": "ded4396bc490ecf936e8d9e377c44c16",
"assets/assets/images/intro/api_sec.jpg": "d6239905085b14a930049dec4c2cdc2a",
"assets/assets/images/intro/approved.jpg": "e88648e8bb8c09027b170900797f4cd6",
"assets/assets/images/intro/cloud_sec.jpg": "aa218f701b73e9816f32fc9c45bdf21c",
"assets/assets/images/intro/engineer.jpg": "4693582a0cc23b6bc5ddf3ad584829d7",
"assets/assets/images/intro/responsive.jpg": "3b322bd7d795535be95d3988c630c66a",
"assets/assets/images/intro/sign_in.jpg": "554a2ad3d0b0fc4346445f2d938fb1fe",
"assets/assets/images/intro/time.jpg": "e07ca3c908f3df82c0bb21874799fc74",
"assets/assets/images/light/light1.png": "1cee2652413480c907f79af63e3c3ff1",
"assets/assets/images/light/light1_lowheight.png": "19e4c1b00dfbcbce9fffcc9bb0ef9e45",
"assets/assets/images/light/light2.png": "2746e31137eb7825eecfe0d323f71e6b",
"assets/assets/images/light/logo_full.png": "762bb9b71e8c783601f28cfa1ffb2025",
"assets/assets/images/light/logo_full_low_height.png": "6e86c976c554219234ebaa8f561e0984",
"assets/assets/images/light/logo_max.png": "5d8835baf71e29cc907e19726c7de9ac",
"assets/assets/images/light/logo_min.png": "5fa4985139437d204e1869dd2a4e0cea",
"assets/assets/images/light/logo_min_home.png": "91165cbd758f148da0f16000e6128b53",
"assets/assets/pdfs/9100-3-57-H1NL-010-YA1-4A.pdf": "753d10d0327597dc3123d70955cf37b0",
"assets/assets/pdfs/Isometric.pdf": "fb30fd7090b5983de9564deb1a352dd0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "d84cb7e5b530468cf165f653b6c523ad",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "50100ef47045bdd5898f9d48ec32a460",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "37143fff6b020f5e7d0a0bcd64c4a260",
"/": "37143fff6b020f5e7d0a0bcd64c4a260",
"main.dart.js": "0bf81ac8b19fc8cc738601e9ec2defa3",
"manifest.json": "b6a155b805f0d919a33c0aca6f33d8f7",
"splash/img/dark-1x.png": "6762c0045a9d2d2a67a550a0abd0934a",
"splash/img/dark-2x.png": "8f13ee2bc8ed7e1dbda7ca7aff1ff120",
"splash/img/dark-3x.png": "c48e2b7e3ef53bec9f01ca1f1c584630",
"splash/img/dark-4x.png": "eaf0dc54ba0fabf4988f454646960d98",
"splash/img/light-1x.png": "6762c0045a9d2d2a67a550a0abd0934a",
"splash/img/light-2x.png": "8f13ee2bc8ed7e1dbda7ca7aff1ff120",
"splash/img/light-3x.png": "c48e2b7e3ef53bec9f01ca1f1c584630",
"splash/img/light-4x.png": "eaf0dc54ba0fabf4988f454646960d98",
"splash/style.css": "25e129a0065309fdcd8e390394af4877",
"version.json": "cdeb8021c7f09c94e3d3c7ef576bfa28"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
