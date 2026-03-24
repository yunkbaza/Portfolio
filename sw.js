/* ========================================================= */
/* SERVICE WORKER - Força a atualização do cache (V8)        */
/* ========================================================= */

// Mudamos o nome do cache para 'v8'. Isso avisa ao navegador 
// que há novos arquivos (como suas fotos) e ele deve recarregar tudo.
const CACHE = 'portfolio-v8-premium-fixed-images'; 

// Lista de arquivos que serão salvos para funcionar offline
const ASSETS = [
  '/',
  '/index.html',
  '/pages/projetos.html',
  '/pages/curriculo.html',
  '/pages/certificados.html',
  '/styles/style.css',
  '/scripts/app.js',
  '/manifest.webmanifest',
  '/assets/logo.svg',
  '/sw.js',
  // Seus certificados (adicione todos que estão na pasta)
  '/certificates/challenge-porto-seguro.pdf',
  '/certificates/api-ifood.pdf',
  // Suas fotos de projetos (garanta que elas existam na pasta img/)
  '/img/CarefulBaza.jpg',
  '/img/ProOcean.jpg',
  '/img/Porto_Projeto.jpg',
  '/img/Dashboard_IFood.jpg',
  '/img/App_Emergencia.jpg'
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Força o SW a se tornar ativo imediatamente
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS))
  );
});

// Ativação e limpeza de caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      // Se o cache antigo não tiver o nome 'portfolio-v8-premium-fixed-images', ele é apagado
      keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))
    ))
  );
});

// Responde às requisições com cache ou rede
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Retorna do cache se encontrar, senão busca na rede
      return response || fetch(event.request).then((fetchResponse) => {
        // Opcionalmente, pode-se salvar arquivos novos no cache dinamicamente aqui
        return fetchResponse;
      });
    }).catch(() => {
      // Se a rede falhar, retorna a página inicial (se estiver no cache)
      if (event.request.mode === 'navigate') {
        return caches.match('/index.html');
      }
    })
  );
});