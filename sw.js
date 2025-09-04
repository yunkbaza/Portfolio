/**
 * Service Worker — estratégia cache-first para ativos estáticos.
 *
 * Escopo relativo: funciona bem quando o site é servido em subpastas
 * (ex.: GitHub Pages). Os arquivos listados em ASSETS são pré-cacheados
 * na instalação; durante o fetch, tenta do cache antes da rede.
 */
const CACHE = 'portfolio-v7';
const ASSETS = [
  'index.html',
  'styles/style.css',
  'scripts/app.js',
  'assets/logo.svg',
  'pages/sobre.html',
  'pages/projetos.html',
  'pages/curriculo.html',
  'pages/certificados.html'
];

self.addEventListener('install', e => {
  // Pré-carrega os assets essenciais e assume controle imediatamente
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('activate', e => {
  // Remove caches antigos e assume as páginas abertas
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Responde do cache (ignorando querystring); se não houver, busca da rede
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request))
  );
});

