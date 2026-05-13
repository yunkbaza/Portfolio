# 🚀 Portfólio de Engenharia de Software | Allan Baeza

[![Deploy Status](https://img.shields.io/badge/Deploy-Online-success?style=for-the-badge&logo=vercel)](https://seusite.com)
[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-100%2F100-brightgreen?style=for-the-badge&logo=lighthouse)](#)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-blue?style=for-the-badge&logo=pwa)](#)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?style=for-the-badge&logo=html5)](#)
[![Vanilla JS](https://img.shields.io/badge/JavaScript-Vanilla_OOP-F7DF1E?style=for-the-badge&logo=javascript)](#)

Portfólio profissional desenvolvido de raiz com **HTML, CSS e JavaScript puros (Vanilla)**, sem recurso a frameworks. O objetivo deste projeto é demonstrar o domínio absoluto dos fundamentos da Web, aplicando práticas avançadas de Engenharia de Software focadas em **Performance (Core Web Vitals)**, **Acessibilidade (A11y)**, **SEO Técnico** e **Arquitetura de Código**.

🌐 **[Ver Portfólio Online](https://portfolio-henna-pi-77.vercel.app)**

---

## ✨ Funcionalidades e Práticas "Master/Sênior"

Este projeto não é apenas um site estático; é uma aplicação web (PWA) de alto desempenho que implementa as seguintes práticas:

### ⚡ Performance & Core Web Vitals
- **LCP Otimizado:** Utilização de `fetchpriority="high"` e `<link rel="preload">` para as imagens e *scripts* críticos da *Hero Section*, garantindo renderização quase instantânea.
- **Animações Fluídas:** Uso de `will-change: transform` e *Hardware Acceleration* em interações magnéticas e efeitos *Glassmorphism*.
- **Sem Dependências:** Zero *libraries* externas (nem jQuery, nem Bootstrap). Tudo escrito em código nativo e modular.

### 🔍 SEO Técnico (Structured Data JSON-LD)
- Implementação rigorosa do [Schema.org](https://schema.org/) em todas as páginas.
- Uso de `@type: Person` e `AboutPage` para autoridade de perfil.
- Uso de `@type: CollectionPage` e `SoftwareSourceCode` para a grelha de projetos, permitindo uma indexação perfeita por motores de busca.

### 🌍 Internacionalização (i18n) Dinâmica
- Motor de tradução (PT/EN) gerido por JavaScript que altera o idioma da interface em milissegundos, sem recarregar a página, persistindo a escolha do utilizador via `localStorage`.

### 📱 Progressive Web App (PWA) & Resiliência
- Implementação de um **Service Worker** (`sw.js`) com a arquitetura moderna *Stale-While-Revalidate*.
- Capacidade *Offline-first*: o site carrega instantaneamente servindo o *cache* local enquanto atualiza os recursos em pano de fundo.
- *Maskable Icons* e atalhos de sistema integrados no `manifest.webmanifest`.

### ✉️ Integração de E-mails & Formulários (Serverless)
- O formulário de contacto comunica diretamente com a API do **EmailJS**, validando e enviando e-mails ao vivo, gerindo estados de erro e de sucesso.
- Geração inteligente de mensagens diretas para WhatsApp.

---

## 🏗️ Arquitetura de Código

A lógica de negócio encontra-se encapsulada no ficheiro `scripts/app.js`, estruturada através do paradigma de **Programação Orientada a Objetos (OOP)**:

```javascript
class PortfolioApp {
  constructor() {
    this.DOM = { ... }; // Mapeamento de elementos centralizado
    this.init();
  }
  
  init() {
    this.initTheme();
    this.initI18n();
    this.initProjectFilters();
    // ...
  }
}

```

Esta abordagem evita a poluição do escopo global (`window`) e facilita a manutenção, teste e escalabilidade do código.

---

## 📂 Estrutura do Projeto

```text
📦 portfolio
 ┣ 📂 assets           # PDFs (Currículos PT/EN) e SVG (Logos)
 ┣ 📂 img              # Imagens dos projetos e perfil otimizadas
 ┣ 📂 pages            # Páginas estáticas (Curriculo, Projetos, etc.)
 ┣ 📂 scripts
 ┃ ┗ 📜 app.js         # Motor JavaScript (OOP, i18n, EmailJS, Filtros)
 ┣ 📂 styles
 ┃ ┗ 📜 style.css      # Design System, Variáveis, Dark Mode e Keyframes
 ┣ 📜 index.html       # Entry point e Hero section
 ┣ 📜 manifest.webmanifest # Configurações da PWA
 ┣ 📜 sw.js            # Service Worker (Estratégia SWR)
 ┗ 📜 README.md

```

---

## 🛠️ Instalação e Desenvolvimento Local

Como é um projeto sem *build step* (sem Webpack, Vite ou Node.js necessários), a execução local é imediata:

1. Clona o repositório:
```bash
git clone [https://github.com/yunkbaza/portfolio.git](https://github.com/yunkbaza/portfolio.git)

```


2. Abre a pasta do projeto:
```bash
cd portfolio

```


3. Utiliza a extensão **Live Server** (VS Code) ou executa um servidor HTTP em Python:
```bash
python -m http.server 8000

```


4. Acede a `http://localhost:8000` no teu navegador.

*(Nota: Algumas funcionalidades locais do Service Worker requerem que a aplicação seja servida por `localhost` ou HTTPS).*

---

## 📬 Contacto

Projeto desenhado e desenvolvido por **Allan Gabriel Baeza Amirati Silva**.
Aberto a oportunidades, desafios de arquitetura e conversas técnicas.

* **Email:** allanbamirati@live.com
* **LinkedIn:** [allan-gabriel-baeza-a281b1233](https://www.linkedin.com/in/allan-gabriel-baeza-a281b1233)
* **Localização:** São Paulo, SP (Disponível para trabalho Remoto Global)