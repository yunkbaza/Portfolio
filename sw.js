/* ========================================================= */
/* SERVICE WORKER - ARQUITETURA SÊNIOR (Stale-While-Revalidate) */
/* ========================================================= */

const CACHE_NAME = 'portfolio-allan-baeza-v9';

// 1. Core Assets: Ficheiros críticos cacheados logo na instalação
const CORE_ASSETS = [
  './',
  './index.html',
  './pages/projetos.html',
  './pages/sobre.html',
  './pages/curriculo.html',
  './pages/certificados.html',
  './styles/style.css',
  './scripts/app.js',
  './manifest.webmanifest',
  './assets/logo.svg',
  // Imagens essenciais para a Home e Projetos
  './img/Foto_Allan.jpg',
  './img/Baza_Bank.png',
  './img/CarefulBaza.jpg',
  './img/Dashboard_IFood.jpg',
  './img/Porto_Projeto.jpg',
  './img/ProOcean.jpg',
  './img/App_Emergencia.jpg'
];

// ==========================================
// INSTALAÇÃO: Faz o download inicial (Pre-cache)
// ==========================================
self.addEventListener('install', (event) => {
  // skipWaiting força o SW a instalar imediatamente, sem esperar que as abas fechem
  self.skipWaiting(); 
  
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Fazendo pre-cache dos Core Assets');
      return cache.addAll(CORE_ASSETS);
    })
  );
});

// ==========================================
// ATIVAÇÃO: Limpa caches antigos e assume controlo
// ==========================================
self.addEventListener('activate', (event) => {
  // clients.claim() garante que o SW assuma o controlo da página imediatamente
  event.waitUntil(self.clients.claim());

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log(`[Service Worker] Limpando cache antigo: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// ==========================================
// FETCH: Estratégia Stale-While-Revalidate (SWR)
// ==========================================
self.addEventListener('fetch', (event) => {
  // Ignora requisições que não sejam GET (ex: POST do formulário de contato)
  if (event.request.method !== 'GET') return;

  // Ignora extensões do Chrome e chamadas a APIs externas
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      // 1. Tenta encontrar a resposta no cache imediatamente
      const cachedResponse = await cache.match(event.request);

      // 2. Faz o fetch na rede em background para atualizar o cache
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        // Se a resposta for válida, guarda um clone no cache dinamicamente
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          cache.put(event.request, networkResponse.clone());
        }
        return networkResponse;
      }).catch(() => {
        // 3. Fallback Offline (Quando a rede falha)
        // Se for um pedido de navegação (HTML) e não estiver no cache, devolve o index
        if (event.request.mode === 'navigate') {
          return cache.match('./index.html');
        }
        // Se for uma imagem que falhou, poderias retornar uma imagem de placeholder genérica aqui
      });

      // Retorna o Cache INSTANTANEAMENTE (se existir). 
      // Em pano de fundo, o 'fetchPromise' atualiza os ficheiros para a próxima visita.
      return cachedResponse || fetchPromise;
    })
  );
});