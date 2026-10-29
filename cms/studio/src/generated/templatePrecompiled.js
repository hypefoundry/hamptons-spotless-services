/* AUTO-GENERATED from cms/template/index.njk by scripts/build-template.mjs. Do not edit. */
/* eslint-disable */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["index.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"seoTitle"), env.opts.autoescape);
output += "</title>\n  <meta name=\"description\" content=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"seoDescription"), env.opts.autoescape);
output += "\">\n  <meta name=\"robots\" content=\"index, follow\">\n  <!-- Favicons -->\n  <link rel=\"icon\" type=\"image/svg+xml\" href=\"assets/hss-brandsymbol.svg\">\n  <link rel=\"icon\" type=\"image/png\" sizes=\"512x512\" href=\"assets/hamptons-favicon-dark-512.png\">\n  <link rel=\"apple-touch-icon\" sizes=\"512x512\" href=\"assets/hamptons-favicon-dark-512.png\">\n\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n  <link href=\"https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500&family=Inter:wght@300;400;500&display=swap\" rel=\"stylesheet\">\n\n  <!-- Open Graph -->\n  <meta property=\"og:title\" content=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"seoTitle"), env.opts.autoescape);
output += "\">\n  <meta property=\"og:description\" content=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"ogDescription"), env.opts.autoescape);
output += "\">\n  <meta property=\"og:type\" content=\"website\">\n  <meta property=\"og:image\" content=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"ogImage"), env.opts.autoescape);
output += "\">\n  <meta property=\"og:image:width\" content=\"1200\">\n  <meta property=\"og:image:height\" content=\"630\">\n\n  <!-- Twitter Card -->\n  <meta name=\"twitter:card\" content=\"summary_large_image\">\n  <meta name=\"twitter:title\" content=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"seoTitle"), env.opts.autoescape);
output += "\">\n  <meta name=\"twitter:description\" content=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"ogDescription"), env.opts.autoescape);
output += "\">\n  <meta name=\"twitter:image\" content=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"twitterImage"), env.opts.autoescape);
output += "\">\n\n  <!-- Schema.org -->\n  <script type=\"application/ld+json\">\n  ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "jsonLd")), env.opts.autoescape);
output += "\n  </script>\n\n  <style>\n    /* ── Brand Fonts ── */\n    @font-face {\n      font-family: 'Canela';\n      src: url('assets/Canela-Light-Trial.otf') format('opentype');\n      font-weight: 300;\n      font-style: normal;\n      font-display: swap;\n    }\n    @font-face {\n      font-family: 'AirbnbCereal';\n      src: url('assets/AirbnbCereal_W_Md.otf') format('opentype');\n      font-weight: 500;\n      font-style: normal;\n      font-display: swap;\n    }\n\n    :root {\n      /* Brand palette */\n      --navy: #0D1B2A;\n      --forest: #1A3A2A;\n      --cream: #E2E1DE;\n      --stone: #C4B8A4;\n      --sage: #7A8C75;\n      --silver: #9B9E99;\n\n      /* Semantic tokens */\n      --bg-primary: var(--cream);\n      --bg-dark: var(--navy);\n      --bg-alt: #D6D5D1;\n      --text-primary: var(--navy);\n      --text-light: var(--cream);\n      --text-muted: var(--silver);\n      --border: rgba(13, 27, 42, 0.12);\n      --border-light: rgba(226, 225, 222, 0.2);\n\n      --font: 'Inter', 'Instrument Sans', 'AirbnbCereal', -apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif;\n      --font-display: 'Canela', Georgia, 'Times New Roman', serif;\n\n      --max-width: 1200px;\n      --star-url: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='127 83 132 133'%3E%3Cpath d='M192.924 215.853L185.517 173.711C183.983 164.98 177.638 158.481 168.86 156.937L127.273 149.611L169.317 142.086C177.627 140.598 183.993 134.242 185.466 125.886L192.991 83.1903L200.486 125.829C201.948 134.155 208.263 140.619 216.593 142.096L259.068 149.647L216.701 157.106C207.97 158.645 201.573 165.401 200.275 174.132L192.919 215.853H192.924Z' fill='white'/%3E%3C/svg%3E\");\n    }\n\n    *, *::before, *::after {\n      margin: 0; padding: 0; box-sizing: border-box;\n    }\n\n    html { scroll-behavior: smooth; scroll-padding-top: 72px; }\n\n    body {\n      font-family: var(--font);\n      font-weight: 400;\n      font-size: 15px;\n      line-height: 1.6;\n      color: var(--text-primary);\n      background: #fff;\n      margin: 0 20px 20px 20px;\n    }\n\n    /* ── Animations ── */\n    .fade-in {\n      opacity: 0;\n      transform: translateY(20px);\n      transition: opacity 0.7s ease, transform 0.7s ease;\n    }\n    .fade-in.visible {\n      opacity: 1;\n      transform: translateY(0);\n    }\n    .fade-in-delay-1 { transition-delay: 0.15s; }\n    .fade-in-delay-2 { transition-delay: 0.3s; }\n    .fade-in-delay-3 { transition-delay: 0.45s; }\n\n    /* ── Skip link ── */\n    .skip-link {\n      position: absolute; top: -100px; left: 16px;\n      background: var(--navy); color: var(--cream);\n      padding: 8px 16px; z-index: 1000;\n      font-size: 14px; text-decoration: none;\n    }\n    .skip-link:focus { top: 0; }\n\n    .section, .hero, .footer { position: relative; }\n\n    /* ── Brand Star Motif ── */\n    .section-star {\n      display: block;\n      width: 20px;\n      height: 20px;\n      margin: 0 auto;\n      -webkit-mask-image: var(--star-url);\n      mask-image: var(--star-url);\n      -webkit-mask-size: contain;\n      mask-size: contain;\n      -webkit-mask-repeat: no-repeat;\n      mask-repeat: no-repeat;\n    }\n    .section-star--cream {\n      background: var(--cream);\n      opacity: 0.25;\n    }\n    .section-star--stone {\n      background: var(--stone);\n      opacity: 0.35;\n    }\n    .section-star-wrap {\n      padding: 48px 0;\n    }\n    .section-star-wrap--navy { background: var(--navy); }\n    .section-star-wrap--cream { background: var(--bg-primary); }\n\n    /* ── Typography ── */\n    .label {\n      font-family: var(--font);\n      font-size: 10px; font-weight: 500;\n      letter-spacing: 0.14em; text-transform: uppercase;\n      color: var(--stone);\n    }\n\n    h1, h2, h3 {\n      font-family: var(--font-display);\n      font-weight: 300;\n      line-height: 1.15;\n      letter-spacing: -0.01em;\n      color: var(--text-primary);\n    }\n\n    /* ════════════════════════════════════\n       NAVIGATION\n    ════════════════════════════════════ */\n    .nav {\n      position: fixed; top: 0; left: 0; right: 0;\n      z-index: 110;\n      display: grid;\n      grid-template-columns: 1fr auto 1fr;\n      align-items: center;\n      padding: 0 36px; height: 72px;\n      background: #fff;\n      border-bottom: none;\n      transition: background 0.4s ease;\n    }\n    .nav.scrolled {\n      background: #fff;\n    }\n\n    .nav-logo {\n      justify-self: center;\n    }\n    .nav-logo svg {\n      height: 32px; width: auto;\n      display: block;\n    }\n    .nav-logo svg rect { stroke: var(--navy); transition: stroke 0.3s ease; }\n    .nav-logo svg path { fill: var(--navy); transition: fill 0.3s ease; }\n\n    .nav-links-left {\n      display: flex; align-items: center; gap: 28px;\n      list-style: none;\n      justify-self: start;\n    }\n    .nav-links-right {\n      display: flex; align-items: center; gap: 28px;\n      list-style: none;\n      justify-self: end;\n    }\n    .nav-links-left a,\n    .nav-links-right a {\n      font-family: var(--font);\n      font-size: 14px; font-weight: 400;\n      letter-spacing: 0.08em; text-transform: uppercase;\n      color: #0D1B2A; text-decoration: none;\n      transition: opacity 0.3s ease;\n    }\n    .nav-links-left a:hover,\n    .nav-links-right a:hover { color: #C4B8A4; opacity: 1; }\n    .nav-links-right .nav-phone {\n      font-family: var(--font);\n      font-size: 14px;\n      letter-spacing: 0.02em;\n      text-transform: none;\n    }\n    .nav-social {\n      display: flex; align-items: center; gap: 16px;\n    }\n    .nav-social a {\n      display: inline-flex; align-items: center; justify-content: center;\n      color: #0D1B2A;\n      transition: opacity 0.3s ease, color 0.3s ease;\n    }\n    .nav-social a:hover { color: #C4B8A4; }\n    .nav-social svg { width: 18px; height: 18px; display: block; }\n\n    .nav-toggle {\n      display: none;\n      background: none; border: none; cursor: pointer;\n      width: 28px; height: 20px;\n      position: relative; z-index: 110;\n    }\n    .nav-toggle span {\n      display: block; width: 100%; height: 1.5px;\n      background: var(--navy);\n      position: absolute; left: 0;\n      transition: transform 0.3s ease, opacity 0.3s ease, background 0.3s ease;\n    }\n    .nav-toggle span:nth-child(1) { top: 0; }\n    .nav-toggle span:nth-child(2) { top: 9px; }\n    .nav-toggle span:nth-child(3) { top: 18px; }\n    .nav-toggle.open span:nth-child(1) { transform: translateY(9px) rotate(45deg); }\n    .nav-toggle.open span:nth-child(2) { opacity: 0; }\n    .nav-toggle.open span:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }\n\n    .nav-overlay {\n      position: fixed; inset: 0;\n      background: var(--navy);\n      z-index: 105;\n      flex-direction: column;\n      justify-content: flex-end;\n      padding: 0 32px 48px;\n      display: flex;\n      transform: translateY(-100%);\n      transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);\n    }\n    .nav-overlay.open {\n      transform: translateY(0);\n    }\n    .nav-overlay-links {\n      display: flex;\n      flex-direction: column;\n      gap: 20px;\n      margin-bottom: 32px;\n    }\n    .nav-overlay-links a {\n      font-family: var(--font-display);\n      font-size: 36px; font-weight: 300;\n      color: var(--cream); text-decoration: none;\n      letter-spacing: -0.01em;\n      line-height: 1.1;\n      opacity: 0;\n      transform: translateY(-12px);\n      transition: opacity 0.35s ease, transform 0.35s ease, color 0.3s ease;\n    }\n    .nav-overlay.open .nav-overlay-links a {\n      opacity: 1;\n      transform: translateY(0);\n    }\n    .nav-overlay.open .nav-overlay-links a:nth-child(1) { transition-delay: 0.15s; }\n    .nav-overlay.open .nav-overlay-links a:nth-child(2) { transition-delay: 0.2s; }\n    .nav-overlay.open .nav-overlay-links a:nth-child(3) { transition-delay: 0.25s; }\n    .nav-overlay.open .nav-overlay-links a:nth-child(4) { transition-delay: 0.3s; }\n    .nav-overlay-links a:hover { opacity: 0.6; }\n    .nav-overlay-contact {\n      display: flex;\n      flex-direction: column;\n      gap: 6px;\n      padding-top: 24px;\n      border-top: 1px solid rgba(226, 225, 222, 0.25);\n      opacity: 0;\n      transition: opacity 0.35s ease;\n      transition-delay: 0s;\n    }\n    .nav-overlay.open .nav-overlay-contact {\n      opacity: 1;\n      transition-delay: 0.35s;\n    }\n    .nav-overlay-contact a {\n      font-family: var(--font);\n      font-size: 14px; font-weight: 400;\n      letter-spacing: 0;\n      text-transform: none;\n      color: var(--stone); text-decoration: none;\n      transition: color 0.3s ease;\n    }\n    .nav-overlay-contact a:hover { color: var(--cream); }\n    .nav-overlay-social {\n      display: flex; align-items: center; gap: 20px;\n      margin-top: 16px;\n    }\n    .nav-overlay-social a {\n      display: inline-flex; align-items: center; justify-content: center;\n      color: var(--stone);\n      transition: color 0.3s ease;\n    }\n    .nav-overlay-social a:hover { color: var(--cream); }\n    .nav-overlay-social svg { width: 22px; height: 22px; display: block; }\n\n    @media (max-width: 767px) {\n      body { margin: 0; }\n      .nav-links-left, .nav-links-right { display: none; }\n      .nav {\n        grid-template-columns: auto 1fr auto;\n        padding: 0 20px;\n      }\n      .nav-logo { justify-self: start; }\n      .nav-toggle { display: block; justify-self: end; }\n    }\n\n    body.nav-open { overflow: hidden; }\n    body.nav-open .nav {\n      background: var(--navy);\n      transition: background 0.3s ease;\n    }\n    body.nav-open .nav-logo svg rect { stroke: var(--cream); }\n    body.nav-open .nav-logo svg path { fill: var(--cream); }\n    body.nav-open .nav-toggle span { background: var(--cream); }\n\n    /* ════════════════════════════════════\n       SECTION BASE\n    ════════════════════════════════════ */\n    .section {\n      padding: 100px 36px;\n      border-bottom: none;\n    }\n    .section-inner {\n      max-width: var(--max-width);\n      margin: 0 auto;\n    }\n\n    @media (max-width: 767px) {\n      .section { padding: 48px 20px; }\n    }\n\n    /* ════════════════════════════════════\n       HERO\n    ════════════════════════════════════ */\n    .hero {\n      background: var(--navy);\n      border-bottom: none;\n    }\n    .hero-inner {\n      display: flex; flex-direction: column;\n      align-items: center;\n      max-width: var(--max-width);\n      margin: 0 auto;\n      padding: 0 36px;\n    }\n    .hero-text {\n      display: flex; flex-direction: column;\n      align-items: center;\n      text-align: center;\n      padding: 192px 0 48px;\n      gap: 0;\n    }\n    .hero-label {\n      font-family: var(--font);\n      font-size: 14px; font-weight: 400;\n      letter-spacing: 0.1em; text-transform: uppercase;\n      line-height: 1.5;\n      color: var(--stone);\n      margin-bottom: 29px;\n    }\n    .hero h1 {\n      font-size: clamp(38px, 6vw, 80px);\n      color: var(--cream);\n      line-height: 1.05;\n      text-transform: uppercase;\n      margin-bottom: 22px;\n    }\n    .hero-sub {\n      font-family: var(--font);\n      font-size: 14px; font-weight: 400;\n      line-height: 1.5;\n      color: #fff;\n      text-transform: uppercase;\n      letter-spacing: 0.1em;\n      max-width: 520px;\n      margin-bottom: 32px;\n    }\n    .hero-cta {\n      display: inline-block;\n      font-family: var(--font);\n      font-size: 11px; font-weight: 500;\n      letter-spacing: 0.14em; text-transform: uppercase;\n      color: var(--stone);\n      border: none;\n      background: none;\n      padding: 0;\n      text-decoration: underline;\n      text-underline-offset: 3px;\n      text-decoration-thickness: 1px;\n      text-decoration-color: var(--stone);\n      transition: color 0.3s ease, text-decoration-color 0.3s ease;\n    }\n    .hero-cta:hover {\n      color: var(--cream);\n      text-decoration-color: var(--cream);\n    }\n\n    .hero-image-wrapper {\n      position: relative;\n      background: linear-gradient(to bottom, var(--navy) 50%, #9B9E99 50%);\n      padding: 48px 12% 0;\n    }\n    .hero-image {\n      position: relative;\n      width: 100%;\n      aspect-ratio: 16 / 9;\n      overflow: hidden;\n      border-radius: 0;\n      opacity: 0;\n      transform: translateY(20px);\n      animation: heroImageIn 1s ease 0.6s forwards;\n    }\n    @keyframes heroImageIn {\n      to { opacity: 1; transform: translateY(0); }\n    }\n    @keyframes kenBurns {\n      0% { transform: scale(1); }\n      100% { transform: scale(1.06); }\n    }\n    .hero-image img {\n      width: 100%; height: 100%;\n      object-fit: cover;\n      display: block;\n      animation: kenBurns 20s ease-in-out infinite alternate;\n      filter: saturate(0.85) brightness(0.95);\n    }\n    .hero-image::after {\n      display: none;\n    }\n\n    @media (max-width: 1023px) {\n      .hero-text { padding: 120px 0 40px; }\n      .hero-inner { padding: 0 24px; }\n      .hero-image-wrapper { padding: 40px 40px 0; }\n    }\n    @media (max-width: 767px) {\n      .hero-text { padding: 140px 0 32px; }\n      .hero-inner { padding: 0 20px; }\n      .hero h1 { font-size: 38px; }\n      .hero-label { font-size: 12px; font-weight: 300; }\n      .hero-sub { font-size: 12px; font-weight: 300; }\n      .hero-image-wrapper { padding: 32px 0 0; }\n      .hero-image { aspect-ratio: 4 / 3; border-radius: 0; }\n    }\n\n    /* ════════════════════════════════════\n       SERVICES\n    ════════════════════════════════════ */\n    .services {\n      background: #9B9E99;\n      padding-left: 12%;\n      padding-right: 12%;\n    }\n    .services > .section-inner {\n      max-width: none;\n    }\n    .services-header {\n      text-align: center;\n      margin-bottom: 88px;\n    }\n    .services-header .label {\n      font-family: var(--font);\n      font-size: 14px; font-weight: 400;\n      letter-spacing: 0.1em; text-transform: uppercase;\n      line-height: 1.5;\n      color: #333533;\n      margin-bottom: 29px;\n      display: block;\n    }\n    .services-header h2 {\n      font-size: clamp(38px, 6vw, 80px);\n      line-height: 1.05;\n      text-transform: uppercase;\n      max-width: 800px;\n      margin: 0 auto;\n      color: #151615;\n    }\n    .services-content {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 64px;\n      align-items: start;\n    }\n    .services-cta {\n      display: inline-flex;\n      align-items: center;\n      gap: 10px;\n      font-family: var(--font);\n      font-size: 11px; font-weight: 500;\n      letter-spacing: 0.14em; text-transform: uppercase;\n      color: #333533;\n      border: none;\n      background: none;\n      padding: 0;\n      margin-top: 28px;\n      text-decoration: none;\n      transition: opacity 0.3s ease;\n    }\n    .services-cta img {\n      width: auto;\n      height: 11px;\n    }\n    .services-cta:hover {\n      opacity: 0.7;\n    }\n    .services-intro {\n      font-size: 15px; font-weight: 400;\n      color: #333533;\n      line-height: 1.8;\n      max-width: 480px;\n    }\n    .services-list {\n      display: flex;\n      flex-direction: column;\n      gap: 0;\n    }\n    .service-item {\n      padding: 28px 0 32px;\n      border-bottom: 1px solid #787A78;\n    }\n    .service-item:first-child {\n      padding-top: 0;\n    }\n    .service-item-header {\n      display: flex;\n      align-items: baseline;\n    }\n    .service-num { display: none; }\n    .service-item h3 {\n      font-family: var(--font);\n      font-size: 14px; font-weight: 500;\n      line-height: 1.5;\n      text-transform: uppercase;\n      letter-spacing: 0.1em;\n      color: #151615;\n    }\n    .service-item p {\n      font-size: 15px; font-weight: 400;\n      color: #333533;\n      line-height: 1.6;\n      margin-top: 12px;\n      padding-left: 0;\n    }\n\n    @media (max-width: 767px) {\n      .services { padding: 36px 20px; }\n      .services-header { margin-bottom: 20px; text-align: left; }\n      .services-header .label { margin-bottom: 20px; }\n      .services-header h2 { font-size: 32px; }\n      .services-cta { margin-top: 20px; }\n      .services-content { grid-template-columns: 1fr; gap: 48px; }\n      .service-item { padding: 20px 0 24px; }\n      .service-item:first-child { padding-top: 0; }\n      .service-item:last-child { border-bottom: none; }\n    }\n\n    /* ════════════════════════════════════\n       ABOUT\n    ════════════════════════════════════ */\n    .about {\n      background: var(--bg-primary);\n      padding-left: 12%;\n      padding-right: 12%;\n    }\n    .about > .section-inner {\n      max-width: none;\n    }\n    .about-grid {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 64px;\n      align-items: start;\n    }\n    .about-text .label {\n      font-family: var(--font);\n      font-size: 14px; font-weight: 400;\n      letter-spacing: 0.1em; text-transform: uppercase;\n      line-height: 1.5;\n      color: var(--navy);\n      display: block;\n    }\n    .about-text h2 {\n      display: none;\n    }\n    .about-copy p {\n      font-size: 15px; font-weight: 400;\n      color: var(--navy);\n      line-height: 1.8;\n      margin-bottom: 20px;\n    }\n\n    .about-image {\n      display: none;\n    }\n\n    .trust-divider {\n      width: 100%;\n      height: 1px;\n      background: #B1B0AE;\n      margin: 48px 0 40px;\n    }\n    .trust-row {\n      display: flex;\n      flex-direction: column;\n      gap: 8px;\n    }\n    .trust-item {\n      border: none;\n      border-radius: 0;\n      padding: 0;\n      text-align: left;\n      background: none;\n      display: flex;\n      align-items: center;\n      gap: 14px;\n    }\n    .trust-item::before {\n      content: \"\";\n      display: inline-block;\n      width: 8px;\n      height: 8px;\n      flex-shrink: 0;\n      background: var(--navy);\n      opacity: 0.5;\n      -webkit-mask-image: var(--star-url);\n      mask-image: var(--star-url);\n      -webkit-mask-size: contain;\n      mask-size: contain;\n      -webkit-mask-repeat: no-repeat;\n      mask-repeat: no-repeat;\n    }\n    .trust-item span {\n      font-family: var(--font);\n      font-size: 12px; font-weight: 500;\n      letter-spacing: 0.08em; text-transform: uppercase;\n      color: var(--navy);\n      line-height: 1.8;\n      display: block;\n    }\n\n    @media (max-width: 1023px) {\n      .about-grid { grid-template-columns: 1fr; gap: 16px; }\n    }\n    @media (max-width: 767px) {\n      .about { padding: 48px 20px; }\n      .trust-divider { margin: 32px 0 28px; }\n      .trust-row { gap: 4px; }\n    }\n\n    /* ════════════════════════════════════\n       ABOUT IMAGE BREAK\n    ════════════════════════════════════ */\n    .about-image-break {\n      background: var(--bg-primary);\n      padding: 0 12%;\n    }\n    .about-image-break .break-image {\n      width: 100%;\n      aspect-ratio: 16 / 9;\n      overflow: hidden;\n    }\n    .about-image-break .break-image img {\n      width: 100%; height: 100%;\n      object-fit: cover;\n      display: block;\n      filter: saturate(0.85) brightness(0.95);\n    }\n    @media (max-width: 767px) {\n      .about-image-break { padding: 0; }\n    }\n\n    /* ════════════════════════════════════\n       SERVICE AREAS\n    ════════════════════════════════════ */\n    .areas {\n      background: var(--bg-primary);\n      padding-left: 12%;\n      padding-right: 12%;\n    }\n    .areas > .section-inner {\n      max-width: none;\n    }\n    .areas-header {\n      text-align: center;\n      margin-bottom: 48px;\n    }\n    .areas-header .label {\n      font-family: var(--font);\n      font-size: 14px; font-weight: 400;\n      letter-spacing: 0.1em; text-transform: uppercase;\n      line-height: 1.5;\n      color: var(--navy);\n      margin-bottom: 20px;\n      display: block;\n    }\n    .areas-header h2 {\n      font-size: clamp(30px, 5.5vw, 72px);\n      line-height: 1.05;\n      text-transform: uppercase;\n      color: var(--navy);\n    }\n    .areas-header p {\n      font-size: 15px; font-weight: 400;\n      color: var(--navy);\n      max-width: 580px;\n      margin: 20px auto 0;\n      line-height: 1.8;\n    }\n    .areas-list {\n      text-align: center;\n      font-family: var(--font);\n      font-size: 14px;\n      font-weight: 500;\n      font-style: normal;\n      text-transform: uppercase;\n      letter-spacing: 0.1em;\n      color: var(--text-primary);\n      line-height: 2.4;\n      max-width: 900px;\n      margin: 0 auto;\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      align-items: center;\n      gap: 0;\n    }\n    .areas-list .area-name {\n      display: inline-block;\n      padding: 6px 4px;\n      transition: color 0.3s ease, letter-spacing 0.3s ease;\n      cursor: default;\n    }\n    .areas-list .area-name:hover {\n      color: var(--stone);\n    }\n    .areas-list .sep {\n      display: inline-block;\n      width: 10px;\n      height: 10px;\n      margin: 0 12px;\n      vertical-align: middle;\n      background: var(--navy);\n      opacity: 0.5;\n      -webkit-mask-image: var(--star-url);\n      mask-image: var(--star-url);\n      -webkit-mask-size: contain;\n      mask-size: contain;\n      -webkit-mask-repeat: no-repeat;\n      mask-repeat: no-repeat;\n    }\n\n    /* ── Areas Marquee (mobile) ── */\n    .areas-marquee {\n      display: none;\n    }\n\n    @keyframes marqueeScroll {\n      0% { transform: translateX(0); }\n      100% { transform: translateX(-50%); }\n    }\n\n    @media (max-width: 767px) {\n      .areas { padding: 48px 0; }\n      .areas-header {\n        text-align: left;\n        margin-bottom: 40px;\n        padding: 0 20px;\n      }\n      .areas-header .label { margin-bottom: 20px; }\n      .areas-header h2 { font-size: 32px; }\n      .areas-hd-break { display: none; }\n      .areas-list { display: none; }\n      .areas-marquee {\n        display: block;\n        overflow: hidden;\n        -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);\n        mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);\n      }\n      .areas-marquee-track {\n        display: flex;\n        align-items: center;\n        gap: 0;\n        width: max-content;\n        animation: marqueeScroll 45s linear infinite;\n      }\n      .areas-marquee-track:hover,\n      .areas-marquee-track:active {\n        animation-play-state: paused;\n      }\n      .areas-marquee-track .area-name {\n        font-family: var(--font);\n        font-size: 12px;\n        font-weight: 400;\n        text-transform: uppercase;\n        letter-spacing: 0.1em;\n        color: var(--text-primary);\n        white-space: nowrap;\n        padding: 0 6px;\n      }\n      .areas-marquee-track .sep {\n        display: inline-block;\n        width: 10px; height: 10px;\n        margin: 0 14px;\n        flex-shrink: 0;\n        background: var(--navy);\n        opacity: 0.4;\n        -webkit-mask-image: var(--star-url);\n        mask-image: var(--star-url);\n        -webkit-mask-size: contain;\n        mask-size: contain;\n        -webkit-mask-repeat: no-repeat;\n        mask-repeat: no-repeat;\n      }\n    }\n\n    @media (max-width: 767px) and (prefers-reduced-motion: reduce) {\n      .areas-marquee-track { animation: none; }\n    }\n\n    /* ════════════════════════════════════\n       BRAND PROMISE\n    ════════════════════════════════════ */\n    .testimonials {\n      background: var(--navy);\n      text-align: center;\n    }\n    .testimonial-quote-mark {\n      font-size: 36px;\n      color: var(--stone);\n      line-height: 0.8;\n      margin-bottom: 20px;\n      display: block;\n    }\n    .brand-promise-star {\n      display: block;\n      width: 28px;\n      height: 28px;\n      margin: 0 auto 28px;\n      background: var(--stone);\n      opacity: 0.5;\n      -webkit-mask-image: var(--star-url);\n      mask-image: var(--star-url);\n      -webkit-mask-size: contain;\n      mask-size: contain;\n      -webkit-mask-repeat: no-repeat;\n      mask-repeat: no-repeat;\n    }\n    .testimonial-text {\n      font-family: var(--font-display);\n      font-size: clamp(28px, 4vw, 48px);\n      font-weight: 300;\n      font-style: normal;\n      text-transform: uppercase;\n      color: var(--cream);\n      line-height: 1.1;\n      max-width: 800px;\n      margin: 0 auto;\n    }\n    .testimonial-attr {\n      font-family: var(--font);\n      font-size: 11px; font-weight: 500;\n      letter-spacing: 0.14em; text-transform: uppercase;\n      color: var(--stone);\n      margin-top: 28px;\n    }\n\n    /* ════════════════════════════════════\n       CLIENT TESTIMONIALS\n    ════════════════════════════════════ */\n    .client-testimonials {\n      background: #9B9E99;\n      padding-left: 12%;\n      padding-right: 12%;\n    }\n    .client-testimonials > .section-inner {\n      max-width: none;\n    }\n    .testimonials-header {\n      margin-bottom: 48px;\n    }\n    .testimonials-header .label {\n      font-family: var(--font);\n      font-size: 14px; font-weight: 400;\n      letter-spacing: 0.1em; text-transform: uppercase;\n      line-height: 1.5;\n      color: #333533;\n      display: block;\n    }\n    .testimonial-carousel {\n      position: relative;\n      overflow: hidden;\n    }\n    .testimonial-slide {\n      display: none;\n      opacity: 0;\n      transition: opacity 0.5s ease;\n    }\n    .testimonial-slide.active {\n      display: block;\n    }\n    .testimonial-slide.visible {\n      opacity: 1;\n    }\n    .testimonial-slide-text {\n      font-family: var(--font-display);\n      font-size: clamp(22px, 3vw, 32px);\n      font-weight: 300;\n      line-height: 1.4;\n      color: #151615;\n      margin-bottom: 20px;\n    }\n    .testimonial-slide-attr {\n      font-family: var(--font);\n      font-size: 12px; font-weight: 500;\n      letter-spacing: 0.1em; text-transform: uppercase;\n      color: #333533;\n    }\n    .testimonial-nav {\n      display: flex;\n      align-items: center;\n      gap: 20px;\n      margin-top: 48px;\n    }\n    .testimonial-dots {\n      display: flex;\n      gap: 8px;\n    }\n    .testimonial-dot {\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background: #787A78;\n      border: none;\n      padding: 0;\n      cursor: pointer;\n      transition: background 0.3s ease;\n    }\n    .testimonial-dot.active {\n      background: #333533;\n    }\n    .testimonial-dot:hover {\n      background: #333533;\n    }\n    .testimonial-arrows {\n      display: flex;\n      gap: 12px;\n      margin-left: auto;\n    }\n    .testimonial-arrow {\n      width: 36px;\n      height: 36px;\n      border: 1px solid #787A78;\n      border-radius: 50%;\n      background: none;\n      cursor: pointer;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      transition: border-color 0.3s ease, opacity 0.3s ease;\n      padding: 0;\n    }\n    .testimonial-arrow:hover {\n      border-color: #333533;\n    }\n    .testimonial-arrow svg {\n      width: 14px;\n      height: 14px;\n    }\n    .testimonial-arrow--prev svg {\n      transform: rotate(180deg);\n    }\n\n    @media (max-width: 767px) {\n      .client-testimonials { padding: 48px 20px; }\n      .testimonials-header { margin-bottom: 32px; }\n      .testimonial-nav { margin-top: 32px; }\n    }\n\n    /* ════════════════════════════════════\n       CONTACT\n    ════════════════════════════════════ */\n    .contact {\n      background: var(--navy);\n      padding-left: 12%;\n      padding-right: 12%;\n    }\n    .contact > .section-inner {\n      max-width: none;\n    }\n    .contact-header {\n      text-align: center;\n      margin-bottom: 64px;\n    }\n    .contact-header .label {\n      font-family: var(--font);\n      font-size: 14px; font-weight: 400;\n      letter-spacing: 0.1em; text-transform: uppercase;\n      line-height: 1.5;\n      color: var(--stone);\n      margin-bottom: 29px;\n      display: block;\n    }\n    .contact-header h2 {\n      font-size: clamp(38px, 6vw, 80px);\n      line-height: 1.05;\n      text-transform: uppercase;\n      color: var(--cream);\n    }\n    .contact-grid {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 64px;\n      align-items: start;\n    }\n    .contact-info-block {\n      margin-bottom: 32px;\n    }\n    .contact-info-block .contact-label {\n      font-family: var(--font);\n      font-size: 14px; font-weight: 500;\n      letter-spacing: 0.1em; text-transform: uppercase;\n      color: var(--stone);\n      display: block;\n      margin-bottom: 8px;\n    }\n    .contact-detail {\n      font-size: 15px; font-weight: 400;\n      color: var(--cream);\n      text-decoration: none;\n      display: block;\n      transition: opacity 0.3s ease;\n    }\n    a.contact-detail:hover { opacity: 0.6; }\n\n    /* ── Form ── */\n    .contact-form-wrap {\n      background: transparent;\n      border: none;\n      border-radius: 0;\n      padding: 0;\n    }\n    .form-group {\n      margin-bottom: 32px;\n      position: relative;\n    }\n    .form-group label {\n      display: block;\n      font-family: var(--font);\n      font-size: 14px; font-weight: 500;\n      letter-spacing: 0.08em; text-transform: uppercase;\n      color: var(--stone);\n      margin-bottom: 8px;\n    }\n    .form-group input,\n    .form-group textarea {\n      width: 100%;\n      font-family: var(--font);\n      font-size: 14px; font-weight: 400;\n      color: var(--cream);\n      background: transparent;\n      border: none;\n      border-bottom: 1px solid var(--border-light);\n      padding: 10px 0;\n      outline: none;\n      border-radius: 0;\n      -webkit-appearance: none;\n      transition: border-bottom-color 0.4s ease, color 0.3s ease;\n    }\n    .form-group input:focus,\n    .form-group textarea:focus {\n      border-bottom-color: var(--stone);\n      color: var(--stone);\n    }\n    .form-group textarea {\n      resize: vertical;\n      min-height: 80px;\n    }\n    .form-group input::placeholder,\n    .form-group textarea::placeholder { color: rgba(155, 158, 153, 0.4); }\n    .form-group input:-webkit-autofill,\n    .form-group input:-webkit-autofill:hover,\n    .form-group input:-webkit-autofill:focus,\n    .form-group textarea:-webkit-autofill {\n      -webkit-box-shadow: 0 0 0 1000px var(--navy) inset;\n      -webkit-text-fill-color: var(--cream);\n      caret-color: var(--cream);\n      transition: background-color 5000s ease-in-out 0s;\n    }\n\n    /* Field states */\n    .form-group.filled input,\n    .form-group.filled textarea {\n      border-bottom-color: var(--stone);\n    }\n    .form-group.invalid input,\n    .form-group.invalid textarea {\n      border-bottom-color: #C47A6E;\n    }\n    .form-group .field-error {\n      font-family: var(--font);\n      font-size: 12px; font-weight: 400;\n      color: #C47A6E;\n      overflow: hidden;\n      max-height: 0;\n      opacity: 0;\n      transition: max-height 0.3s ease, opacity 0.3s ease;\n      display: block;\n    }\n    .form-group.invalid .field-error {\n      max-height: 28px;\n      opacity: 1;\n      margin-top: 8px;\n    }\n\n    .form-group-checkboxes {\n      margin-bottom: 32px;\n    }\n    .form-group-checkboxes label.checkbox-heading {\n      font-family: var(--font);\n      font-size: 14px; font-weight: 500;\n      letter-spacing: 0.08em; text-transform: uppercase;\n      color: var(--stone);\n      display: block;\n      margin-bottom: 16px;\n    }\n    .checkbox-grid {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 12px 32px;\n      padding-bottom: 24px;\n      border-bottom: 1px solid var(--border-light);\n    }\n    .checkbox-item {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      cursor: pointer;\n      opacity: 0.4;\n      transition: opacity 0.3s ease;\n    }\n    .checkbox-item:hover {\n      opacity: 0.7;\n    }\n    .checkbox-item.selected {\n      opacity: 1;\n    }\n    .checkbox-item input[type=\"checkbox\"] {\n      width: 16px;\n      height: 16px;\n      border: 1px solid var(--border-light);\n      border-radius: 2px;\n      background: transparent;\n      -webkit-appearance: none;\n      appearance: none;\n      cursor: pointer;\n      flex-shrink: 0;\n      transition: background 0.2s ease, border-color 0.2s ease;\n    }\n    .checkbox-item input[type=\"checkbox\"]:checked {\n      background: var(--cream);\n      border-color: var(--cream);\n    }\n    .checkbox-item span {\n      font-family: var(--font);\n      font-size: 14px; font-weight: 400;\n      color: var(--cream);\n    }\n\n    .form-submit {\n      display: inline-flex;\n      align-items: center;\n      gap: 10px;\n      font-family: var(--font);\n      font-size: 11px; font-weight: 500;\n      letter-spacing: 0.14em; text-transform: uppercase;\n      color: var(--cream);\n      background: none;\n      border: none;\n      padding: 24px 0 0;\n      width: 100%;\n      cursor: pointer;\n      transition: opacity 0.3s ease;\n    }\n    .form-submit:hover { opacity: 0.7; }\n    .form-submit:disabled { opacity: 0.4; cursor: default; }\n    .form-submit.sending {\n      animation: submitPulse 1.5s ease-in-out infinite;\n    }\n    @keyframes submitPulse {\n      0%, 100% { opacity: 0.4; }\n      50% { opacity: 0.7; }\n    }\n    .form-submit img {\n      width: auto;\n      height: 11px;\n      filter: brightness(0) invert(1);\n    }\n    .form-error {\n      font-size: 13px; font-weight: 400;\n      color: var(--stone);\n      margin-top: 16px;\n      min-height: 0;\n    }\n\n    /* ── Success Modal ── */\n    .form-modal-overlay {\n      display: none;\n      position: fixed;\n      inset: 0;\n      background: rgba(13, 27, 42, 0.92);\n      backdrop-filter: blur(8px);\n      -webkit-backdrop-filter: blur(8px);\n      z-index: 200;\n      align-items: center;\n      justify-content: center;\n      padding: 20px;\n      opacity: 0;\n      transition: opacity 0.4s ease;\n    }\n    .form-modal-overlay.visible { display: flex; }\n    .form-modal-overlay.active { opacity: 1; }\n    .form-modal {\n      background: var(--navy);\n      border: 1px solid rgba(226, 225, 222, 0.08);\n      padding: 64px 48px 48px;\n      max-width: 520px;\n      width: 100%;\n      text-align: center;\n      transform: translateY(16px);\n      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n    }\n    .form-modal-overlay.active .form-modal { transform: translateY(0); }\n    .form-modal-symbol {\n      display: block;\n      margin: 0 auto 32px;\n    }\n    .form-modal-symbol svg {\n      width: 48px;\n      height: auto;\n    }\n    .form-modal-symbol svg rect { stroke: var(--cream); }\n    .form-modal-symbol svg path { fill: var(--cream); }\n    .form-modal h3 {\n      font-family: var(--font-display);\n      font-size: clamp(32px, 4vw, 42px);\n      font-weight: 300;\n      letter-spacing: 0.04em;\n      text-transform: uppercase;\n      margin-bottom: 20px;\n      color: var(--cream);\n    }\n    .form-modal p {\n      font-family: var(--font);\n      font-size: 14px; font-weight: 400;\n      color: rgba(226, 225, 222, 0.7);\n      line-height: 1.7;\n      margin-bottom: 32px;\n    }\n    .form-modal p a {\n      color: var(--cream);\n      font-weight: 500;\n      text-decoration: none;\n    }\n    .form-modal p a:hover { text-decoration: underline; }\n    .form-modal-close {\n      font-family: var(--font);\n      font-size: 11px; font-weight: 500;\n      letter-spacing: 0.14em; text-transform: uppercase;\n      color: rgba(226, 225, 222, 0.5);\n      background: none;\n      border: none;\n      padding: 8px 16px;\n      cursor: pointer;\n      transition: color 0.3s ease;\n    }\n    .form-modal-close:hover { color: var(--cream); }\n    @media (max-width: 767px) {\n      .form-modal { padding: 48px 28px 40px; }\n    }\n\n    @media (max-width: 1023px) {\n      .contact-grid { grid-template-columns: 1fr; }\n    }\n    @media (max-width: 767px) {\n      .contact { padding: 48px 20px 32px; }\n      .contact-header { margin-bottom: 32px; }\n      .contact-header h2 { font-size: 32px; }\n      .contact-grid { gap: 32px; }\n      .checkbox-grid { grid-template-columns: 1fr; }\n    }\n\n    /* ════════════════════════════════════\n       FOOTER\n    ════════════════════════════════════ */\n    .footer {\n      background: #fff;\n      padding: 80px 36px 32px;\n      text-align: center;\n      border-top: none;\n    }\n    .footer-logo {\n      display: block;\n      margin: 0 auto 64px;\n    }\n    .footer-logo img {\n      height: auto;\n      width: 100%;\n      max-width: 520px;\n      display: block;\n      margin: 0 auto;\n    }\n    .footer-nav {\n      display: flex;\n      justify-content: center;\n      gap: 36px;\n      margin-bottom: 32px;\n    }\n    .footer-nav a {\n      font-family: var(--font);\n      font-size: 12px; font-weight: 400;\n      letter-spacing: 0.08em; text-transform: uppercase;\n      color: var(--navy);\n      text-decoration: none;\n      transition: opacity 0.3s ease;\n    }\n    .footer-nav a:hover { opacity: 0.6; }\n    .footer-social {\n      display: flex;\n      justify-content: center;\n      gap: 20px;\n      margin-bottom: 32px;\n    }\n    .footer-social a {\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      color: var(--navy);\n      transition: opacity 0.3s ease;\n    }\n    .footer-social a:hover { opacity: 0.6; }\n    .footer-social svg { width: 22px; height: 22px; display: block; }\n    .footer-copy {\n      font-family: var(--font);\n      font-size: 12px; font-weight: 400;\n      letter-spacing: 0.1em; text-transform: uppercase;\n      color: rgba(13, 27, 42, 0.4);\n      padding-top: 32px;\n      border-top: 1px solid rgba(13, 27, 42, 0.1);\n    }\n    @media (max-width: 767px) {\n      .footer { padding: 48px 20px 32px; }\n      .footer-logo img { max-width: 300px; }\n      .footer-nav { flex-wrap: wrap; gap: 20px; }\n      .footer-nav a { font-size: 12px; }\n    }\n\n    /* ── Focus visible ── */\n    :focus-visible {\n      outline: 2px solid var(--stone);\n      outline-offset: 3px;\n    }\n  </style>\n</head>\n<body>\n\n<a href=\"#main\" class=\"skip-link\">Skip to content</a>\n\n<!-- ════════════════════════════════════════════\n     NAVIGATION\n════════════════════════════════════════════ -->\n<nav class=\"nav\" id=\"nav\" role=\"navigation\" aria-label=\"Main navigation\">\n  <ul class=\"nav-links-left\">\n    <li><a href=\"#services\">Services</a></li>\n    <li><a href=\"#areas\">Areas</a></li>\n    <li><a href=\"#about\">About</a></li>\n  </ul>\n\n  <a href=\"#hero\" class=\"nav-logo\" aria-label=\"Hamptons Spotless Services — Home\">\n    <svg width=\"381\" height=\"295\" viewBox=\"0 0 381 295\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"HSS monogram\">\n      <rect x=\"4.65\" y=\"4.65\" width=\"371.71\" height=\"284.98\" rx=\"57.3\" stroke=\"#E2E1DE\" stroke-width=\"9.29\"/>\n      <path d=\"M58.85 245.69V246.39H114.88V245.69C103.47 228.05 101.05 218.37 101.05 194.51V104.54C101.05 80.67 103.47 70.99 114.88 53.35V52.66H58.85V53.35C69.92 70.99 72.69 81.02 72.69 104.54V194.51C72.69 218.02 69.92 228.05 58.85 245.69Z\" fill=\"#E2E1DE\"/>\n      <path d=\"M192.92 215.85L185.52 173.71C183.98 164.98 177.64 158.48 168.86 156.94L127.27 149.61L169.32 142.09C177.63 140.6 183.99 134.24 185.47 125.89L192.99 83.19L200.49 125.83C201.95 134.16 208.26 140.62 216.59 142.1L259.07 149.65L216.7 157.11C207.97 158.65 201.57 165.4 200.28 174.13L192.92 215.85Z\" fill=\"#E2E1DE\"/>\n      <path d=\"M271.46 245.69V246.39H327.49V245.69C316.07 228.05 313.65 218.37 313.65 194.51V104.54C313.65 80.67 316.07 70.99 327.49 53.35V52.66H271.46V53.35C282.53 70.99 285.29 81.02 285.29 104.54V194.51C285.29 218.02 282.53 228.05 271.46 245.69Z\" fill=\"#E2E1DE\"/>\n    </svg>\n  </a>\n\n  <ul class=\"nav-links-right\">\n    <li><a href=\"#contact\">Contact</a></li>\n    <li class=\"nav-social\">\n      <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"instagramUrl"), env.opts.autoescape);
output += "\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Hamptons Spotless Services on Instagram\">\n        <svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n          <rect x=\"2.5\" y=\"2.5\" width=\"19\" height=\"19\" rx=\"5\" stroke=\"currentColor\" stroke-width=\"1.6\"/>\n          <circle cx=\"12\" cy=\"12\" r=\"4.2\" stroke=\"currentColor\" stroke-width=\"1.6\"/>\n          <circle cx=\"17.4\" cy=\"6.6\" r=\"1.2\" fill=\"currentColor\"/>\n        </svg>\n      </a>\n      <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"facebookUrl"), env.opts.autoescape);
output += "\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Hamptons Spotless Services on Facebook\">\n        <svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n          <path d=\"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12Z\" fill=\"currentColor\"/>\n        </svg>\n      </a>\n    </li>\n    <li><a href=\"tel:";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"phoneTel"), env.opts.autoescape);
output += "\" class=\"nav-phone\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"phoneDisplay"), env.opts.autoescape);
output += "</a></li>\n  </ul>\n\n  <button class=\"nav-toggle\" id=\"nav-toggle\" aria-label=\"Toggle menu\" aria-expanded=\"false\">\n    <span></span><span></span><span></span>\n  </button>\n</nav>\n\n<div class=\"nav-overlay\" id=\"nav-overlay\">\n  <div class=\"nav-overlay-links\">\n    <a href=\"#services\">Services</a>\n    <a href=\"#areas\">Areas</a>\n    <a href=\"#about\">About</a>\n    <a href=\"#contact\">Contact</a>\n  </div>\n  <div class=\"nav-overlay-contact\">\n    <a href=\"tel:";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"phoneTel"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"phoneDisplay"), env.opts.autoescape);
output += "</a>\n    <a href=\"mailto:";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"email"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"email"), env.opts.autoescape);
output += "</a>\n    <div class=\"nav-overlay-social\">\n      <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"instagramUrl"), env.opts.autoescape);
output += "\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Hamptons Spotless Services on Instagram\">\n        <svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n          <rect x=\"2.5\" y=\"2.5\" width=\"19\" height=\"19\" rx=\"5\" stroke=\"currentColor\" stroke-width=\"1.6\"/>\n          <circle cx=\"12\" cy=\"12\" r=\"4.2\" stroke=\"currentColor\" stroke-width=\"1.6\"/>\n          <circle cx=\"17.4\" cy=\"6.6\" r=\"1.2\" fill=\"currentColor\"/>\n        </svg>\n      </a>\n      <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"facebookUrl"), env.opts.autoescape);
output += "\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Hamptons Spotless Services on Facebook\">\n        <svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n          <path d=\"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12Z\" fill=\"currentColor\"/>\n        </svg>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!-- ════════════════════════════════════════════\n     HERO\n════════════════════════════════════════════ -->\n<section class=\"hero\" id=\"hero\">\n  <div class=\"hero-inner\">\n    <div class=\"hero-text\">\n      <span class=\"hero-label fade-in\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"heroLabel"), env.opts.autoescape);
output += "</span>\n      <h1 class=\"fade-in fade-in-delay-1\">";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"heroHeadingLines");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("line", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += runtime.suppressValue(t_4, env.opts.autoescape);
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += "<br>";
;
}
;
}
}
frame = frame.pop();
output += "</h1>\n      <p class=\"hero-sub fade-in fade-in-delay-2\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"heroSubtext"), env.opts.autoescape);
output += "</p>\n      <a href=\"#contact\" class=\"hero-cta fade-in fade-in-delay-3\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"heroCtaText"), env.opts.autoescape);
output += "</a>\n    </div>\n  </div>\n</section>\n<div class=\"hero-image-wrapper\">\n  <div class=\"hero-image fade-in fade-in-delay-1\">\n    <img src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"heroImage")),"src"), env.opts.autoescape);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"heroImage")),"alt"), env.opts.autoescape);
output += "\" loading=\"eager\">\n  </div>\n</div>\n\n<main id=\"main\">\n\n<!-- ════════════════════════════════════════════\n     SERVICES\n════════════════════════════════════════════ -->\n<section class=\"section services\" id=\"services\">\n  <div class=\"section-inner\">\n    <div class=\"services-header fade-in\">\n      <span class=\"label\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"servicesLabel"), env.opts.autoescape);
output += "</span>\n      <h2>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"servicesHeading"), env.opts.autoescape);
output += "</h2>\n    </div>\n    <div class=\"services-content\">\n      <div class=\"services-intro fade-in\">\n        <p>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"servicesIntro"), env.opts.autoescape);
output += "</p>\n        <a href=\"#contact\" class=\"services-cta fade-in\"><img src=\"assets/hamptons-arrow.svg\" alt=\"\" aria-hidden=\"true\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"servicesCtaText"), env.opts.autoescape);
output += "</a>\n      </div>\n      <div class=\"services-list\">";
frame = frame.push();
var t_7 = runtime.contextOrFrameLookup(context, frame, "services");
if(t_7) {t_7 = runtime.fromIterator(t_7);
var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("service", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "\n        <div class=\"service-item fade-in\">\n          <div class=\"service-item-header\">\n            <span class=\"service-num\">";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index") < 10) {
output += "0";
;
}
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"), env.opts.autoescape);
output += "</span>\n            <h3>";
output += runtime.suppressValue(runtime.memberLookup((t_8),"title"), env.opts.autoescape);
output += "</h3>\n          </div>\n          <p>";
output += runtime.suppressValue(runtime.memberLookup((t_8),"description"), env.opts.autoescape);
output += "</p>\n        </div>";
;
}
}
frame = frame.pop();
output += "\n      </div>\n    </div>\n  </div>\n</section>\n\n\n<!-- ════════════════════════════════════════════\n     SERVICE AREAS\n════════════════════════════════════════════ -->\n<section class=\"section areas\" id=\"areas\">\n  <div class=\"section-inner\">\n    <div class=\"areas-header fade-in\">\n      <span class=\"label\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"areasLabel"), env.opts.autoescape);
output += "</span>\n      <h2>";
frame = frame.push();
var t_11 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"areasHeadingLines");
if(t_11) {t_11 = runtime.fromIterator(t_11);
var t_10 = t_11.length;
for(var t_9=0; t_9 < t_11.length; t_9++) {
var t_12 = t_11[t_9];
frame.set("line", t_12);
frame.set("loop.index", t_9 + 1);
frame.set("loop.index0", t_9);
frame.set("loop.revindex", t_10 - t_9);
frame.set("loop.revindex0", t_10 - t_9 - 1);
frame.set("loop.first", t_9 === 0);
frame.set("loop.last", t_9 === t_10 - 1);
frame.set("loop.length", t_10);
output += runtime.suppressValue(t_12, env.opts.autoescape);
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += "<br class=\"areas-hd-break\">";
;
}
;
}
}
frame = frame.pop();
output += "</h2>\n      <p>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"areasIntro"), env.opts.autoescape);
output += "</p>\n    </div>\n    <div class=\"areas-list fade-in\">";
frame = frame.push();
var t_15 = runtime.contextOrFrameLookup(context, frame, "areas");
if(t_15) {t_15 = runtime.fromIterator(t_15);
var t_14 = t_15.length;
for(var t_13=0; t_13 < t_15.length; t_13++) {
var t_16 = t_15[t_13];
frame.set("area", t_16);
frame.set("loop.index", t_13 + 1);
frame.set("loop.index0", t_13);
frame.set("loop.revindex", t_14 - t_13);
frame.set("loop.revindex0", t_14 - t_13 - 1);
frame.set("loop.first", t_13 === 0);
frame.set("loop.last", t_13 === t_14 - 1);
frame.set("loop.length", t_14);
output += "\n      <span class=\"area-name\">";
output += runtime.suppressValue(runtime.memberLookup((t_16),"name"), env.opts.autoescape);
output += "</span>";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += "<span class=\"sep\"></span>";
;
}
;
}
}
frame = frame.pop();
output += "\n    </div>\n    <div class=\"areas-marquee fade-in\">\n      <div class=\"areas-marquee-track\">";
frame = frame.push();
var t_19 = runtime.contextOrFrameLookup(context, frame, "areas");
if(t_19) {t_19 = runtime.fromIterator(t_19);
var t_18 = t_19.length;
for(var t_17=0; t_17 < t_19.length; t_17++) {
var t_20 = t_19[t_17];
frame.set("area", t_20);
frame.set("loop.index", t_17 + 1);
frame.set("loop.index0", t_17);
frame.set("loop.revindex", t_18 - t_17);
frame.set("loop.revindex0", t_18 - t_17 - 1);
frame.set("loop.first", t_17 === 0);
frame.set("loop.last", t_17 === t_18 - 1);
frame.set("loop.length", t_18);
output += "\n        <span class=\"area-name\">";
output += runtime.suppressValue(runtime.memberLookup((t_20),"name"), env.opts.autoescape);
output += "</span><span class=\"sep\"></span>";
;
}
}
frame = frame.pop();
frame = frame.push();
var t_23 = runtime.contextOrFrameLookup(context, frame, "areas");
if(t_23) {t_23 = runtime.fromIterator(t_23);
var t_22 = t_23.length;
for(var t_21=0; t_21 < t_23.length; t_21++) {
var t_24 = t_23[t_21];
frame.set("area", t_24);
frame.set("loop.index", t_21 + 1);
frame.set("loop.index0", t_21);
frame.set("loop.revindex", t_22 - t_21);
frame.set("loop.revindex0", t_22 - t_21 - 1);
frame.set("loop.first", t_21 === 0);
frame.set("loop.last", t_21 === t_22 - 1);
frame.set("loop.length", t_22);
output += "\n        <span class=\"area-name\">";
output += runtime.suppressValue(runtime.memberLookup((t_24),"name"), env.opts.autoescape);
output += "</span><span class=\"sep\"></span>";
;
}
}
frame = frame.pop();
output += "\n      </div>\n    </div>\n  </div>\n</section>\n\n<div class=\"about-image-break\">\n  <div class=\"break-image fade-in\">\n    <img src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"aboutImage")),"src"), env.opts.autoescape);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"aboutImage")),"alt"), env.opts.autoescape);
output += "\" loading=\"lazy\">\n  </div>\n</div>\n\n<!-- ════════════════════════════════════════════\n     ABOUT\n════════════════════════════════════════════ -->\n<section class=\"section about\" id=\"about\">\n  <div class=\"section-inner\">\n    <div class=\"about-grid\">\n      <div class=\"about-text\">\n        <span class=\"label fade-in\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"aboutLabel"), env.opts.autoescape);
output += "</span>\n      </div>\n      <div class=\"about-copy fade-in\">";
frame = frame.push();
var t_27 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"aboutParagraphs");
if(t_27) {t_27 = runtime.fromIterator(t_27);
var t_26 = t_27.length;
for(var t_25=0; t_25 < t_27.length; t_25++) {
var t_28 = t_27[t_25];
frame.set("paragraph", t_28);
frame.set("loop.index", t_25 + 1);
frame.set("loop.index0", t_25);
frame.set("loop.revindex", t_26 - t_25);
frame.set("loop.revindex0", t_26 - t_25 - 1);
frame.set("loop.first", t_25 === 0);
frame.set("loop.last", t_25 === t_26 - 1);
frame.set("loop.length", t_26);
output += "\n        <p>";
output += runtime.suppressValue(t_28, env.opts.autoescape);
output += "</p>";
;
}
}
frame = frame.pop();
output += "\n        <div class=\"trust-divider\"></div>\n        <div class=\"trust-row\">";
frame = frame.push();
var t_31 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"trustPoints");
if(t_31) {t_31 = runtime.fromIterator(t_31);
var t_30 = t_31.length;
for(var t_29=0; t_29 < t_31.length; t_29++) {
var t_32 = t_31[t_29];
frame.set("point", t_32);
frame.set("loop.index", t_29 + 1);
frame.set("loop.index0", t_29);
frame.set("loop.revindex", t_30 - t_29);
frame.set("loop.revindex0", t_30 - t_29 - 1);
frame.set("loop.first", t_29 === 0);
frame.set("loop.last", t_29 === t_30 - 1);
frame.set("loop.length", t_30);
output += "\n          <div class=\"trust-item\">\n            <span>";
output += runtime.suppressValue(t_32, env.opts.autoescape);
output += "</span>\n          </div>";
;
}
}
frame = frame.pop();
output += "\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n<!-- ════════════════════════════════════════════\n     TESTIMONIALS\n════════════════════════════════════════════ -->\n<section class=\"section client-testimonials\" id=\"client-testimonials\">\n  <div class=\"section-inner\">\n    <div class=\"testimonials-header fade-in\">\n      <span class=\"label\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"testimonialsLabel"), env.opts.autoescape);
output += "</span>\n    </div>\n    <div class=\"testimonial-carousel fade-in\" id=\"testimonial-carousel\">";
frame = frame.push();
var t_35 = runtime.contextOrFrameLookup(context, frame, "testimonials");
if(t_35) {t_35 = runtime.fromIterator(t_35);
var t_34 = t_35.length;
for(var t_33=0; t_33 < t_35.length; t_33++) {
var t_36 = t_35[t_33];
frame.set("t", t_36);
frame.set("loop.index", t_33 + 1);
frame.set("loop.index0", t_33);
frame.set("loop.revindex", t_34 - t_33);
frame.set("loop.revindex0", t_34 - t_33 - 1);
frame.set("loop.first", t_33 === 0);
frame.set("loop.last", t_33 === t_34 - 1);
frame.set("loop.length", t_34);
output += "\n      <div class=\"testimonial-slide";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"first")) {
output += " active";
;
}
output += "\">\n        <p class=\"testimonial-slide-text\">\"";
output += runtime.suppressValue(runtime.memberLookup((t_36),"quote"), env.opts.autoescape);
output += "\"</p>\n        <p class=\"testimonial-slide-attr\">";
output += runtime.suppressValue(runtime.memberLookup((t_36),"attribution"), env.opts.autoescape);
output += "</p>\n      </div>";
;
}
}
frame = frame.pop();
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "testimonials")),"length") > 1) {
output += "\n      <div class=\"testimonial-nav\">\n        <div class=\"testimonial-dots\">";
frame = frame.push();
var t_39 = runtime.contextOrFrameLookup(context, frame, "testimonials");
if(t_39) {t_39 = runtime.fromIterator(t_39);
var t_38 = t_39.length;
for(var t_37=0; t_37 < t_39.length; t_37++) {
var t_40 = t_39[t_37];
frame.set("t", t_40);
frame.set("loop.index", t_37 + 1);
frame.set("loop.index0", t_37);
frame.set("loop.revindex", t_38 - t_37);
frame.set("loop.revindex0", t_38 - t_37 - 1);
frame.set("loop.first", t_37 === 0);
frame.set("loop.last", t_37 === t_38 - 1);
frame.set("loop.length", t_38);
output += "\n          <button class=\"testimonial-dot";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"first")) {
output += " active";
;
}
output += "\" aria-label=\"Go to testimonial ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"), env.opts.autoescape);
output += "\"></button>";
;
}
}
frame = frame.pop();
output += "\n        </div>\n        <div class=\"testimonial-arrows\">\n          <button class=\"testimonial-arrow testimonial-arrow--prev\" aria-label=\"Previous testimonial\">\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><path d=\"M5 12h14M13 6l6 6-6 6\" stroke=\"#333533\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n          </button>\n          <button class=\"testimonial-arrow testimonial-arrow--next\" aria-label=\"Next testimonial\">\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><path d=\"M5 12h14M13 6l6 6-6 6\" stroke=\"#333533\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n          </button>\n        </div>\n      </div>";
;
}
output += "\n    </div>\n  </div>\n</section>\n\n<!-- ════════════════════════════════════════════\n     CONTACT\n════════════════════════════════════════════ -->\n<section class=\"section contact\" id=\"contact\">\n  <div class=\"section-inner\">\n    <div class=\"contact-header fade-in\">\n      <span class=\"label\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"contactLabel"), env.opts.autoescape);
output += "</span>\n      <h2>";
frame = frame.push();
var t_43 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"contactHeadingLines");
if(t_43) {t_43 = runtime.fromIterator(t_43);
var t_42 = t_43.length;
for(var t_41=0; t_41 < t_43.length; t_41++) {
var t_44 = t_43[t_41];
frame.set("line", t_44);
frame.set("loop.index", t_41 + 1);
frame.set("loop.index0", t_41);
frame.set("loop.revindex", t_42 - t_41);
frame.set("loop.revindex0", t_42 - t_41 - 1);
frame.set("loop.first", t_41 === 0);
frame.set("loop.last", t_41 === t_42 - 1);
frame.set("loop.length", t_42);
output += runtime.suppressValue(t_44, env.opts.autoescape);
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += "<br>";
;
}
;
}
}
frame = frame.pop();
output += "</h2>\n    </div>\n    <div class=\"contact-grid\">\n      <div class=\"contact-info fade-in\">\n        <div class=\"contact-info-block\">\n          <span class=\"contact-label\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"contactPhoneLabel"), env.opts.autoescape);
output += "</span>\n          <a href=\"tel:";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"phoneTel"), env.opts.autoescape);
output += "\" class=\"contact-detail\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"phoneDisplay"), env.opts.autoescape);
output += "</a>\n        </div>\n        <div class=\"contact-info-block\">\n          <span class=\"contact-label\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"contactEmailLabel"), env.opts.autoescape);
output += "</span>\n          <a href=\"mailto:";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"email"), env.opts.autoescape);
output += "\" class=\"contact-detail\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"email"), env.opts.autoescape);
output += "</a>\n        </div>\n      </div>\n\n      <div class=\"contact-form-wrap fade-in\">\n        <form id=\"contact-form\" action=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"contactFormAction"), env.opts.autoescape);
output += "\" method=\"POST\">\n          <input type=\"text\" name=\"_gotcha\" style=\"display:none\" tabindex=\"-1\" autocomplete=\"off\">\n\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" id=\"name\" name=\"Name\" required placeholder=\"Enter your full name\" spellcheck=\"false\" autocomplete=\"name\">\n            <span class=\"field-error\">Please enter your name</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" id=\"email\" name=\"Email\" required placeholder=\"Enter a valid email address\">\n            <span class=\"field-error\">Please enter a valid email address</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"phone\">Phone</label>\n            <input type=\"tel\" id=\"phone\" name=\"Phone\" placeholder=\"Enter your best contact number\">\n          </div>\n          <div class=\"form-group-checkboxes\">\n            <label class=\"checkbox-heading\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"contactFormHeading"), env.opts.autoescape);
output += "</label>\n            <div class=\"checkbox-grid\">";
frame = frame.push();
var t_47 = runtime.contextOrFrameLookup(context, frame, "services");
if(t_47) {t_47 = runtime.fromIterator(t_47);
var t_46 = t_47.length;
for(var t_45=0; t_45 < t_47.length; t_45++) {
var t_48 = t_47[t_45];
frame.set("service", t_48);
frame.set("loop.index", t_45 + 1);
frame.set("loop.index0", t_45);
frame.set("loop.revindex", t_46 - t_45);
frame.set("loop.revindex0", t_46 - t_45 - 1);
frame.set("loop.first", t_45 === 0);
frame.set("loop.last", t_45 === t_46 - 1);
frame.set("loop.length", t_46);
if(runtime.memberLookup((t_48),"showInContactForm")) {
output += "\n              <label class=\"checkbox-item\">\n                <input type=\"checkbox\" name=\"Service\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((t_48),"title"), env.opts.autoescape);
output += "\">\n                <span>";
output += runtime.suppressValue(runtime.memberLookup((t_48),"title"), env.opts.autoescape);
output += "</span>\n              </label>";
;
}
;
}
}
frame = frame.pop();
output += "\n              <label class=\"checkbox-item\">\n                <input type=\"checkbox\" name=\"Service\" value=\"Other\">\n                <span>Other</span>\n              </label>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"message\">Message</label>\n            <textarea id=\"message\" name=\"Message\" rows=\"4\" placeholder=\"Tell us about your home and how we can help\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"form-submit\"><img src=\"assets/hamptons-arrow.svg\" alt=\"\" aria-hidden=\"true\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"contactSubmitText"), env.opts.autoescape);
output += "</button>\n          <p id=\"form-error\" class=\"form-error\"></p>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n\n</main>\n\n<!-- ════════════════════════════════════════════\n     FOOTER\n════════════════════════════════════════════ -->\n<footer class=\"footer\">\n  <div class=\"footer-logo\">\n    <img src=\"assets/hamptons-combinationlogo-dark.svg\" alt=\"Hamptons Spotless Services\">\n  </div>\n  <nav class=\"footer-nav\" aria-label=\"Footer navigation\">\n    <a href=\"#services\">Services</a>\n    <a href=\"#areas\">Areas</a>\n    <a href=\"#about\">About</a>\n    <a href=\"#contact\">Contact</a>\n    <a href=\"tel:";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"phoneTel"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"phoneDisplay"), env.opts.autoescape);
output += "</a>\n  </nav>\n  <div class=\"footer-social\">\n    <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"instagramUrl"), env.opts.autoescape);
output += "\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Hamptons Spotless Services on Instagram\">\n      <svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n        <rect x=\"2.5\" y=\"2.5\" width=\"19\" height=\"19\" rx=\"5\" stroke=\"currentColor\" stroke-width=\"1.6\"/>\n        <circle cx=\"12\" cy=\"12\" r=\"4.2\" stroke=\"currentColor\" stroke-width=\"1.6\"/>\n        <circle cx=\"17.4\" cy=\"6.6\" r=\"1.2\" fill=\"currentColor\"/>\n      </svg>\n    </a>\n    <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"facebookUrl"), env.opts.autoescape);
output += "\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Hamptons Spotless Services on Facebook\">\n      <svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n        <path d=\"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12Z\" fill=\"currentColor\"/>\n      </svg>\n    </a>\n  </div>\n  <p class=\"footer-copy\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"footerCopyright"), env.opts.autoescape);
output += "</p>\n</footer>\n\n<div class=\"form-modal-overlay\" id=\"form-modal\">\n  <div class=\"form-modal\">\n    <span class=\"form-modal-symbol\">\n      <svg width=\"381\" height=\"295\" viewBox=\"0 0 381 295\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n        <rect x=\"4.65\" y=\"4.65\" width=\"371.71\" height=\"284.98\" rx=\"57.3\" stroke=\"#E2E1DE\" stroke-width=\"9.29\"/>\n        <path d=\"M58.85 245.69V246.39H114.88V245.69C103.47 228.05 101.05 218.37 101.05 194.51V104.54C101.05 80.67 103.47 70.99 114.88 53.35V52.66H58.85V53.35C69.92 70.99 72.69 81.02 72.69 104.54V194.51C72.69 218.02 69.92 228.05 58.85 245.69Z\" fill=\"#E2E1DE\"/>\n        <path d=\"M192.92 215.85L185.52 173.71C183.98 164.98 177.64 158.48 168.86 156.94L127.27 149.61L169.32 142.09C177.63 140.6 183.99 134.24 185.47 125.89L192.99 83.19L200.49 125.83C201.95 134.16 208.26 140.62 216.59 142.1L259.07 149.65L216.7 157.11C207.97 158.65 201.57 165.4 200.28 174.13L192.92 215.85Z\" fill=\"#E2E1DE\"/>\n        <path d=\"M271.46 245.69V246.39H327.49V245.69C316.07 228.05 313.65 218.37 313.65 194.51V104.54C313.65 80.67 316.07 70.99 327.49 53.35V52.66H271.46V53.35C282.53 70.99 285.29 81.02 285.29 104.54V194.51C285.29 218.02 282.53 228.05 271.46 245.69Z\" fill=\"#E2E1DE\"/>\n      </svg>\n    </span>\n    <h3>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"successModalHeading"), env.opts.autoescape);
output += "</h3>\n    <p>";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"successModalBodyHtml")), env.opts.autoescape);
output += " <a href=\"tel:";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"phoneTel"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"phoneDisplay"), env.opts.autoescape);
output += "</a>.</p>\n    <button class=\"form-modal-close\" id=\"form-modal-close\">Close</button>\n  </div>\n</div>\n\n<!-- ════════════════════════════════════════════\n     SCRIPTS\n════════════════════════════════════════════ -->\n<script>\n(function() {\n  // ── Nav scroll state ──\n  var nav = document.getElementById('nav');\n  var hero = document.getElementById('hero');\n  if (nav && hero) {\n    var navObs = new IntersectionObserver(function(entries) {\n      nav.classList.toggle('scrolled', !entries[0].isIntersecting);\n    }, { threshold: 0.05 });\n    navObs.observe(hero);\n  }\n\n  // ── Mobile nav toggle ──\n  var toggle = document.getElementById('nav-toggle');\n  var overlay = document.getElementById('nav-overlay');\n  if (toggle && overlay) {\n    toggle.addEventListener('click', function() {\n      var isOpen = toggle.classList.toggle('open');\n      overlay.classList.toggle('open');\n      document.body.classList.toggle('nav-open');\n      toggle.setAttribute('aria-expanded', isOpen);\n    });\n    overlay.querySelectorAll('a').forEach(function(link) {\n      link.addEventListener('click', function() {\n        toggle.classList.remove('open');\n        overlay.classList.remove('open');\n        document.body.classList.remove('nav-open');\n        toggle.setAttribute('aria-expanded', 'false');\n      });\n    });\n  }\n\n  // ── Fade-in on scroll ──\n  var fadeEls = document.querySelectorAll('.fade-in');\n  if (fadeEls.length && 'IntersectionObserver' in window) {\n    var fadeObs = new IntersectionObserver(function(entries) {\n      entries.forEach(function(entry) {\n        if (entry.isIntersecting) {\n          entry.target.classList.add('visible');\n          fadeObs.unobserve(entry.target);\n        }\n      });\n    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });\n    fadeEls.forEach(function(el) { fadeObs.observe(el); });\n  }\n\n  // ── Contact form ──\n  var form = document.getElementById('contact-form');\n  if (form) {\n    var formWrap = form.closest('.contact-form-wrap');\n    var btnLabel = '";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"contactSubmitText"), env.opts.autoescape);
output += "';\n\n    // Validate on blur for required fields\n    form.querySelectorAll('input[required]').forEach(function(input) {\n      input.addEventListener('blur', function() {\n        var group = input.closest('.form-group');\n        if (!input.value.trim() || (input.type === 'email' && !input.validity.valid)) {\n          group.classList.add('invalid');\n          group.classList.remove('filled');\n        } else {\n          group.classList.remove('invalid');\n          group.classList.add('filled');\n        }\n      });\n      input.addEventListener('input', function() {\n        var group = input.closest('.form-group');\n        if (input.value.trim() && (input.type !== 'email' || input.validity.valid)) {\n          group.classList.remove('invalid');\n          group.classList.add('filled');\n        }\n      });\n    });\n\n    // Filled state for optional fields\n    form.querySelectorAll('input:not([required]), textarea').forEach(function(input) {\n      input.addEventListener('blur', function() {\n        var group = input.closest('.form-group');\n        if (group) group.classList.toggle('filled', !!input.value.trim());\n      });\n    });\n\n    // Modal\n    var modal = document.getElementById('form-modal');\n    var modalClose = document.getElementById('form-modal-close');\n\n    function showModal() {\n      modal.classList.add('visible');\n      requestAnimationFrame(function() {\n        requestAnimationFrame(function() {\n          modal.classList.add('active');\n        });\n      });\n    }\n    function closeModal() {\n      modal.classList.remove('active');\n      setTimeout(function() { modal.classList.remove('visible'); }, 400);\n    }\n    modalClose.addEventListener('click', closeModal);\n    modal.addEventListener('click', function(e) {\n      if (e.target === modal) closeModal();\n    });\n\n    form.addEventListener('submit', function(e) {\n      e.preventDefault();\n\n      // Validate all required fields\n      var valid = true;\n      form.querySelectorAll('input[required]').forEach(function(input) {\n        var group = input.closest('.form-group');\n        if (!input.value.trim() || (input.type === 'email' && !input.validity.valid)) {\n          group.classList.add('invalid');\n          group.classList.remove('filled');\n          valid = false;\n        }\n      });\n      if (!valid) return;\n\n      var btn = form.querySelector('.form-submit');\n      var btnText = btn.childNodes;\n      for (var i = btnText.length - 1; i >= 0; i--) {\n        if (btnText[i].nodeType === 3) { btnText[i].textContent = 'Sending\\u2026'; break; }\n      }\n      btn.disabled = true;\n      btn.classList.add('sending');\n\n      fetch(form.action, {\n        method: 'POST',\n        body: new FormData(form),\n        headers: { 'Accept': 'application/json' }\n      }).then(function(response) {\n        btn.classList.remove('sending');\n        btn.disabled = false;\n        for (var i = btn.childNodes.length - 1; i >= 0; i--) {\n          if (btn.childNodes[i].nodeType === 3) { btn.childNodes[i].textContent = btnLabel; break; }\n        }\n        if (response.ok) {\n          form.reset();\n          form.querySelectorAll('.form-group').forEach(function(g) {\n            g.classList.remove('filled', 'invalid');\n          });\n          showModal();\n        } else {\n          document.getElementById('form-error').textContent = 'Something went wrong. Please try calling us at ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"phoneDisplay"), env.opts.autoescape);
output += ".';\n        }\n      }).catch(function() {\n        btn.classList.remove('sending');\n        btn.disabled = false;\n        for (var i = btn.childNodes.length - 1; i >= 0; i--) {\n          if (btn.childNodes[i].nodeType === 3) { btn.childNodes[i].textContent = btnLabel; break; }\n        }\n        document.getElementById('form-error').textContent = 'Something went wrong. Please try calling us at ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"phoneDisplay"), env.opts.autoescape);
output += ".';\n      });\n    });\n  }\n\n  // ── Testimonial carousel ──\n  var carousel = document.getElementById('testimonial-carousel');\n  if (carousel) {\n    var slides = carousel.querySelectorAll('.testimonial-slide');\n    var dots = carousel.querySelectorAll('.testimonial-dot');\n    var prevBtn = carousel.querySelector('.testimonial-arrow--prev');\n    var nextBtn = carousel.querySelector('.testimonial-arrow--next');\n    var current = 0;\n\n    slides[0].classList.add('visible');\n\n    if (slides.length > 1 && prevBtn && nextBtn) {\n      function goToSlide(index) {\n        slides[current].classList.remove('visible');\n        dots[current].classList.remove('active');\n        setTimeout(function() {\n          slides[current].classList.remove('active');\n          current = (index + slides.length) % slides.length;\n          slides[current].classList.add('active');\n          dots[current].classList.add('active');\n          requestAnimationFrame(function() {\n            requestAnimationFrame(function() {\n              slides[current].classList.add('visible');\n            });\n          });\n        }, 300);\n      }\n\n      prevBtn.addEventListener('click', function() { goToSlide(current - 1); });\n      nextBtn.addEventListener('click', function() { goToSlide(current + 1); });\n      dots.forEach(function(dot, i) {\n        dot.addEventListener('click', function() { goToSlide(i); });\n      });\n    }\n  }\n\n  // ── Checkbox selected state ──\n  document.querySelectorAll('.checkbox-item input[type=\"checkbox\"]').forEach(function(cb) {\n    cb.addEventListener('change', function() {\n      cb.closest('.checkbox-item').classList.toggle('selected', cb.checked);\n    });\n  });\n\n})();\n</script>\n\n</body>\n</html>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

