// ========== Adicionar Projeto (dinâmico) ==========
(() => {
  const btn = document.getElementById('add-project-btn');
  const grid = document.querySelector('.grid.cards');
  if(!btn || !grid) return;
  // Carregar projetos do localStorage
  function loadProjects(){
    const saved = JSON.parse(localStorage.getItem('portfolio_projects')||'[]');
    saved.forEach(p => addProjectCard(p, false));
  }
  // Adiciona card de projeto
  function addProjectCard(data, save=true){
    const el = document.createElement('article');
    el.className = 'card project-card reveal visible';
    el.setAttribute('data-project','');
    el.setAttribute('data-tags', data.tags);
    el.innerHTML = `
      <img loading="lazy" decoding="async" width="400" height="160" src="${data.img}" alt="${data.nome}"/>
      <h3>${data.nome}</h3>
      <div class="project-meta">
        ${(data.tags||'').split(',').map(t => `<span class="tag skill">${t.trim()}</span>`).join('')}
      </div>
      <a class="btn secondary" href="#" rel="noopener">Case</a>
    `;
    grid.appendChild(el);
    if(save){
      const arr = JSON.parse(localStorage.getItem('portfolio_projects')||'[]');
      arr.push(data); localStorage.setItem('portfolio_projects', JSON.stringify(arr));
    }
  }
  btn.addEventListener('click', function(){
    let modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(30,30,30,0.55)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '10001';
    modal.style.backdropFilter = 'blur(2px)';
    modal.innerHTML = `
      <div style="background:var(--card);padding:38px 28px;border-radius:22px;max-width:400px;width:100%;box-shadow:0 16px 48px rgba(0,0,0,.38);text-align:center;position:relative;animation:modalFadeIn .32s cubic-bezier(.2,.8,.2,1);">
        <h2 style="margin-bottom:22px;font-size:1.6rem;font-weight:800;letter-spacing:.5px;">Adicionar Projeto</h2>
        <input type="text" id="novoProjetoNome" placeholder="Nome do projeto" style="width:100%;margin-bottom:14px;padding:12px 14px;border-radius:10px;border:1.5px solid var(--border);background:rgba(255,255,255,0.12);color:var(--text);font-size:1rem;" />
        <input type="text" id="novoProjetoTag" placeholder="Tags (ex: mobile, backend)" style="width:100%;margin-bottom:14px;padding:12px 14px;border-radius:10px;border:1.5px solid var(--border);background:rgba(255,255,255,0.12);color:var(--text);font-size:1rem;" />
        <input type="text" id="novoProjetoImg" placeholder="URL da imagem" style="width:100%;margin-bottom:18px;padding:12px 14px;border-radius:10px;border:1.5px solid var(--border);background:rgba(255,255,255,0.12);color:var(--text);font-size:1rem;" />
        <div style="display:flex;gap:12px;justify-content:center;margin-top:10px;">
          <button id="confirmAddProject" class="btn" style="padding:12px 24px;font-size:1rem;font-weight:700;">Adicionar</button>
          <button id="closeModalProject" class="btn secondary" style="padding:12px 24px;font-size:1rem;font-weight:700;">Cancelar</button>
        </div>
      </div>
      <style>
        @keyframes modalFadeIn { from { opacity:0; transform:scale(.96); } to { opacity:1; transform:scale(1); } }
      </style>
    `;
    document.body.appendChild(modal);
    document.getElementById('closeModalProject').onclick = function(){
      modal.remove();
    };
    document.getElementById('confirmAddProject').onclick = function(){
      const nome = document.getElementById('novoProjetoNome').value.trim();
      const tags = document.getElementById('novoProjetoTag').value.trim();
      const img = document.getElementById('novoProjetoImg').value.trim();
      if(!nome || !tags || !img){ alert('Preencha todos os campos!'); return; }
      addProjectCard({nome, tags, img});
      modal.remove();
    };
  });
  loadProjects();
})();

// ========== Adicionar Certificado (dinâmico) ==========
(() => {
  const btn = document.getElementById('add-cert-btn');
  const grid = document.querySelector('.certs-grid');
  if(!btn || !grid) return;
  // Carregar certificados do localStorage
  function loadCerts(){
    const saved = JSON.parse(localStorage.getItem('portfolio_certs')||'[]');
    saved.forEach(c => addCertCard(c, false));
  }
  // Adiciona card de certificado
  function addCertCard(data, save=true){
    const el = document.createElement('article');
    el.className = 'card reveal visible';
    el.innerHTML = `
      <h3>${data.titulo}</h3>
      <div class="credential-meta">
        <span class="tag">Emissor: ${data.emissor}</span>
        <span class="tag">Emitido: ${data.emitido}</span>
        ${(data.categorias||'').split(',').map(t => `<span class="tag">${t.trim()}</span>`).join('')}
      </div>
      <p class="credential-code">Código: ${data.codigo}</p>
      <div class="actions">
        <a class="btn secondary" href="${data.url}" target="_blank" rel="noopener">Exibir credencial</a>
      </div>
    `;
    grid.appendChild(el);
    if(save){
      const arr = JSON.parse(localStorage.getItem('portfolio_certs')||'[]');
      arr.push(data); localStorage.setItem('portfolio_certs', JSON.stringify(arr));
    }
  }
  btn.addEventListener('click', function(){
    let modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(30,30,30,0.55)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '10001';
    modal.style.backdropFilter = 'blur(2px)';
    modal.innerHTML = `
      <div style="background:var(--card);padding:38px 28px;border-radius:22px;max-width:400px;width:100%;box-shadow:0 16px 48px rgba(0,0,0,.38);text-align:center;position:relative;animation:modalFadeIn .32s cubic-bezier(.2,.8,.2,1);">
        <h2 style="margin-bottom:22px;font-size:1.6rem;font-weight:800;letter-spacing:.5px;">Adicionar Certificado</h2>
        <input type="text" id="novoCertTitulo" placeholder="Título do certificado" style="width:100%;margin-bottom:14px;padding:12px 14px;border-radius:10px;border:1.5px solid var(--border);background:rgba(255,255,255,0.12);color:var(--text);font-size:1rem;" />
        <input type="text" id="novoCertEmissor" placeholder="Emissor" style="width:100%;margin-bottom:14px;padding:12px 14px;border-radius:10px;border:1.5px solid var(--border);background:rgba(255,255,255,0.12);color:var(--text);font-size:1rem;" />
        <input type="text" id="novoCertEmitido" placeholder="Data de emissão" style="width:100%;margin-bottom:14px;padding:12px 14px;border-radius:10px;border:1.5px solid var(--border);background:rgba(255,255,255,0.12);color:var(--text);font-size:1rem;" />
        <input type="text" id="novoCertCategorias" placeholder="Categorias (ex: Python, SQL)" style="width:100%;margin-bottom:14px;padding:12px 14px;border-radius:10px;border:1.5px solid var(--border);background:rgba(255,255,255,0.12);color:var(--text);font-size:1rem;" />
        <input type="text" id="novoCertCodigo" placeholder="Código da credencial" style="width:100%;margin-bottom:14px;padding:12px 14px;border-radius:10px;border:1.5px solid var(--border);background:rgba(255,255,255,0.12);color:var(--text);font-size:1rem;" />
        <input type="text" id="novoCertUrl" placeholder="URL da credencial" style="width:100%;margin-bottom:18px;padding:12px 14px;border-radius:10px;border:1.5px solid var(--border);background:rgba(255,255,255,0.12);color:var(--text);font-size:1rem;" />
        <div style="display:flex;gap:12px;justify-content:center;margin-top:10px;">
          <button id="confirmAddCert" class="btn" style="padding:12px 24px;font-size:1rem;font-weight:700;">Adicionar</button>
          <button id="closeModalCert" class="btn secondary" style="padding:12px 24px;font-size:1rem;font-weight:700;">Cancelar</button>
        </div>
      </div>
      <style>
        @keyframes modalFadeIn { from { opacity:0; transform:scale(.96); } to { opacity:1; transform:scale(1); } }
      </style>
    `;
    document.body.appendChild(modal);
  document.getElementById('closeModalCert').onclick = function(){ window.location.href = 'certificados.html'; };
    document.getElementById('confirmAddCert').onclick = function(){
      const titulo = document.getElementById('novoCertTitulo').value.trim();
      const emissor = document.getElementById('novoCertEmissor').value.trim();
      const emitido = document.getElementById('novoCertEmitido').value.trim();
      const categorias = document.getElementById('novoCertCategorias').value.trim();
      const codigo = document.getElementById('novoCertCodigo').value.trim();
      const url = document.getElementById('novoCertUrl').value.trim();
      if(!titulo || !emissor || !emitido || !categorias || !codigo || !url){ alert('Preencha todos os campos!'); return; }
      addCertCard({titulo, emissor, emitido, categorias, codigo, url});
      modal.remove();
    };
  });
  loadCerts();
})();
"use strict";
// app.js — consolidado: menu, tema, efeitos, projetos, contato, cursor, certificados

// ========== Navegação móvel + ARIA ==========
(() => {
  const toggle = document.querySelector('#nav-toggle');
  const links = document.querySelector('#nav-links');
  if(toggle){
    toggle.setAttribute('aria-controls', 'nav-links');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
  }
  /**
   * Fecha o menu mobile e sincroniza rótulos ARIA.
   * Side-effects: remove a classe ".open" e atualiza 'aria-*'.
   */
  const closeMenu = () => {
    links?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Abrir menu');
  };
  /** Abre o menu mobile e ajusta atributos ARIA. */
  const openMenu = () => {
    links?.classList.add('open');
    toggle?.setAttribute('aria-expanded', 'true');
    toggle?.setAttribute('aria-label', 'Fechar menu');
  };
  toggle?.addEventListener('click', () => (links?.classList.contains('open') ? closeMenu() : openMenu()));
  links?.addEventListener('click', () => closeMenu());
  document.addEventListener('click', (e) => {
    if(links?.classList.contains('open') && !links.contains(e.target) && e.target !== toggle){
      closeMenu();
    }
  });
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeMenu(); });
})();

// ========== Reveal on scroll ==========
(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); }});
  }, { threshold: 0.14 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

// ========== Smooth scroll para âncoras internas ==========
document.addEventListener('click', (e) => {
  const a = e.target.closest && e.target.closest('a[href^="#"]');
  if(a){
    const href = a.getAttribute('href');
    if(href && href.length > 1){
      e.preventDefault();
      const id = href.slice(1);
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block:'start'});
      history.replaceState(null, '', '#' + id);
    }
  }
});

// ========== Destaque da seção ativa no menu ==========
(() => {
  const sections = [...document.querySelectorAll('section[id]')];
  const navItems = new Map(
    [...document.querySelectorAll('.nav-links a[href^="#"]')]
      .map(a => [a.getAttribute('href').slice(1), a])
  );
  if(!sections.length || !navItems.size) return;
  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const id = entry.target.getAttribute('id');
        navItems.forEach((a, key) => {
          const is = key === id;
          a.classList.toggle('active', is);
          if(is){ a.setAttribute('aria-current', 'page'); } else { a.removeAttribute('aria-current'); }
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 });
  sections.forEach(s => activeObserver.observe(s));
})();

// ========== Ano atual no footer ==========
document.querySelectorAll('[data-year]')
  .forEach(el => el.textContent = new Date().getFullYear());

// ========== Tema (toggle + persistência) ==========
(() => {
  const themeBtn = document.querySelector('#theme-toggle');
  const stored = localStorage.getItem('theme');
  if(stored){
    document.documentElement.setAttribute('data-theme', stored);
  }else{
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    document.documentElement.setAttribute('data-theme', prefersLight ? 'light' : 'dark');
  }
  /**
   * Atualiza o label do botão de tema com o próximo estado (light/dark)
   * para manter acessibilidade em leitores de tela.
   */
  function syncThemeButtonA11y(){
    const cur = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = cur === 'dark' ? 'light' : 'dark';
    if(themeBtn){
      themeBtn.setAttribute('type','button');
      themeBtn.setAttribute('aria-label', next === 'light' ? 'Alternar para tema claro' : 'Alternar para tema escuro');
    }
  }
  syncThemeButtonA11y();
  /**
   * Alterna o tema, persiste no localStorage e aplica uma micro animação.
   */
  const toggleTheme = () => {
    const cur = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    syncThemeButtonA11y();
    themeBtn?.classList.add('switched');
    setTimeout(() => themeBtn?.classList.remove('switched'), 320);
  };
  themeBtn?.addEventListener('click', toggleTheme);

  // micro-glow nas .btn e .icon-btn
  let raf = 0, lastEvent = null;
  const handler = (e) => {
    lastEvent = e; if(raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0; const ev = lastEvent; if(!ev) return;
      const t = ev.target.closest?.('.btn, .icon-btn');
      if(!t) return; const r = t.getBoundingClientRect();
      t.style.setProperty('--mx', `${ev.clientX - r.left}px`);
      t.style.setProperty('--my', `${ev.clientY - r.top}px`);
    });
  };
  if(window.matchMedia('(pointer:fine)').matches){
    document.addEventListener('pointermove', handler);
  }
})();

// ========== Filtro de projetos (se existir) ==========
(() => {
  const filterBar = document.querySelector('#project-filters');
  const items = [...document.querySelectorAll('[data-project]')];
  if(!filterBar || !items.length) return;
  function applyFilter(tag){
    items.forEach(el => {
      const tags = (el.dataset.tags || '').split(',').map(s => s.trim().toLowerCase());
      const show = tag === 'all' || tags.includes(tag);
      el.style.display = show ? '' : 'none';
    });
  }
  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-tag]');
    if(!btn) return;
    [...filterBar.querySelectorAll('button')].forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilter(btn.dataset.tag);
  });
  applyFilter('all');
})();

// ========== Contato (form + WhatsApp) se existir ==========
(() => {
  const form = document.querySelector('#contact-form');
  if(!form) return;
  const success = document.querySelector('.success');
  const error = document.querySelector('.error');
  document.getElementById('whats-message')?.setAttribute('placeholder', 'Olá Allan, vim pelo portfólio e...');

  const SEND_MODE = 'auto'; // 'auto' | 'emailjs' | 'gas' | 'mailto'
  const EMAILJS_SERVICE_ID = '';
  const EMAILJS_TEMPLATE_ID = '';
  const EMAILJS_PUBLIC_KEY = '';
  const GAS_URL = '';
  const CONTACT_EMAIL = 'seu-email@exemplo.com';

  /**
   * Envia dados do formulário via EmailJS REST API.
   * Lança erro caso a resposta HTTP não seja OK.
   * @param {{name:string,email:string,message:string}} data
   */
  async function sendEmailJS(data){
    const url = 'https://api.emailjs.com/api/v1.0/email/send';
    const payload = { service_id: EMAILJS_SERVICE_ID, template_id: EMAILJS_TEMPLATE_ID, user_id: EMAILJS_PUBLIC_KEY, template_params: data };
    const res = await fetch(url, { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify(payload) });
    if(!res.ok) throw new Error('EmailJS error');
  }
  /**
   * Envia dados do formulário para um endpoint Google Apps Script.
   * @param {Record<string,string>} data
   */
  async function sendGAS(data){
    const res = await fetch(GAS_URL, { method:'POST', body: JSON.stringify(data) });
    if(!res.ok) throw new Error('GAS error');
  }
  /**
   * Obtém o e-mail de destino a partir do atributo data-email-to
   * do formulário ou de window.CONTACT_CONFIG.emailTo (fallback).
   * @returns {string}
   */
  function getToEmail(){
    const attr = form?.getAttribute('data-email-to');
    const cfg = (typeof window !== 'undefined' && window.CONTACT_CONFIG) ? window.CONTACT_CONFIG.emailTo : '';
    return attr || cfg || CONTACT_EMAIL || 'seu-email@exemplo.com';
  }
  /**
   * Fallback local: abre o cliente de e-mail via mailto: com
   * assunto e corpo montados a partir dos dados do formulário.
   * @param {{name?:string,email?:string,message?:string}} data
   */
  function sendMailto(data){
    const to = getToEmail();
    const subject = encodeURIComponent(`Contato do Portfolio - ${data.name || ''}`.trim());
    const body = [ data.message || '', '', `Nome: ${data.name || '-'}`, `Email: ${data.email || '-'}`].join('\n');
    const href = `mailto:${to}?subject=${subject}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }
  /**
   * Verifica se as credenciais do EmailJS estão configuradas.
   */
  function isEmailJsReady(){
    return Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY && !EMAILJS_SERVICE_ID.startsWith('YOUR_') && !EMAILJS_TEMPLATE_ID.startsWith('YOUR_') && !EMAILJS_PUBLIC_KEY.startsWith('YOUR_'));
  }
  /** Retorna true se o endpoint do Google Apps Script estiver definido. */
  function isGasReady(){ return Boolean(GAS_URL); }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if(success) success.style.display = 'none';
    if(error) error.style.display = 'none';
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    // a11y: reset aria-invalid
    ['name','email','message'].forEach(id => document.getElementById(id)?.setAttribute('aria-invalid','false'));
    if(!data.name || !data.email || !data.message){
      if(error){ error.textContent = 'Preencha todos os campos.'; error.style.display = 'block'; }
      // a11y: marcar faltantes
      if(!data.name) document.getElementById('name')?.setAttribute('aria-invalid','true');
      if(!data.email) document.getElementById('email')?.setAttribute('aria-invalid','true');
      if(!data.message) document.getElementById('message')?.setAttribute('aria-invalid','true');
      return;
    }
    try{
      if(SEND_MODE === 'emailjs' || (SEND_MODE === 'auto' && isEmailJsReady())){
        await sendEmailJS(data);
      }else if(SEND_MODE === 'gas' || (SEND_MODE === 'auto' && !isEmailJsReady() && isGasReady())){
        await sendGAS(data);
      }else{
        sendMailto(data);
      }
      form.reset(); if(success){ success.textContent = 'Mensagem enviada com sucesso!'; success.style.display = 'block'; }
    }catch(err){ if(error){ error.textContent = 'Não foi possível enviar. Tente novamente.'; error.style.display = 'block'; } }
  });

  document.getElementById('whats-send')?.addEventListener('click', () => {
    const card = document.getElementById('whats-card');
    const number = card?.getAttribute('data-whatsapp') || '';
    const msgWa = (document.getElementById('whats-message')?.value || '').trim();
    const name = (document.getElementById('name')?.value || '').trim();
    const email = (document.getElementById('email')?.value || '').trim();
    const msgForm = (document.getElementById('message')?.value || '').trim();
    if(!number){ alert('Defina seu número em data-whatsapp no elemento #whats-card.'); return; }
    const finalMsg = [ msgWa || msgForm || 'Olá Allan, vim pelo portfólio.', '', name && `Nome: ${name}`, email && `Email: ${email}` ].filter(Boolean).join('\n');
    const url = `https://wa.me/${number}?text=${encodeURIComponent(finalMsg)}`; window.open(url, '_blank');
  });
})();

// ========== Cursor customizado (desktop) ==========
(() => {
  if(!matchMedia('(pointer:fine)').matches) return;
  const dot = document.createElement('div');
  const ring = document.createElement('div');
  dot.className = 'cursor-dot'; ring.className = 'cursor-ring';
  dot.style.zIndex = '10002'; ring.style.zIndex = '10002';
  document.body.append(dot, ring);
  window.addEventListener('mousemove', e => {
    dot.style.left = e.clientX + 'px'; dot.style.top = e.clientY + 'px';
    ring.style.left = e.clientX + 'px'; ring.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a,button,.btn,.project-card').forEach(el => {
    el.addEventListener('mouseenter', () => document.documentElement.setAttribute('data-cursor','hover'));
    el.addEventListener('mouseleave', () => document.documentElement.removeAttribute('data-cursor'));
  });
})();

// ========== Certificados (somente na página certificados) ==========
(() => {
  const grid = document.querySelector('.certs-grid');
  if(!grid) return;
  const CERTIFICATES = [
    { title: 'Santander Tech+ | Fundamentos Tech', issuer: 'Santander', issued: 'jan/2025', code: '094cf9a-1157-8f0a-26b0-f0f08fa9d139', categories: ['Fundamentos Tech'], url: 'https://ada.tech/certificado?code=094cf49a-1157-8f0a-26b0-fd80f8a9d139?lang' },
    { title: 'AWS Certification: Solutions Architect Associate Parte 2', issuer: 'Alura', issued: 'dez/2024', code: 'c8c3ffba-b960-4497-8c5f-9b11925396e5', categories: ['Amazon Web Services'], url: 'https://cursos.alura.com.br/certificate/c8c3ffba-b960-4497-8c5f-9b1192539de5?lang' },
    { title: 'AWS Certification: Solutions Architect Associate Parte 3', issuer: 'Alura', issued: 'dez/2024', code: 'd454ed8a-5b44-4116-9c61-de15e3972d74', categories: ['Amazon Web Services'], url: 'https://cursos.alura.com.br/certificate/d454ed8a-5b44-4116-9c61-de15e3972d74?lang' },
    { title: 'AWS Certification: Solutions Architect Associate Parte 4', issuer: 'Alura', issued: 'dez/2024', code: '865d4052-2007-42a4-87bf-7136de391cf2', categories: ['Amazon Web Services'], url: 'https://cursos.alura.com.br/certificate/865d4052-2007-42a4-87bf-7136de391cf2?lang' },
    { title: 'Apache Airflow: orquestrando seu primeiro pipeline de dados', issuer: 'Alura', issued: 'dez/2024', code: '7dbc0617-13bd-47f2-a568-790c7cd951be', categories: ['Apache Airflow'], url: 'https://cursos.alura.com.br/certificate/7dbc0617-13bd-47f2-a568-790c7cd951be?lang' },
    { title: 'Modelagem de banco de dados relacional: entendendo SQL', issuer: 'Alura', issued: 'dez/2024', code: 'ec6d05a1-3522-45cf-8c3c-8d59fcc56753', categories: ['SQL','Modelagem de dados'], url: 'https://cursos.alura.com.br/certificate/ec6d05a1-3522-45cf-8c3c-8d59fcc56753?lang' },
    { title: 'MongoDB: conhecendo um banco de dados NoSQL', issuer: 'Alura', issued: 'dez/2024', code: '31d58432-1479-4f3e-a3f0-edc4922cf5e6', categories: ['MongoDB','NoSQL'], url: 'https://cursos.alura.com.br/certificate/31d58432-1479-4f3e-a3f0-edc4922cf5e6?lang' },
    { title: 'Pipeline de dados: integrando Python com MongoDB e MySQL', issuer: 'Alura', issued: 'dez/2024', code: '18ac8af8-1e88-4442-8fde-e4ca5b54bb87', categories: ['MongoDB','Python','API','MySQL'], url: 'https://cursos.alura.com.br/certificate/18ac8af8-1e88-4442-8fde-e4ca5b54bb87?lang' },
    { title: 'Python e APIs: conhecendo a biblioteca Requests', issuer: 'Alura', issued: 'dez/2024', code: '79d5f5f3-9686-4e8f-858a-f86e57debade', categories: ['Python','API'], url: 'https://cursos.alura.com.br/certificate/79d5f5f3-9686-4e8f-858a-f86e57debade?lang' },
    { title: 'Santander Tech+ | Back-End', issuer: 'Santander', issued: 'dez/2024', code: 'a868cc7c-b4bf-88e2-2dad-f606055c13fb', categories: ['Back-End'], url: 'https://www.openacademy.santander.com/' },
    { title: 'Business English, Part 1', issuer: 'Santander Open Academy', issued: 'nov/2024', code: 'OA-2024-1125000672369', categories: ['Inglês para negócios'], url: 'https://www.openacademy.santander.com/' },
    { title: 'Internet das Coisas', issuer: 'Santander Open Academy', issued: 'nov/2024', code: 'OA-2024-1126000672783', categories: ['Internet das Coisas'], url: 'https://www.openacademy.santander.com/' },
    { title: 'Transformação digital', issuer: 'Santander Open Academy', issued: 'nov/2024', code: 'OA-2024-1126000673565', categories: ['Transformação digital'], url: 'https://www.openacademy.santander.com/' },
    { title: 'Android parte 1: crie um app mobile', issuer: 'Alura', issued: 'nov/2024', code: '6274d4a6-bdff-4fa3-ae0e-99cd084f7b62', categories: ['Android'], url: 'https://cursos.alura.com.br/certificate/6274d4a6-bdff-4fa3-ae0e-99cd084f7b62?lang' },
    { title: 'Excel', issuer: 'Santander Open Academy', issued: 'nov/2024', code: 'OA-2024-1126000672907', categories: ['Microsoft Excel'], url: 'https://www.openacademy.santander.com/' },
    { title: 'IA Generativa', issuer: 'Santander Open Academy', issued: 'nov/2024', code: 'OA-2024-1126000675335', categories: ['IA generativa'], url: 'https://www.openacademy.santander.com/' },
    { title: 'Layouts Android parte 2: boas práticas para criação de telas', issuer: 'Alura', issued: 'nov/2024', code: '66de860d-6d7c-4951-b11e-4cdacbb51a73', categories: ['Android'], url: 'https://cursos.alura.com.br/certificate/66de860d-6d7c-4951-b11e-4cdacbb51a73' },
    { title: 'Pipeline de dados: combinando Python e orientação a objeto', issuer: 'Alura', issued: 'nov/2024', code: '6e19d2cb-b2a5-4e41-9309-4e3d7272cf2', categories: ['Python'], url: 'https://cursos.alura.com.br/certificate/6e19d2cb-b2a5-4e41-9309-4e3d7272cf2' },
    { title: 'Power BI Desktop: construindo meu primeiro dashboard', issuer: 'Alura', issued: 'nov/2024', code: '3da2b09-abcb-40db-bc7e-d5f860cdde5', categories: ['Microsoft Power BI'], url: 'https://cursos.alura.com.br/certificate/3da2b09-abcb-40db-bc7e-d5f860cdde5' },
    { title: 'Power BI Desktop: realizando ETL no Power Query', issuer: 'Alura', issued: 'nov/2024', code: 'fdee516c-408d-4391-a782-8bef04dc94f9', categories: ['Microsoft Power BI'], url: 'https://cursos.alura.com.br/certificate/fdee516c-408d-4391-a782-8bef04dc94f9' },
    { title: 'Power BI: construindo cálculos com DAX', issuer: 'Alura', issued: 'nov/2024', code: '6c19e00f-0f2c-47ac-9e10-5678d1695d1c', categories: ['Microsoft Power BI'], url: 'https://cursos.alura.com.br/certificate/6c19e00f-0f2c-47ac-9e10-5678d1695d1c' },
    { title: 'Power BI: visualizando e analisando dados', issuer: 'Alura', issued: 'nov/2024', code: '8d78771e-99f5-4930-aa9f-dbff3399c381', categories: ['Microsoft Power BI'], url: 'https://cursos.alura.com.br/certificate/8d78771e-99f5-4930-aa9f-dbff3399c381' },
    { title: 'Python', issuer: 'Santander Open Academy', issued: 'nov/2024', code: 'OA-2024-1125000672198', categories: ['Python'], url: 'https://www.openacademy.santander.com/' },
    { title: 'iOS com SwiftUI: construindo componentes e layouts', issuer: 'Alura', issued: 'nov/2024', code: '7fcc0901-d7e6-4270-bde7-275898beccf4', categories: ['Swift'], url: 'https://cursos.alura.com.br/certificate/7fcc0901-d7e6-4270-bde7-275898beccf4' },
    { title: 'iOS: auto layout com Constraints', issuer: 'Alura', issued: 'nov/2024', code: '9c62025b-9965-45c0-b3df-87d1630892ef', categories: ['Swift'], url: 'https://cursos.alura.com.br/certificate/9c62025b-9965-45c0-b3df-87d1630892ef' },
    { title: 'iOS: construindo seu primeiro aplicativo', issuer: 'Alura', issued: 'out/2024', code: 'f3f0424e-8994-43a3-9db2-ddc3613f580d', categories: ['Swift'], url: 'https://cursos.alura.com.br/certificate/f3f0424e-8994-43a3-9db2-ddc3613f580d' },
    { title: 'Swift: entendendo a linguagem', issuer: 'Alura', issued: 'set/2024', code: '93997dad-52e6-4803-8e56-a7073d4ce79a', categories: ['Swift'], url: 'https://cursos.alura.com.br/certificate/93997dad-52e6-4803-8e56-a7073d4ce79a' },
    { title: 'Swift: entendendo e praticando orientação a objetos', issuer: 'Alura', issued: 'set/2024', code: '6704d89c-0eb1-4b47-bbff-371e687f46ea', categories: ['Swift'], url: 'https://cursos.alura.com.br/certificate/6704d89c-0eb1-4b47-bbff-371e687f46ea' },
    { title: 'iOS', issuer: 'FIAP', issued: 'set/2024', code: 'c6cb5274e5afec6c9dce362703e8bbb63', categories: ['Swift'], url: 'https://on.fiap.com.br/' },
    { title: 'React: desenvolvendo com JavaScript', issuer: 'Alura', issued: 'ago/2024', code: '42273569-fae6-46d2-b581-159f07f368ca', categories: ['JavaScript'], url: 'https://cursos.alura.com.br/certificate/42273569-fae6-46d2-b581-159f07f368ca' },
    { title: 'Android parte 2: avançando com listeners, menu e UI', issuer: 'Alura', issued: 'mai/2022', code: '61164658-4539-4671-b6a6-e1aa699a8211', categories: ['Android'], url: 'https://cursos.alura.com.br/certificate/61164658-4539-4671-b6a6-e1aa699a8211' },
    { title: 'Android parte 3: refinando o projeto', issuer: 'Alura', issued: 'mai/2022', code: '0f74ca65-9bbf-47ad-b0a3-b04d326eeb11', categories: ['Android'], url: 'https://cursos.alura.com.br/certificate/0f74ca65-9bbf-47ad-b0a3-b04d326eeb11' },
    { title: 'Layouts Android parte 1: criando telas com Constraint Layouts', issuer: 'Alura', issued: 'mai/2022', code: '9ac6e24a-b219-4c39-8da1-0af99e91957e', categories: ['Android'], url: 'https://cursos.alura.com.br/certificate/9ac6e24a-b219-4c39-8da1-0af99e91957e' },
    { title: 'JavaScript: tipos, variáveis e funções', issuer: 'Alura', issued: 'mar/2022', code: '74b663a5-3bb2-4fcb-8304-c54053aea57d', categories: ['JavaScript'], url: 'https://cursos.alura.com.br/certificate/74b663a5-3bb2-4fcb-8304-c54053aea57d' },
    { title: 'Kotlin Collections: Set e Map', issuer: 'Alura', issued: 'mar/2022', code: '5aa4af93-4c54-41c1-93e0-78809627917e', categories: ['Kotlin'], url: 'https://cursos.alura.com.br/certificate/5aa4af93-4c54-41c1-93e0-78809627917e' },
    { title: 'Kotlin: desenvolva com coleções, arrays e listas', issuer: 'Alura', issued: 'mar/2022', code: '0e103cb4-6891-446a-998e-70dac8c565c2', categories: ['Kotlin'], url: 'https://cursos.alura.com.br/certificate/0e103cb4-6891-446a-998e-70dac8c565c2' },
    { title: 'Kotlin: lidando com exceptions e referências nulas', issuer: 'Alura', issued: 'mar/2022', code: '30521f2d-0f44-4e73-a913-37409a50bfbd', categories: ['Kotlin'], url: 'https://cursos.alura.com.br/certificate/30521f2d-0f44-4e73-a913-37409a50bfbd' },
    { title: 'Kotlin: recursos da linguagem com pacotes e composição', issuer: 'Alura', issued: 'mar/2022', code: 'da5ea996-d6c5-4001-b5d2-2bbbbb08a7ee', categories: ['Kotlin'], url: 'https://cursos.alura.com.br/certificate/da5ea996-d6c5-4001-b5d2-2bbbbb08a7ee' },
    { title: 'Kotlin: recursos do paradigma funcional', issuer: 'Alura', issued: 'mar/2022', code: '6bbf63e6-e57b-4e31-b9ed-7a64da0db013', categories: ['Kotlin'], url: 'https://cursos.alura.com.br/certificate/6bbf63e6-e57b-4e31-b9ed-7a64da0db013' },
    { title: 'Kotlin: herança, polimorfismo e Interface', issuer: 'Alura', issued: 'fev/2022', code: 'b1959625-08cb-4dac-8245-b71c979a968f6', categories: ['Kotlin'], url: 'https://cursos.alura.com.br/certificate/b1959625-08cb-4dac-8245-b71c979a968f6' },
    { title: 'Kotlin: orientação a objetos', issuer: 'Alura', issued: 'fev/2022', code: 'd23a2a8c-c07d-4451-826e-e649e32d1f83', categories: ['Kotlin'], url: 'https://cursos.alura.com.br/certificate/d23a2a8c-c07d-4451-826e-e649e32d1f83' },
    { title: 'Testes automatizados: TDD com Python', issuer: 'Alura', issued: 'fev/2022', code: '1a9b8c64-27a0-442f-84e0-9a4940deaf3d', categories: ['TDD','Python'], url: 'https://cursos.alura.com.br/certificate/1a9b8c64-27a0-442f-84e0-9a4940deaf3d' },
    { title: 'Python Brasil: validação de dados no padrão nacional', issuer: 'Alura', issued: 'jan/2022', code: '4e7a7ee5-bf0a-478d-a096-fc2dee97e12d', categories: ['Python'], url: 'https://cursos.alura.com.br/certificate/4e7a7ee5-bf0a-478d-a096-fc2dee97e12d' },
    { title: 'Python Collections parte 1: listas e tuplas', issuer: 'Alura', issued: 'out/2021', code: 'd92cc599-5efc-4f38-bc84-367b158525f7', categories: ['Python'], url: 'https://cursos.alura.com.br/certificate/d92cc599-5efc-4f38-bc84-367b158525f7' },
    { title: 'Python Collections parte 2: conjuntos e dicionários', issuer: 'Alura', issued: 'out/2021', code: '3b2afcc6-ec6b-4f98-877e-34e28dd63ad5', categories: ['Python'], url: 'https://cursos.alura.com.br/certificate/3b2afcc6-ec6b-4f98-877e-34e28dd63ad5' },
    { title: 'Python: avançando na orientação a objetos', issuer: 'Alura', issued: 'ago/2021', code: 'd368fb1d-d65c-487e-9a16-bf98028b7ade', categories: ['Python'], url: 'https://cursos.alura.com.br/certificate/d368fb1d-d65c-487e-9a16-bf98028b7ade' },
    { title: 'String em Python: extraindo informações de uma URL', issuer: 'Alura', issued: 'ago/2021', code: 'cfdefc3d-b23f-4c66-876c-48f98f4e84b0', categories: ['Python'], url: 'https://cursos.alura.com.br/certificate/cfdefc3d-b23f-4c66-876c-48f98f4e84b0' },
    { title: 'Python: entendendo a Orientação a Objetos', issuer: 'Alura', issued: 'jul/2021', code: 'b39e94c8-c14b-4858-a0ca-6d1842cfbe32', categories: ['Python'], url: 'https://cursos.alura.com.br/certificate/b39e94c8-c14b-4858-a0ca-6d1842cfbe32' },
    { title: 'Python: avançando na linguagem', issuer: 'Alura', issued: 'jun/2021', code: '69f5467d-7b4f-4e62-93a9-516ce1982e02', categories: ['Python'], url: 'https://cursos.alura.com.br/certificate/69f5467d-7b4f-4e62-93a9-516ce1982e02' },
    { title: 'Python: começando com a linguagem', issuer: 'Alura', issued: 'jun/2021', code: '58a187c6b-1f68-4436-a29f-274d39fafc9e', categories: ['Python'], url: 'https://cursos.alura.com.br/certificate/58a187c6b-1f68-4436-a29f-274d39fafc9e' },
    { title: 'JavaScript e HTML: desenvolva um jogo e pratique lógica de programação', issuer: 'Alura', issued: 'mai/2021', code: '60f0aa2a-3327-4b25-bb0a-08c5992a8458', categories: ['HTML','JavaScript'], url: 'https://cursos.alura.com.br/certificate/60f0aa2a-3327-4b25-bb0a-08c5992a8458' },
    { title: 'JavaScript e HTML: pratique lógica com desenhos, animações e um jogo', issuer: 'Alura', issued: 'mai/2021', code: 'f79083a1-96e6-46cf-b510-525dcc86bf6e', categories: ['JavaScript','HTML'], url: 'https://cursos.alura.com.br/certificate/f79083a1-96e6-46cf-b510-525dcc86bf6e' },
    { title: 'Lógica de programação: comece em lógica com o jogo Pong e JavaScript', issuer: 'Alura', issued: 'mai/2021', code: '6d89b6eb-c251-4156-80f1-0196d1f0e235', categories: ['JavaScript'], url: 'https://cursos.alura.com.br/certificate/6d89b6eb-c251-4156-80f1-0196d1f0e235' },
    { title: 'Lógica de programação: laços e listas com JavaScript', issuer: 'Alura', issued: 'mai/2021', code: '458b984a-3f6a-42a2-b909-987f31eec9c', categories: ['JavaScript'], url: 'https://cursos.alura.com.br/certificate/458b984a-3f6a-42a2-b909-987f31eec9c' }
  ];
  const esc = (s) => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const frag = document.createDocumentFragment();
  CERTIFICATES.forEach(c => {
    const el = document.createElement('article');
    el.className = 'card reveal visible';
    const tags = (c.categories||[]).map(t => `<span class="tag">${esc(t)}</span>`).join('');
    el.innerHTML = `
      <h3>${esc(c.title)}</h3>
      <div class="credential-meta">
        <span class="tag">Emissor: ${esc(c.issuer)}</span>
        ${c.issued ? `<span class=\"tag\">Emitido: ${esc(c.issued)}</span>` : ''}
        ${tags}
      </div>
      <p class="credential-code">Código: ${esc(c.code)}</p>
      <div class="actions">
        <a class="btn secondary" href="${c.url ? esc(c.url) : '#'}" target="_blank" rel="noopener">Exibir credencial</a>
      </div>`;
    frag.appendChild(el);
  });
  grid.textContent = '';
  grid.appendChild(frag);
})();
