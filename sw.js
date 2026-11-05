// Elevportal BA Vg1 – enkel offline-støtte.
// Henter alltid nyeste versjon fra nettet når det er mulig, og bruker lagret kopi uten nett.
// Øk VERSJON når filer legges til i FILER.
const VERSJON = "v4";
const CACHE = "elevportal-" + VERSJON;
const FILER = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./ikoner/ikon.svg",
  "./ikoner/ikon-192.png",
  "./ikoner/ikon-512.png",
  "./data/innhold.json",
  "./hms-tavle/",
  "./hms-tavle/index.html",
  "./risikovurdering/",
  "./risikovurdering/index.html"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILER)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith("elevportal-") && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req)
      .then(res => {
        if (res.ok) { const kopi = res.clone(); caches.open(CACHE).then(c => c.put(req, kopi)); }
        return res;
      })
      .catch(() => caches.match(req).then(r => r || caches.match("./")))
  );
});
