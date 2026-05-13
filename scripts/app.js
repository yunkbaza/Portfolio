"use strict";

/**
 * Dicionário de Traduções (i18n)
 * Mantém todos os textos centrais da aplicação.
 */
const i18nDict = {
  pt: {
    "nav-home": "Início",
    "nav-about": "Sobre",
    "nav-projects": "Projetos",
    "nav-certs": "Certificados",
    "nav-contact": "Contato",
    "nav-cv": "CV",
    
    "hero-badge": "Disponível para novos desafios",
    "hero-title": "Engenheiro de Software",
    "hero-desc": "Estudante de ADS na FIAP (conclusão em 2025), focado em <strong>arquitetura de software</strong>, <strong>sistemas distribuídos</strong> e <strong>infraestrutura em nuvem</strong>. Experiência prática na construção de APIs resilientes, microsserviços e pipelines de dados visando alta performance e escalabilidade.",
    "hero-btn-talk": "Fale Comigo",
    "hero-btn-cv": "Ver Currículo Completo",
    
    "footer-title": "Vamos construir o futuro juntos?",
    "footer-desc": "Estou aberto a desafios que exijam arquitetura robusta e resolução de problemas complexos.",
    
    "about-title": "Engenharia com Propósito",
    "about-subtitle": "Sou o Allan Gabriel Baeza, um Engenheiro de Software apaixonado por resolver problemas de negócio através de arquiteturas distribuídas, código limpo e infraestrutura resiliente.",
    "about-phil-title": "Filosofia de Arquitetura",
    "about-phil-subtitle": "Acredito que o verdadeiro desafio da engenharia não é apenas fazer o código funcionar, mas garantir que ele seja manutenível, escalável e alinhado aos objetivos do produto.",
    "about-phil-card1-title": "⚙️ Sistemas Distribuídos",
    "about-phil-card1-desc": "Foco na conceção de microsserviços, utilizando padrões como CQRS, SAGA e Event-Driven Architecture para garantir alta disponibilidade e consistência eventual.",
    "about-phil-card2-title": "🛡️ Qualidade & Resiliência",
    "about-phil-card2-desc": "Adoção estrita de Clean Architecture, SOLID e TDD. Implementação de Circuit Breakers e orquestração madura para tolerância a falhas.",
    "about-phil-card3-title": "☁️ Cloud Native",
    "about-phil-card3-desc": "Mentalidade \"Infrastructure as Code\". Proficiência em AWS, conteinerização com Docker e orquestração com Kubernetes e CI/CD automatizado.",
    "about-timeline-title": "Trajetória & Formação",
    "about-time1-date": "2024 — 2025",
    "about-time1-title": "Análise e Desenvolvimento de Sistemas — FIAP",
    "about-time1-desc": "Graduação com foco prático em Engenharia de Software corporativa, Big Data, Machine Learning e modelagem complexa de banco de dados. Destaque académico e recomendação para docência.",
    "about-time2-date": "2024 — Present",
    "about-time2-title": "Especialização em Nuvem e Dados",
    "about-time2-desc": "Conclusão de mais de 50 certificações de peso, incluindo AWS Solutions Architect (Alura), Ciência de Dados com Python e Back-End (Bootcamps Santander Open Academy).",
    "about-time3-date": "Projetos & Consultoria",
    "about-time3-title": "Desenvolvimento de Soluções Core",
    "about-time3-desc": "Criação de ecossistemas complexos do zero, incluindo o motor de core bancário BazaBank (Java/Kafka), plataformas de e-commerce e pipelines de ETL para análise de dados.",
    "about-tech-back": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"16 18 22 12 16 6\"></polyline><polyline points=\"8 6 2 12 8 18\"></polyline></svg> Back-End & APIs",
    "about-tech-cloud": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z\"></path></svg> Cloud & DevOps",
    "about-tech-data": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"></ellipse><path d=\"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3\"></path><path d=\"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5\"></path></svg> Dados & Filas",
    "about-tech-front": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line></svg> Front-End & Mobile",
    
    "footer-btn-talk": "Iniciar Conversa",
    "footer-btn-cv": "Analisar Currículo",
    "cv-btn-download": "Baixar PDF Oficial",
    "cv-btn-print": "Imprimir / Salvar",
    "cv-loc-remote": "🌍 Disponível para Remoto (Compatível US/EST)",
    "cv-job-title": "Engenheiro de Software & Arquiteto Back-end",
    "cv-section-profile": "Perfil Profissional",
    "cv-profile-desc": "Engenheiro de Software com imersão no setor tecnológico desde os 15 anos de idade. Especializado em arquitetura de sistemas distribuídos, desenvolvimento back-end de alta performance e infraestrutura em nuvem (Cloud Native). Combina uma base técnica profunda obtida através de projetos arquiteturais complexos com a visão de negócios adquirida atuando como Consultor de TI corporativo. Proficiente na resolução de desafios de virtualização, concorrência de dados e na entrega de ecossistemas escaláveis para clientes globais.",
    "cv-section-exp": "Experiência Profissional",
    "cv-exp1-title": "Consultor de TI & Desenvolvedor de Software",
    "cv-exp1-sub": "Atuação Independente / Projetos B2B",
    "cv-exp1-date": "Presente",
    "cv-exp1-desc": "Fornecimento de serviços de consultoria tecnológica especializada para múltiplas empresas, atuando no desenho e auditoria de arquiteturas de software. Resolução de conflitos críticos de infraestrutura (incluindo gestão avançada de virtualização de containers e troubleshooting de Docker Engine/WSL2). Desenvolvimento de soluções back-end resilientes focadas na otimização de performance empresarial.",
    "cv-section-proj": "Arquiteturas & Projetos Principais",
    "cv-proj1-title": "BazaBank — Core Banking System",
    "cv-proj1-desc": "Conceção e desenvolvimento de um motor bancário core desenhado para alta concorrência. Arquitetura distribuída construída com Spring Boot (Java), orquestração de mensageria via Kafka para processamento assíncrono de transações e deploy resiliente via Kubernetes e Docker.",
    "cv-proj2-title": "Ecossistema CarefulBaza",
    "cv-proj2-desc": "Consolidação arquitetural de uma plataforma global de e-commerce e dropshipping. Projeto unificado integrando um back-end robusto (Node.js, PostgreSQL, Prisma), programação orientada a eventos e consumo de APIs externas globais, garantindo alta disponibilidade e resiliência no processamento de pedidos.",
    "cv-proj3-title": "Motores de Dados: Workflow & Análise de Risco",
    "cv-proj3-desc": "Construção de motores de orquestração de processos (Java) e pipelines de mitigação de fraudes e análise de crédito. Utilização de workers distribuídos (TypeScript, BullMQ, Redis) para processamento em background de alto volume e baixa latência.",
    "cv-section-edu": "Formação Acadêmica",
    "cv-edu1-title": "Análise e Desenvolvimento de Sistemas (CST)",
    "cv-edu1-sub": "FIAP — Faculdade de Informática e Administração Paulista",
    "cv-edu1-date": "Jan 2024 — Dez 2025",
    "cv-edu1-desc": "Formação orientada a desafios do mercado, com foco profundo em Engenharia de Software, Arquitetura de Sistemas, Modelagem de Bancos de Dados (SQL/NoSQL) e Big Data.",
    "cv-section-skills": "Stack & Certificações (Resumo)",
    "cv-skill-title": "Competências Técnicas Principais",
    "cv-cert-title": "Credenciais e Especializações (+50 Concluídas)",
    "cv-cert-desc": "• <strong>Arquitetura & Nuvem:</strong> AWS Solutions Architect Associate (Alura).<br>• <strong>Engenharia de Dados:</strong> Apache Airflow, ETL, Power BI, Python para Data Science (Santander 2025).<br>• <strong>Engenharia de Software:</strong> Clean Code, TDD, Modelagem Relacional, Microsserviços e Back-End (Santander Tech+).",
    
    "certs-title": "Certificados & Credenciais",
    "certs-desc": "Seleção de mais de 50 certificações com código e link de verificação, comprovando aprendizagem contínua em Cloud, Back-end e Engenharia de Dados.",
    "certs-btn-add": "Adicionar Certificado (Ambiente Local)",
    
    "projects-title": "Todos os Projetos",
    "projects-subtitle": "Aplicações práticas e acadêmicas com foco profundo em arquitetura de software, APIs robustas, pipelines de dados e mobile nativo.",
    "filter-all": "Todos",
    "filter-arch": "Arquitetura",
    "filter-back": "Back-End",
    "filter-data": "Dados",
    "filter-mobile": "Mobile",
    "filter-front": "Front-End",
    "proj-baza-desc": "Sistema core bancário simulado focado no processamento seguro de operações financeiras utilizando microsserviços e mensageria distribuída.",
    "proj-careful-desc": "Arquitetura de Back-end unificada para plataforma de dropshipping com foco em resiliência e alta disponibilidade.",
    "proj-ifood-desc": "Pipeline de dados e integração comercial para automação de pedidos e gerenciamento de cardápios.",
    "proj-porto-desc": "Simulação de sistema de atendimento e triagem utilizando inteligência artificial e modelagem de banco de dados.",
    "proj-ocean-desc": "Arquitetura de sistema para monitoramento ambiental e integração de hardware focado na preservação oceânica.",
    "proj-bird-desc": "Concepção e desenvolvimento de sistema com alertas de emergência geolocalizados em tempo real.",
    "proj-work-desc": "Sistema de orquestração focado no gerenciamento de fluxos de trabalho estruturados, contando com APIs protegidas e processamento de templates.",
    "proj-risk-desc": "Pipeline de processamento e validação de dados críticos focado em segurança financeira, com suporte a workers distribuídos para garantir baixa latência.",
    "proj-excel-desc": "Solução automatizada para leitura, processamento e consolidação de dados em planilhas.",
    "proj-csv-desc": "Pipeline de processamento e ingestão de dados para leitura otimizada de grandes arquivos CSV.",
    "proj-softtek-desc": "Aplicação focada em saúde mental com back-end em Supabase (BaaS) e interface nativa.",
    "btn-deploy": "Acessar Deploy",
    "btn-repo": "Repositório",
    "btn-site": "Acessar Site",
    "btn-view-repo": "Ver Repositório",
    "btn-view-case": "Ver Case"
  },
  en: {
    "nav-home": "Home",
    "nav-about": "About",
    "nav-projects": "Projects",
    "nav-certs": "Certifications",
    "nav-contact": "Contact",
    "nav-cv": "Resume",
    
    "hero-badge": "Available for new challenges",
    "hero-title": "Software Engineer",
    "hero-desc": "Systems Analysis student at FIAP (graduating 2025), focused on <strong>software architecture</strong>, <strong>distributed systems</strong>, and <strong>cloud infrastructure</strong>. Practical experience building resilient APIs, microservices, and data pipelines aimed at high performance and scalability.",
    "hero-btn-talk": "Let's Talk",
    "hero-btn-cv": "View Full Resume",
    
    "footer-title": "Let's build the future together?",
    "footer-desc": "I'm open to challenges that require robust architecture and complex problem-solving.",
    
    "about-title": "Engineering with Purpose",
    "about-subtitle": "I'm Allan Gabriel Baeza, a Software Engineer passionate about solving business problems through distributed architectures, clean code, and resilient infrastructure.",
    "about-phil-title": "Architecture Philosophy",
    "about-phil-subtitle": "I believe the true challenge of engineering isn't just making the code work, but ensuring it is maintainable, scalable, and aligned with product goals.",
    "about-phil-card1-title": "⚙️ Distributed Systems",
    "about-phil-card1-desc": "Focus on microservices design, using patterns like CQRS, SAGA, and Event-Driven Architecture to ensure high availability and eventual consistency.",
    "about-phil-card2-title": "🛡️ Quality & Resilience",
    "about-phil-card2-desc": "Strict adoption of Clean Architecture, SOLID, and TDD. Implementation of Circuit Breakers and mature orchestration for fault tolerance.",
    "about-phil-card3-title": "☁️ Cloud Native",
    "about-phil-card3-desc": "\"Infrastructure as Code\" mindset. Proficiency in AWS, containerization with Docker, and orchestration with Kubernetes and automated CI/CD.",
    "about-timeline-title": "Trajectory & Education",
    "about-time1-date": "2024 — 2025",
    "about-time1-title": "Systems Analysis and Development — FIAP",
    "about-time1-desc": "Degree with a practical focus on corporate Software Engineering, Big Data, Machine Learning, and complex database modeling. Academic excellence and recommendation for teaching.",
    "about-time2-date": "2024 — Present",
    "about-time2-title": "Cloud and Data Specialization",
    "about-time2-desc": "Completion of over 50 heavyweight certifications, including AWS Solutions Architect (Alura), Data Science with Python, and Back-End (Santander Open Academy Bootcamps).",
    "about-time3-date": "Projects & Consulting",
    "about-time3-title": "Core Solutions Development",
    "about-time3-desc": "Creation of complex ecosystems from scratch, including the BazaBank core banking engine (Java/Kafka), e-commerce platforms, and ETL pipelines for data analysis.",
    "about-tech-back": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"16 18 22 12 16 6\"></polyline><polyline points=\"8 6 2 12 8 18\"></polyline></svg> Back-End & APIs",
    "about-tech-cloud": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z\"></path></svg> Cloud & DevOps",
    "about-tech-data": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"></ellipse><path d=\"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3\"></path><path d=\"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5\"></path></svg> Data & Queues",
    "about-tech-front": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line></svg> Front-End & Mobile",
    
    "footer-btn-talk": "Start a Conversation",
    "footer-btn-cv": "Review Resume",
    "cv-btn-download": "Download Official PDF",
    "cv-btn-print": "Print / Save",
    "cv-loc-remote": "🌍 Available for Remote Work (US/EST Compatible)",
    "cv-job-title": "Software Engineer & Back-end Architect",
    "cv-section-profile": "Professional Profile",
    "cv-profile-desc": "Software Engineer immersed in the tech sector since age 15. Specialized in distributed systems architecture, high-performance back-end development, and cloud infrastructure (Cloud Native). Combines deep technical expertise gained through complex architectural projects with business acumen acquired as a corporate IT Consultant. Proficient in resolving virtualization challenges, data concurrency, and delivering scalable ecosystems for global clients.",
    "cv-section-exp": "Professional Experience",
    "cv-exp1-title": "IT Consultant & Software Developer",
    "cv-exp1-sub": "Independent Contractor / B2B Projects",
    "cv-exp1-date": "Present",
    "cv-exp1-desc": "Providing specialized technological consulting services for multiple companies, designing and auditing software architectures. Resolving critical infrastructure conflicts (including advanced container virtualization management and Docker Engine/WSL2 troubleshooting). Developing resilient back-end solutions focused on enterprise performance optimization.",
    "cv-section-proj": "Main Architectures & Projects",
    "cv-proj1-title": "BazaBank — Core Banking System",
    "cv-proj1-desc": "Design and development of a core banking engine built for high concurrency. Distributed architecture built with Spring Boot (Java), messaging orchestration via Kafka for asynchronous transaction processing, and resilient deployment via Kubernetes and Docker.",
    "cv-proj2-title": "CarefulBaza Ecosystem",
    "cv-proj2-desc": "Architectural consolidation of a global e-commerce and dropshipping platform. Unified project integrating a robust back-end (Node.js, PostgreSQL, Prisma), event-driven programming, and consumption of global external APIs, ensuring high availability and resilience in order processing.",
    "cv-proj3-title": "Data Engines: Workflow & Risk Analysis",
    "cv-proj3-desc": "Construction of process orchestration engines (Java) and pipelines for fraud mitigation and credit analysis. Utilization of distributed workers (TypeScript, BullMQ, Redis) for high-volume, low-latency background processing.",
    "cv-section-edu": "Education",
    "cv-edu1-title": "Systems Analysis and Development (Degree)",
    "cv-edu1-sub": "FIAP — Paulista Faculty of Informatics and Administration",
    "cv-edu1-date": "Jan 2024 — Dec 2025",
    "cv-edu1-desc": "Market-driven education with a deep focus on Software Engineering, Systems Architecture, Database Modeling (SQL/NoSQL), and Big Data.",
    "cv-section-skills": "Stack & Certifications (Summary)",
    "cv-skill-title": "Core Technical Competencies",
    "cv-cert-title": "Credentials and Specializations (50+ Completed)",
    "cv-cert-desc": "• <strong>Architecture & Cloud:</strong> AWS Solutions Architect Associate (Alura).<br>• <strong>Data Engineering:</strong> Apache Airflow, ETL, Power BI, Python for Data Science (Santander 2025).<br>• <strong>Software Engineering:</strong> Clean Code, TDD, Relational Modeling, Microservices, and Back-End (Santander Tech+).",
    
    "certs-title": "Certifications & Credentials",
    "certs-desc": "Selection of over 50 certifications with official verification codes and links, demonstrating continuous learning in Cloud, Back-end, and Data Engineering.",
    "certs-btn-add": "Add Certificate (Local Environment)",
    
    "projects-title": "All Projects",
    "projects-subtitle": "Practical and academic applications with a deep focus on software architecture, robust APIs, data pipelines, and native mobile.",
    "filter-all": "All",
    "filter-arch": "Architecture",
    "filter-back": "Back-End",
    "filter-data": "Data",
    "filter-mobile": "Mobile",
    "filter-front": "Front-End",
    "proj-baza-desc": "Simulated core banking system focused on secure processing of financial operations using microservices and distributed messaging.",
    "proj-careful-desc": "Unified Back-end architecture for a dropshipping platform with a focus on resilience and high availability.",
    "proj-ifood-desc": "Data pipeline and commercial integration for order automation and menu management.",
    "proj-porto-desc": "Simulation of an attendance and triage system using artificial intelligence and database modeling.",
    "proj-ocean-desc": "System architecture for environmental monitoring and hardware integration focused on ocean preservation.",
    "proj-bird-desc": "Design and development of a system with real-time geolocated emergency alerts.",
    "proj-work-desc": "Orchestration system focused on managing structured workflows, featuring protected APIs and template processing.",
    "proj-risk-desc": "Processing and validation pipeline for critical data focused on financial security, supporting distributed workers to ensure low latency.",
    "proj-excel-desc": "Automated solution for reading, processing, and consolidating spreadsheet data.",
    "proj-csv-desc": "Data ingestion and processing pipeline for optimized reading of large CSV files.",
    "proj-softtek-desc": "Application focused on mental health with a Supabase (BaaS) back-end and native interface.",
    "btn-deploy": "View Deploy",
    "btn-repo": "Repository",
    "btn-site": "Visit Site",
    "btn-view-repo": "View Repository",
    "btn-view-case": "View Case"
  }
};

/**
 * Portfolio App Logic - Senior Architecture
 * Autor: Allan Gabriel Baeza
 */
class PortfolioApp {
  constructor() {
    this.DOM = {
      html: document.documentElement,
      navToggle: document.querySelector('#nav-toggle'),
      navLinks: document.querySelector('#nav-links'),
      themeBtn: document.querySelector('#theme-toggle'),
      contactForm: document.querySelector('#contact-form'),
      filterBar: document.querySelector('#project-filters'),
      projectCards: document.querySelectorAll('[data-project]'),
      reveals: document.querySelectorAll('.reveal'),
      certsGrid: document.querySelector('.certs-grid'),
      sections: document.querySelectorAll('section[id]'),
      navItems: new Map([...document.querySelectorAll('.nav-links a[href^="#"]')].map(a => [a.getAttribute('href').slice(1), a]))
    };

    this.init();
  }

  init() {
    this.initTheme();
    this.initI18n(); // Inicia o motor de traduções
    this.initNavigation();
    this.initScrollReveal();
    this.initSmoothScroll();
    this.initSectionHighlight();
    this.initProjectFilters();
    this.initContactHandling();
    this.initMagneticButtons();
    this.initLocalDevFeatures();
    this.setupDynamicYears();
    // NOTA: A initCertificates() é agora chamada dentro de setLanguage() para garantir a tradução imediata.
  }

  // ==========================================
  // Internacionalização (i18n) PT/EN
  // ==========================================
  initI18n() {
    const langBtn = document.getElementById('lang-toggle');
    if (!langBtn) return;

    let currentLang = localStorage.getItem('language') || 'pt';

    const setLanguage = (lang) => {
      currentLang = lang;
      localStorage.setItem('language', lang);
      
      // O botão mostra a opção oposta (Se estou em PT, mostra EN)
      langBtn.textContent = lang === 'pt' ? 'EN' : 'PT';
      this.DOM.html.lang = lang === 'pt' ? 'pt-br' : 'en';

      // Altera todos os textos fixos marcados com data-i18n
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18nDict[lang] && i18nDict[lang][key]) {
          el.innerHTML = i18nDict[lang][key]; 
        }
      });

      // Troca dinamicamente o link de Download do Currículo
      document.querySelectorAll('a[download]').forEach(link => {
        link.href = lang === 'pt' ? '../assets/Curriculo_Allan.pdf' : '../assets/Curriculo_Allan_EN.pdf';
      });

      // Reconstrói a grelha de certificados com o idioma atualizado
      this.initCertificates(lang);
    };

    // Aplica no carregamento
    setLanguage(currentLang);

    // Alterna no clique
    langBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'pt' ? 'en' : 'pt');
    });
  }

  // ==========================================
  // Tema (Dark/Light) com Persistência
  // ==========================================
  initTheme() {
    const stored = localStorage.getItem('theme');
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    const initialTheme = stored || (prefersLight ? 'light' : 'dark');
    
    this.DOM.html.setAttribute('data-theme', initialTheme);
    this.syncThemeA11y();

    this.DOM.themeBtn?.addEventListener('click', () => {
      const current = this.DOM.html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      this.DOM.html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      this.syncThemeA11y();
    });
  }

  syncThemeA11y() {
    if (!this.DOM.themeBtn) return;
    const isDark = this.DOM.html.getAttribute('data-theme') === 'dark';
    this.DOM.themeBtn.setAttribute('type', 'button');
    this.DOM.themeBtn.setAttribute('aria-label', isDark ? 'Alternar para tema claro' : 'Alternar para tema escuro');
  }

  // ==========================================
  // Navegação Mobile e ARIA
  // ==========================================
  initNavigation() {
    if (!this.DOM.navToggle || !this.DOM.navLinks) return;

    this.DOM.navToggle.setAttribute('aria-controls', 'nav-links');

    const toggleMenu = (forceClose = false) => {
      const isOpen = this.DOM.navLinks.classList.contains('open');
      const willOpen = forceClose ? false : !isOpen;
      
      this.DOM.navLinks.classList.toggle('open', willOpen);
      this.DOM.navToggle.setAttribute('aria-expanded', String(willOpen));
      this.DOM.navToggle.setAttribute('aria-label', willOpen ? 'Fechar menu' : 'Abrir menu');
    };

    this.DOM.navToggle.addEventListener('click', () => toggleMenu());
    this.DOM.navLinks.addEventListener('click', () => toggleMenu(true));
    
    document.addEventListener('click', (e) => {
      if (this.DOM.navLinks.classList.contains('open') && !this.DOM.navLinks.contains(e.target) && !this.DOM.navToggle.contains(e.target)) {
        toggleMenu(true);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') toggleMenu(true);
    });
  }

  // ==========================================
  // Animações de Scroll (Intersection Observer)
  // ==========================================
  initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { 
        if(e.isIntersecting) e.target.classList.add('visible'); 
      });
    }, { threshold: 0.14 });
    
    this.DOM.reveals.forEach(el => observer.observe(el));
  }

  // ==========================================
  // Smooth Scroll Interno
  // ==========================================
  initSmoothScroll() {
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if(a){
        const href = a.getAttribute('href');
        if(href && href.length > 1){
          e.preventDefault();
          const id = href.slice(1);
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start'});
          history.replaceState(null, '', '#' + id);
        }
      }
    });
  }

  // ==========================================
  // Destaque da Seção Ativa no Menu
  // ==========================================
  initSectionHighlight() {
    if(!this.DOM.sections.length || !this.DOM.navItems.size) return;
    
    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          const id = entry.target.getAttribute('id');
          this.DOM.navItems.forEach((a, key) => {
            const isMatch = key === id;
            a.classList.toggle('active', isMatch);
            if(isMatch) a.setAttribute('aria-current', 'page'); 
            else a.removeAttribute('aria-current');
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 });

    this.DOM.sections.forEach(s => activeObserver.observe(s));
  }

  // ==========================================
  // Filtro de Projetos Fluido
  // ==========================================
  initProjectFilters() {
    if (!this.DOM.filterBar || !this.DOM.projectCards.length) return;

    this.DOM.filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-tag]');
      if (!btn) return;

      this.DOM.filterBar.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tag = btn.dataset.tag.toLowerCase();

      this.DOM.projectCards.forEach(card => {
        const tags = (card.dataset.tags || '').split(' ').map(s => s.trim().toLowerCase());
        const isMatch = tag === 'all' || tags.includes(tag);
        
        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

        if (isMatch) {
          card.style.setProperty('display', 'flex', 'important');
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            if (card.style.opacity === '0') {
              card.style.setProperty('display', 'none', 'important');
            }
          }, 400);
        }
      });
    });
  }

  // ==========================================
  // Efeito Magnético nos Botões (UX Premium)
  // ==========================================
  initMagneticButtons() {
    let raf = 0, lastEvent = null;
    const handler = (e) => {
      lastEvent = e; 
      if(raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0; 
        const ev = lastEvent; 
        if(!ev) return;
        const t = ev.target.closest('.btn, .icon-btn, .card');
        if(!t) return; 
        const r = t.getBoundingClientRect();
        t.style.setProperty('--mx', `${ev.clientX - r.left}px`);
        t.style.setProperty('--my', `${ev.clientY - r.top}px`);
      });
    };
    if(window.matchMedia('(pointer:fine)').matches){
      document.addEventListener('pointermove', handler);
    }
  }

  // ==========================================
  // Ano Atual Dinâmico
  // ==========================================
  setupDynamicYears() {
    document.querySelectorAll('[data-year]').forEach(el => {
      el.textContent = new Date().getFullYear();
    });
  }

  // ==========================================
  // Gestão de Contactos (EmailJS & WhatsApp)
  // ==========================================
  initContactHandling() {
    const form = this.DOM.contactForm;
    if(!form) return;

    const success = document.querySelector('.success');
    const error = document.querySelector('.error');

    const CONFIG = {
      SEND_MODE: 'emailjs',
      EMAILJS_SERVICE_ID: 'service_xk4sbkx',
      EMAILJS_TEMPLATE_ID: 'template_kebelwh',
      EMAILJS_PUBLIC_KEY: 'jDkz7HbrEe779bCuH',
      GAS_URL: '',
      CONTACT_EMAIL: 'allanbamirati@live.com'
    };

    const isEmailJsReady = () => Boolean(CONFIG.EMAILJS_SERVICE_ID && CONFIG.EMAILJS_TEMPLATE_ID && CONFIG.EMAILJS_PUBLIC_KEY && !CONFIG.EMAILJS_SERVICE_ID.startsWith('YOUR_'));
    
    const getToEmail = () => form.getAttribute('data-email-to') || CONFIG.CONTACT_EMAIL;

    const sendEmailJS = async (data) => {
      const url = 'https://api.emailjs.com/api/v1.0/email/send';
      const payload = { service_id: CONFIG.EMAILJS_SERVICE_ID, template_id: CONFIG.EMAILJS_TEMPLATE_ID, user_id: CONFIG.EMAILJS_PUBLIC_KEY, template_params: data };
      const res = await fetch(url, { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify(payload) });
      if(!res.ok) throw new Error('EmailJS error');
    };

    const sendMailto = (data) => {
      const subject = encodeURIComponent(`Contato do Portfolio - ${data.name || ''}`.trim());
      const body = [ data.message || '', '', `Nome: ${data.name || '-'}`, `Email: ${data.email || '-'}`].join('\n');
      window.location.href = `mailto:${getToEmail()}?subject=${subject}&body=${encodeURIComponent(body)}`;
    };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if(success) success.style.display = 'none';
      if(error) error.style.display = 'none';
      
      const data = Object.fromEntries(new FormData(form).entries());
      ['name','email','message'].forEach(id => document.getElementById(id)?.setAttribute('aria-invalid','false'));
      
      if(!data.name || !data.email || !data.message){
        if(error) { error.textContent = 'Preencha todos os campos.'; error.style.display = 'block'; }
        if(!data.name) document.getElementById('name')?.setAttribute('aria-invalid','true');
        if(!data.email) document.getElementById('email')?.setAttribute('aria-invalid','true');
        if(!data.message) document.getElementById('message')?.setAttribute('aria-invalid','true');
        return;
      }

      try {
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = "Enviando...";
        btn.disabled = true;

        if(CONFIG.SEND_MODE === 'emailjs' && isEmailJsReady()){
          await sendEmailJS(data);
        } else {
          sendMailto(data);
        }
        
        form.reset(); 
        if(success){ success.style.display = 'block'; }
        btn.textContent = originalText;
        btn.disabled = false;

      } catch(err) { 
        if(error){ error.textContent = 'Erro de servidor. Tente conectar via WhatsApp.'; error.style.display = 'block'; } 
        form.querySelector('button[type="submit"]').disabled = false;
      }
    });

    document.getElementById('whats-send')?.addEventListener('click', () => {
      const card = document.getElementById('whats-card');
      const number = card?.getAttribute('data-whatsapp') || '5511947573410';
      const msgWa = (document.getElementById('whats-message')?.value || '').trim();
      const name = (document.getElementById('name')?.value || '').trim();
      const email = (document.getElementById('email')?.value || '').trim();
      const msgForm = (document.getElementById('message')?.value || '').trim();
      
      const finalMsg = [ msgWa || msgForm || 'Olá Allan, vim pelo portfólio e gostaria de conversar!', '', name && `Nome: ${name}`, email && `Email: ${email}` ].filter(Boolean).join('\n');
      window.open(`https://wa.me/${number}?text=${encodeURIComponent(finalMsg)}`, '_blank');
    });
  }

  // ==========================================
  // Funcionalidades Ambientais (Local Dev)
  // ==========================================
  initLocalDevFeatures() {
    const btn = document.getElementById('add-project-btn');
    const grid = document.querySelector('.grid.cards');
    if(!btn || !grid) return;
    
    const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
    if (!isLocal) {
      btn.remove();
      return;
    }
    
    btn.style.display = '';
    
    const addProjectCard = (data, save=true) => {
      const el = document.createElement('article');
      el.className = 'card project-card reveal visible';
      el.setAttribute('data-project','');
      el.setAttribute('data-tags', data.tags);
      el.innerHTML = `
        <img loading="lazy" decoding="async" width="400" height="160" src="${data.img}" alt="${data.nome}"/>
        <h3>${data.nome}</h3>
        <div class="project-meta">
          ${(data.tags||'').split(' ').map(t => `<span class="tag skill">${t.trim()}</span>`).join('')}
        </div>
        <a class="btn secondary" href="#" rel="noopener">Case</a>
      `;
      grid.appendChild(el);
      if(save){
        const arr = JSON.parse(localStorage.getItem('portfolio_projects')||'[]');
        arr.push(data); 
        localStorage.setItem('portfolio_projects', JSON.stringify(arr));
      }
    };

    JSON.parse(localStorage.getItem('portfolio_projects')||'[]').forEach(p => addProjectCard(p, false));

    btn.addEventListener('click', () => {
      let modal = document.createElement('div');
      modal.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(30,30,30,0.55);display:flex;align-items:center;justify-content:center;z-index:10001;backdrop-filter:blur(2px);';
      modal.innerHTML = `
        <div style="background:var(--card-bg);padding:38px 28px;border-radius:22px;max-width:400px;width:100%;box-shadow:0 16px 48px rgba(0,0,0,.38);text-align:center;">
          <h2 style="margin-bottom:22px;font-size:1.6rem;">Adicionar Projeto</h2>
          <input type="text" id="novoProjetoNome" placeholder="Nome do projeto" style="width:100%;margin-bottom:14px;padding:12px;border-radius:10px;border:1px solid var(--border-light);background:transparent;color:var(--text-main);" />
          <input type="text" id="novoProjetoTag" placeholder="Tags (ex: mobile backend)" style="width:100%;margin-bottom:14px;padding:12px;border-radius:10px;border:1px solid var(--border-light);background:transparent;color:var(--text-main);" />
          <input type="text" id="novoProjetoImg" placeholder="URL da imagem" style="width:100%;margin-bottom:18px;padding:12px;border-radius:10px;border:1px solid var(--border-light);background:transparent;color:var(--text-main);" />
          <div style="display:flex;gap:12px;justify-content:center;margin-top:10px;">
            <button id="confirmAddProject" class="btn">Adicionar</button>
            <button id="closeModalProject" class="btn secondary">Cancelar</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
      
      document.getElementById('closeModalProject').onclick = () => modal.remove();
      document.getElementById('confirmAddProject').onclick = () => {
        const nome = document.getElementById('novoProjetoNome').value.trim();
        const tags = document.getElementById('novoProjetoTag').value.trim();
        const img = document.getElementById('novoProjetoImg').value.trim();
        if(!nome || !tags || !img){ alert('Preencha todos os campos!'); return; }
        addProjectCard({nome, tags, img});
        modal.remove();
      };
    });
  }

  // ==========================================
  // Renderização Dinâmica de Certificados
  // ==========================================
  initCertificates(lang = localStorage.getItem('language') || 'pt') {
    if(!this.DOM.certsGrid) return;

    const CERTIFICATES = [
      { title: 'Bootcamp Santander focado em AWS', issuer: 'Santander Brasil', issued: '2025', code: '-', categories: ['AWS', 'Cloud', 'Arquitetura'], url: '#' },
      { title: 'Bootcamp Santander 2025 - Ciência de Dados com Python', issuer: 'Santander Brasil', issued: 'dez/2025', code: 'HUG5ZKNH', categories: ['Python', 'Machine Learning', 'AWS', 'SQL'], url: 'https://www.dio.me/certificate/HUG5ZKNH/share?utm_source=engagement&utm_medium=email&utm_campaign=santander-2025-ciencia-de-dados-com-python&utm_term=bootcamp-users&utm_content=graduation-certificate-link' },
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

    const escapeHTML = (s) => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const fragment = document.createDocumentFragment();

    // Textos baseados no Idioma Atual
    const lblIssuer = lang === 'pt' ? 'Emissor:' : 'Issuer:';
    const lblIssued = lang === 'pt' ? 'Emitido:' : 'Issued:';
    const lblCode   = lang === 'pt' ? 'Código:' : 'Code:';
    const lblBtn    = lang === 'pt' ? 'Exibir credencial' : 'View credential';

    CERTIFICATES.forEach(c => {
      const el = document.createElement('article');
      el.className = 'card reveal visible'; // Removido o translateY inicial para transição imediata no i18n
      
      const tags = (c.categories||[]).map(t => `<span class="tag">${escapeHTML(t)}</span>`).join('');
      
      el.innerHTML = `
        <h3>${escapeHTML(c.title)}</h3>
        <div class="credential-meta">
          <span class="tag">${lblIssuer} ${escapeHTML(c.issuer)}</span>
          ${c.issued ? `<span class=\"tag\">${lblIssued} ${escapeHTML(c.issued)}</span>` : ''}
          ${tags}
        </div>
        <p class="credential-code">${lblCode} ${escapeHTML(c.code)}</p>
        <div class="actions">
          <a class="btn secondary" href="${c.url ? escapeHTML(c.url) : '#'}" target="_blank" rel="noopener">${lblBtn}</a>
        </div>`;
      fragment.appendChild(el);
    });

    this.DOM.certsGrid.textContent = ''; // Limpa a grelha antiga
    this.DOM.certsGrid.appendChild(fragment); // Injeta a nova traduzida
  }
}

// Inicializa a aplicação assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => new PortfolioApp());