// Guarda os arquivos do app para funcionar sem internet na quadra.
const CACHE = "volei-v10";
const ARQUIVOS = ["./", "./index.html", "./manifest.webmanifest", "./icon-180.png", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});

// Rede primeiro (pega atualizações), cache se estiver offline.
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  // Página principal sempre buscada sem cache, para a versão nova aparecer na hora.
  const pagina = e.request.mode === "navigate";
  e.respondWith(
    fetch(pagina ? new Request(e.request.url, { cache: "no-store" }) : e.request)
      .then((r) => {
        if (r.ok && new URL(e.request.url).origin === location.origin) {
          const copia = r.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copia));
        }
        return r;
      })
      .catch(() => caches.match(e.request).then((m) => m || caches.match("./index.html")))
  );
});
