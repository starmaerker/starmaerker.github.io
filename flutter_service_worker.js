'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8d754fe9f4fa5e2dded098c0f8642204",
".git/config": "258f067b06d3b11c6e5e82b505b05b6a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f98378b1e3319b5cda84676e0b27142b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "7dec905c91a26e5f30c8ab3c01eba93c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "98505d92c35eac7053d86ca49ddd7afe",
".git/logs/refs/heads/main": "b546afa9883a9d21d2b9b0392737abae",
".git/logs/refs/remotes/origin/main": "057953008cd65d53da8042efef6753b9",
".git/objects/00/060d68f157f13289e2ddf0a05c92a8ddb7c134": "1e299e658124bf72907d1b230746f78c",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/90a39fa0f55502c6dce0343fb45aa4ee139787": "9eabf36530f3eb4d08fcf6888d074bda",
".git/objects/0e/d41579ccb9c34546aeb1afbea555c2e385ac6a": "53766a5c2b3681ee7653332fffcb7cf0",
".git/objects/0f/c6b8698750b696eee0acd7f3c20850af954bba": "6ebbfb3d802e2c220d9d88b300f8c3ac",
".git/objects/14/064fe6560d4931f5d72ab7eb20827ace4500e3": "d52568f79a26ebce72c389e9eab311d7",
".git/objects/15/b30e20d7cd27cad2cd02a61bfd83d4fdd8533f": "6d04e905699378ea7903e11fd253844e",
".git/objects/19/c04d68599bc1296d673e8743731f24203de45a": "2b6f439e178a015966d4a7ed32a85393",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/2f/10be02ae8696e985ac26c0730c4b7114eb56e6": "bfd2ae25600e8c0d4c24817e30d2baf6",
".git/objects/31/c0c1b5e60a81c5377d44ec364db273e3f29127": "efb29d5f736cc1b3d805de3cdce4be61",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/760ceb2656c773d2d05438486ceb5acdf3c718": "cd21244b0291a8629555bd155ea69ff3",
".git/objects/3e/85cc131329b3fbe6cf9de61ac81da30a2e72ea": "26d1859bf37ae367d776956d7e5a95a5",
".git/objects/3f/aed3e36a4c4e82d40978e61566d1e933c61f42": "f23fcfb77ae2158d16c217f8dcda95c1",
".git/objects/40/2082a064257d910dc82857cb99b218cd17558d": "a8d2da28fcf397a1ec2b50ca12e6afec",
".git/objects/45/72137a324cbef868552de3061ead231222c013": "73b69b8bf17205a89d3b914f9b394677",
".git/objects/45/f829c3da692746d72bf1993cf9734e21045606": "754610b7edabf6dee12a28e1486358b0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/53/70bcc74abaaf848e1540acc0f52c10518ac357": "b2c3238bab9398cc25680de93d7f52cb",
".git/objects/57/a999e43f43bc2183c147cf4168b2bd0fe9fd4f": "e9e290f67da08456ae8a0d76275a197b",
".git/objects/59/bf395c11ff9d9aba82c6dca7d611414972d6cc": "2dbb945f31fa0a0135666e7f392b2bd7",
".git/objects/5c/58b1397d6479bf0e92d91ce207c05a2549cf90": "4c1a700e8eb7afabff432d3116285c89",
".git/objects/5c/61aaba3cc3bd3670a7b5e160865db2ad7bd118": "1342122d127c3cb2d5cfb129e11cb366",
".git/objects/5d/639c0b49c654d07824ef51e464cce0e050cf93": "bc0694f1a78942851ae082bd80a178b8",
".git/objects/5d/9db4b784872d552da7941f2ae281cd6e157be3": "866f25dfa4336a209c5b485c5cf6e726",
".git/objects/5d/fc617be59a58993586c02d57ae005a35449be5": "eb860e341b9b0bb177369cb7c824764e",
".git/objects/5e/3aad7b9524eff3e2f32cb08dd362d8e9ad7c61": "6d909a9a32c928c9a2917db71f34ada6",
".git/objects/6c/0244b5d0e4d07483636ccba6ed47072ee04d39": "31547d8cb8a7e1823b0576954d53fc29",
".git/objects/71/6357442be7b8b1ab6ef13961134875e8302bec": "c6ca2059d111995609733f1652deb3dd",
".git/objects/76/5d9e0a16909e886451be3b06ebbf1553674a4d": "2747da2d7966bc3fa76d370357849447",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/08a64936f3cd707b335ecc3eb4d5093661ed0b": "86e73b9ff89c0116bf5e6367a4f9a474",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/03bc733fa097e2df5c46ecd66deae1b223f91a": "d5c4edbb7792700afc43a08e5cee5608",
".git/objects/93/87bd0d4c65b30d0efa3473ea36f73aa7d04d5e": "36a3bb744c79c98d4303723aff023477",
".git/objects/94/ced133b8f9100a0e19d22a0f77e57eeb288fa4": "7f7b11c0aef7bafae03a161492c4de26",
".git/objects/9e/eb6465773e88fb47dd3ba0dd00ed84de215429": "c7c8c8a06b49a49d85f73f63762a2d7e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a3/b7e2ca0003ca00135ad744aeaf47c891cd6e5c": "cc8c211b8c7f6b14806c2678074f8890",
".git/objects/a5/41463c1e1ef64842845424089bfcaaa4aa86db": "b0c1b4396553871aec9d55f3b20448e3",
".git/objects/a8/abd36605bf5495df82849ea8a1ad3e4295e6a2": "0f1333123525467b313c63f8426b401e",
".git/objects/a8/b9e2cc9262552f0c5aace6656af44d94d48957": "2e2f4b2e464e682948c365859ea17f94",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/38ee7748b937855c0a2ee8dc8ced47db6fe18f": "543878b8cddcbcf3e3feae0acff4253d",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/af/8b892379c41d2e1697f4945c1e75d730a79048": "1d8a76af6d6b0f2d0e0b97a2673732e3",
".git/objects/b2/d57c4334498d176ecf37a875b213530f1a6c24": "3ffe472967923a6d1a63a7ae2b17b38a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ec30b4526b36e7de8ce0783e05a9e0ae1a0cb2": "819d7a71b5943c4997c4321452684fcf",
".git/objects/bd/0d89f0ff478f4da79a44001b5e08bf07215f0d": "bb281183ea7e69ae490f143bbe3de011",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/c7/ea41e1a76b08821146032b1e8fdf9bedfe3193": "a0aead001b16b2ebda8d947f9d9434f7",
".git/objects/ca/3e0cc33552e99be218ea6a0c0d9f55e1b8761f": "1f8d7fca8f8c0a6bfec80df879a91302",
".git/objects/cb/4369cb0b565125984f7fe8e2bdfde2efdb53e1": "fef372733749a474be462834ae3a79ca",
".git/objects/cb/ab007a0b9b10bea3652bae00862b237e10bf94": "208d46e823045054198648768263d207",
".git/objects/cd/f68f2bdf4cee2cae022ba33bbe614047d6b46d": "bc5f4749a20b77e8e28cd3238f9801dc",
".git/objects/dd/e71a457d1673b564233e98d06cd64e4e25d611": "6830a42dd073aa7905a06731bf1e86bc",
".git/objects/e4/56001e2b061a2028a7929d2410fc0c9452183a": "eb108201f4cd623460669be33d9fada4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/374152fabf5002a7847cc104b66d0ac57d688d": "fbc930ba53e68780a712577acf2332dd",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f9/25378b4552222fa6749e2275580cc6cded6d98": "ca81a1ea32feda74be2c25b52ed63d82",
".git/refs/heads/main": "a5812787573a2deff19840a9b8214d35",
".git/refs/remotes/origin/main": "a5812787573a2deff19840a9b8214d35",
"assets/AssetManifest.json": "3c2410f196d2cbd709943c4fea637014",
"assets/assets/documents/dart_complete_reference.pdf": "352e5eeccbc69fab353a088561a713be",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/images/dart_side_black.png": "7c20743343a11dbc93dcc4f7a52b2f2e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b9f4dcc4e56e3a282960fe8f506733a1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "3415e54e1ce9adaa48a392dea239b6cc",
"/": "3415e54e1ce9adaa48a392dea239b6cc",
"main.dart.js": "15383dfb84dcccc7d97bc209938000de",
"manifest.json": "9525b2d8c19d2c713ea35849fb6b1d45",
"version.json": "43d5d8437998d036aa7da4e325d5efd3"
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
