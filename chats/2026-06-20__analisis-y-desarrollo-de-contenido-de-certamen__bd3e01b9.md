# Análisis y Desarrollo de Contenido de Certamen

- Chat ID: `bd3e01b9-4901-4a16-88f3-a7f60dd5f9ec`
- Mensajes: 4
- Periodo: 2026-06-20 18:05 UTC → 2026-06-20 18:11 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-06-20 18:05

reina de certamen analisa el documento completo extrae el texto busca informacion. desarolla e crea mas contenido baseandote en lo obvio

## [ASSISTANT] 2026-06-20 18:05 · Qwen3.7-Plus

```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Natalia Marinho | Miss T Supranational 2025</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root {
    --emerald: #0a6847;
    --emerald-dark: #064e34;
    --emerald-light: #1a8a5f;
    --gold: #d4af37;
    --gold-light: #f0d77b;
    --red: #8b0000;
    --red-deep: #5c0000;
    --cream: #faf3e0;
    --ivory: #fdfbf5;
    --charcoal: #1a1a1a;
    --dark: #0a0a0a;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Montserrat', sans-serif;
    background: var(--ivory);
    color: var(--charcoal);
    overflow-x: hidden;
    line-height: 1.6;
  }

  h1, h2, h3, h4 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .serif-italic {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
  }

  /* NAV */
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 1.5rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.4s ease;
    background: transparent;
  }

  nav.scrolled {
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(20px);
    padding: 1rem 3rem;
    box-shadow: 0 4px 30px rgba(0,0,0,0.2);
  }

  .nav-logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    color: var(--gold);
    font-weight: 700;
    letter-spacing: 0.1em;
  }

  .nav-logo span {
    color: white;
    font-weight: 400;
    font-style: italic;
  }

  .nav-links {
    display: flex;
    gap: 2.5rem;
    list-style: none;
  }

  .nav-links a {
    color: white;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    position: relative;
    transition: color 0.3s;
  }

  .nav-links a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--gold);
    transition: width 0.3s;
  }

  .nav-links a:hover { color: var(--gold); }
  .nav-links a:hover::after { width: 100%; }

  .nav-lang {
    display: flex;
    gap: 0.5rem;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
  }

  .nav-lang button {
    background: transparent;
    border: 1px solid rgba(255,255,255,0.3);
    color: white;
    padding: 0.3rem 0.7rem;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    transition: all 0.3s;
  }

  .nav-lang button.active,
  .nav-lang button:hover {
    background: var(--gold);
    border-color: var(--gold);
    color: var(--dark);
  }

  .menu-toggle {
    display: none;
    background: transparent;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
  }

  /* HERO */
  .hero {
    min-height: 100vh;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(10, 104, 71, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%);
    pointer-events: none;
  }

  .hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    padding: 8rem 4rem 4rem;
    max-width: 1600px;
    margin: 0 auto;
    width: 100%;
    align-items: center;
    position: relative;
    z-index: 2;
  }

  .hero-text {
    color: white;
  }

  .hero-badge {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    border: 1px solid var(--gold);
    color: var(--gold);
    font-size: 0.75rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    margin-bottom: 2rem;
    font-weight: 500;
  }

  .hero-title {
    font-size: clamp(3rem, 6vw, 5.5rem);
    line-height: 1;
    margin-bottom: 1rem;
    font-weight: 900;
  }

  .hero-title .line1 {
    display: block;
    color: white;
    font-weight: 400;
    font-style: italic;
    font-size: 0.5em;
    margin-bottom: 0.5rem;
  }

  .hero-title .line2 {
    display: block;
    background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 50%, var(--gold) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-title .line3 {
    display: block;
    color: white;
    font-weight: 400;
    font-size: 0.6em;
    margin-top: 0.5rem;
    letter-spacing: 0.1em;
  }

  .hero-subtitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.3rem;
    color: rgba(255,255,255,0.7);
    font-style: italic;
    margin: 2rem 0;
    max-width: 500px;
  }

  .hero-stats {
    display: flex;
    gap: 3rem;
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(212, 175, 55, 0.3);
  }

  .stat {
    text-align: left;
  }

  .stat-number {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    color: var(--gold);
    font-weight: 700;
    line-height: 1;
  }

  .stat-label {
    font-size: 0.7rem;
    color: rgba(255,255,255,0.6);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-top: 0.5rem;
  }

  .hero-image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero-image-wrapper {
    position: relative;
    width: 100%;
    max-width: 550px;
  }

  .hero-image-wrapper::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    border: 1px solid var(--gold);
    opacity: 0.4;
    pointer-events: none;
  }

  .hero-image-wrapper img {
    width: 100%;
    height: auto;
    display: block;
    filter: drop-shadow(0 20px 60px rgba(0,0,0,0.5));
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }

  .hero-crown {
    position: absolute;
    top: -40px;
    right: 20px;
    font-size: 3rem;
    color: var(--gold);
    animation: shimmer 3s ease-in-out infinite;
  }

  @keyframes shimmer {
    0%, 100% { opacity: 0.6; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.1); }
  }

  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    color: var(--gold);
    font-size: 0.7rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    animation: bounce 2s ease-in-out infinite;
  }

  .scroll-indicator::after {
    content: '';
    width: 1px;
    height: 40px;
    background: var(--gold);
  }

  @keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(10px); }
  }

  /* SECTIONS GENERAL */
  section {
    padding: 8rem 4rem;
    position: relative;
  }

  .section-header {
    text-align: center;
    margin-bottom: 5rem;
  }

  .section-label {
    display: inline-block;
    font-size: 0.75rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .section-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    color: var(--charcoal);
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }

  .section-title em {
    font-style: italic;
    color: var(--emerald);
  }

  .section-divider {
    width: 80px;
    height: 1px;
    background: var(--gold);
    margin: 0 auto;
  }

  /* HISTORIA */
  .historia {
    background: var(--ivory);
  }

  .historia-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
  }

  .historia-image {
    position: relative;
  }

  .historia-image img {
    width: 100%;
    border-radius: 4px;
    box-shadow: 0 30px 80px rgba(0,0,0,0.2);
  }

  .historia-image::after {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    border: 2px solid var(--gold);
    z-index: -1;
  }

  .historia-text h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: var(--emerald-dark);
  }

  .historia-text p {
    font-size: 1.05rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: #444;
  }

  .quote-box {
    background: linear-gradient(135deg, var(--emerald) 0%, var(--emerald-dark) 100%);
    color: white;
    padding: 2rem 2.5rem;
    margin: 2.5rem 0;
    border-left: 4px solid var(--gold);
    position: relative;
  }

  .quote-box::before {
    content: '"';
    position: absolute;
    top: -20px;
    left: 20px;
    font-family: 'Playfair Display', serif;
    font-size: 6rem;
    color: var(--gold);
    opacity: 0.5;
    line-height: 1;
  }

  .quote-box p {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem;
    font-style: italic;
    color: white;
    margin: 0;
    position: relative;
    z-index: 2;
  }

  .quote-author {
    margin-top: 1rem;
    font-size: 0.85rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
  }

  /* HACER */
  .hacer {
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
    color: white;
  }

  .hacer .section-title { color: white; }
  .hacer .section-title em { color: var(--gold); }

  .hacer-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 1300px;
    margin: 0 auto;
  }

  .hacer-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(212, 175, 55, 0.2);
    padding: 3rem 2rem;
    text-align: center;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
  }

  .hacer-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s;
  }

  .hacer-card:hover {
    background: rgba(212, 175, 55, 0.05);
    border-color: var(--gold);
    transform: translateY(-10px);
  }

  .hacer-card:hover::before {
    transform: translateX(100%);
  }

  .hacer-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    display: block;
  }

  .hacer-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--gold);
  }

  .hacer-card p {
    color: rgba(255,255,255,0.7);
    line-height: 1.7;
    font-size: 0.95rem;
  }

  /* CAMINO TIMELINE */
  .camino {
    background: var(--cream);
  }

  .timeline {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, transparent, var(--gold), transparent);
    transform: translateX(-50%);
  }

  .timeline-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-bottom: 4rem;
    position: relative;
  }

  .timeline-item:nth-child(even) .timeline-content {
    order: 2;
  }

  .timeline-item:nth-child(even) .timeline-visual {
    order: 1;
    text-align: right;
  }

  .timeline-dot {
    position: absolute;
    left: 50%;
    top: 2rem;
    width: 20px;
    height: 20px;
    background: var(--gold);
    border: 4px solid var(--cream);
    border-radius: 50%;
    transform: translateX(-50%);
    z-index: 2;
    box-shadow: 0 0 0 4px var(--gold);
  }

  .timeline-year {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    color: var(--emerald);
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  .timeline-title {
    font-size: 1.5rem;
    color: var(--charcoal);
    margin-bottom: 1rem;
  }

  .timeline-content p {
    color: #555;
    line-height: 1.7;
  }

  .timeline-visual {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .timeline-icon {
    width: 80px;
    height: 80px;
    background: var(--emerald);
    color: var(--gold);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    border-radius: 50%;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
  }

  /* LOGROS */
  .logros {
    background: linear-gradient(135deg, var(--emerald-dark) 0%, var(--emerald) 100%);
    color: white;
    position: relative;
    overflow: hidden;
  }

  .logros::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
  }

  .logros .section-title { color: white; }
  .logros .section-title em { color: var(--gold); }

  .logros-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    max-width: 1300px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  .logro-card {
    text-align: center;
    padding: 2rem 1rem;
    border: 1px solid rgba(212, 175, 55, 0.3);
    background: rgba(0,0,0,0.2);
    backdrop-filter: blur(10px);
    transition: all 0.4s;
  }

  .logro-card:hover {
    background: rgba(212, 175, 55, 0.1);
    transform: translateY(-5px);
  }

  .logro-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .logro-card h4 {
    color: var(--gold);
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .logro-card p {
    font-size: 0.85rem;
    color: rgba(255,255,255,0.8);
    line-height: 1.6;
  }

  /* GALERIA */
  .galeria {
    background: var(--ivory);
  }

  .galeria-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .galeria-item {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    background: #f0f0f0;
    aspect-ratio: 3/4;
  }

  .galeria-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .galeria-item:hover img {
    transform: scale(1.05);
  }

  .galeria-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%);
    display: flex;
    align-items: flex-end;
    padding: 2rem;
    opacity: 0;
    transition: opacity 0.4s;
  }

  .galeria-item:hover .galeria-overlay {
    opacity: 1;
  }

  .galeria-overlay h4 {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .galeria-overlay p {
    color: var(--gold);
    font-size: 0.85rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  /* MENSAJE */
  .mensaje {
    background: var(--charcoal);
    color: white;
    text-align: center;
    padding: 10rem 4rem;
    position: relative;
    overflow: hidden;
  }

  .mensaje::before,
  .mensaje::after {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, var(--emerald) 0%, transparent 70%);
    opacity: 0.2;
  }

  .mensaje::before { top: -200px; left: -200px; }
  .mensaje::after { bottom: -200px; right: -200px; }

  .mensaje-content {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  .mensaje-icon {
    font-size: 4rem;
    color: var(--gold);
    margin-bottom: 2rem;
  }

  .mensaje h2 {
    font-size: clamp(2rem, 4vw, 3.5rem);
    margin-bottom: 2rem;
    line-height: 1.2;
  }

  .mensaje h2 em {
    color: var(--gold);
    font-style: italic;
  }

  .mensaje p {
    font-size: 1.15rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.8);
    margin-bottom: 1.5rem;
  }

  .mensaje-signature {
    margin-top: 3rem;
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 1.5rem;
    color: var(--gold);
  }

  /* CONTACTO */
  .contacto {
    background: var(--ivory);
  }

  .contacto-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
  }

  .contacto-info h3 {
    font-size: 2.5rem;
    color: var(--emerald-dark);
    margin-bottom: 1.5rem;
  }

  .contacto-info p {
    font-size: 1.05rem;
    color: #555;
    line-height: 1.8;
    margin-bottom: 2rem;
  }

  .contacto-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .contacto-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.2rem 1.5rem;
    background: white;
    border: 1px solid rgba(0,0,0,0.1);
    text-decoration: none;
    color: var(--charcoal);
    transition: all 0.3s;
  }

  .contacto-link:hover {
    border-color: var(--gold);
    transform: translateX(10px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }

  .contacto-link-icon {
    width: 50px;
    height: 50px;
    background: var(--emerald);
    color: var(--gold);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    flex-shrink: 0;
  }

  .contacto-link-text {
    flex: 1;
  }

  .contacto-link-text strong {
    display: block;
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--emerald);
    margin-bottom: 0.3rem;
  }

  .contacto-link-text span {
    font-size: 0.95rem;
    color: #444;
  }

  .contacto-form {
    background: white;
    padding: 3rem;
    box-shadow: 0 20px 60px rgba(0,0,0,0.08);
  }

  .contacto-form h4 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: var(--charcoal);
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-group label {
    display: block;
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--emerald);
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid rgba(0,0,0,0.1);
    font-family: 'Montserrat', sans-serif;
    font-size: 0.95rem;
    transition: border-color 0.3s;
    background: var(--ivory);
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--gold);
  }

  .form-group textarea {
    resize: vertical;
    min-height: 120px;
  }

  .btn-submit {
    width: 100%;
    padding: 1.2rem;
    background: var(--emerald);
    color: white;
    border: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.85rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 600;
  }

  .btn-submit:hover {
    background: var(--emerald-dark);
    box-shadow: 0 10px 30px rgba(10, 104, 71, 0.3);
  }

  /* FOOTER */
  footer {
    background: var(--dark);
    color: white;
    padding: 4rem 4rem 2rem;
    text-align: center;
  }

  .footer-logo {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    color: var(--gold);
    margin-bottom: 1rem;
  }

  .footer-tagline {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    color: rgba(255,255,255,0.6);
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }

  .footer-social {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .footer-social a {
    width: 45px;
    height: 45px;
    border: 1px solid rgba(212, 175, 55, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gold);
    text-decoration: none;
    transition: all 0.3s;
    font-size: 1.1rem;
  }

  .footer-social a:hover {
    background: var(--gold);
    color: var(--dark);
    transform: translateY(-3px);
  }

  .footer-bottom {
    padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.1);
    font-size: 0.8rem;
    color: rgba(255,255,255,0.4);
    letter-spacing: 0.1em;
  }

  /* ANIMATIONS */
  .fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* RESPONSIVE */
  @media (max-width: 1024px) {
    section { padding: 5rem 2rem; }
    .hero-content { grid-template-columns: 1fr; padding: 7rem 2rem 4rem; }
    .hero-image { order: -1; }
    .hero-image-wrapper { max-width: 400px; margin: 0 auto; }
    .historia-content { grid-template-columns: 1fr; gap: 3rem; }
    .hacer-grid { grid-template-columns: 1fr; }
    .logros-grid { grid-template-columns: repeat(2, 1fr); }
    .contacto-grid { grid-template-columns: 1fr; }
    .galeria-grid { grid-template-columns: 1fr; }
    .timeline::before { left: 30px; }
    .timeline-item { grid-template-columns: 1fr; gap: 1rem; padding-left: 70px; }
    .timeline-item:nth-child(even) .timeline-content,
    .timeline-item:nth-child(even) .timeline-visual { order: unset; text-align: left; }
    .timeline-dot { left: 30px; }
  }

  @media (max-width: 768px) {
    nav { padding: 1rem 1.5rem; }
    .nav-links { display: none; }
    .menu-toggle { display: block; }
    .nav-links.open {
      display: flex;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: rgba(10,10,10,0.98);
      flex-direction: column;
      padding: 2rem;
      gap: 1.5rem;
    }
    .hero-stats { gap: 1.5rem; flex-wrap: wrap; }
    .logros-grid { grid-template-columns: 1fr; }
    .mensaje { padding: 6rem 2rem; }
    .contacto-form { padding: 2rem; }
  }
</style>
</head>
<body>

<!-- NAV -->
<nav id="navbar">
  <div class="nav-logo">NATALIA <span>Marinho</span></div>
  <ul class="nav-links" id="navLinks">
    <li><a href="#historia">Historia</a></li>
    <li><a href="#hacer">Lo que hago</a></li>
    <li><a href="#camino">Camino</a></li>
    <li><a href="#logros">Logros</a></li>
    <li><a href="#galeria">Galería</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ul>
  <div class="nav-lang">
    <button class="active">ES</button>
    <button>PT</button>
    <button>EN</button>
  </div>
  <button class="menu-toggle" onclick="document.getElementById('navLinks').classList.toggle('open')">☰</button>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-content">
    <div class="hero-text">
      <div class="hero-badge">Miss T Supranational 2025</div>
      <h1 class="hero-title">
        <span class="line1">Natalia</span>
        <span class="line2">Marinho</span>
        <span class="line3">Elegancia · Fuerza · Representación</span>
      </h1>
      <p class="hero-subtitle">De Recife al mundo. Una reina que no nació en un palacio, sino en las calles vibrantes del nordeste brasileño, donde los sueños son más grandes que las ciudades que los albergan.</p>
      <div class="hero-stats">
        <div class="stat">
          <div class="stat-number">2025</div>
          <div class="stat-label">Coronación</div>
        </div>
        <div class="stat">
          <div class="stat-number">18</div>
          <div class="stat-label">Años al cruzar el Atlántico</div>
        </div>
        <div class="stat">
          <div class="stat-number">∞</div>
          <div class="stat-label">Pasión</div>
        </div>
      </div>
    </div>
    <div class="hero-image">
      <div class="hero-image-wrapper">
        <div class="hero-crown">👑</div>
        <img src="https://images.unsplash.com/photo-1?w=600" alt="Natalia Marinho" id="heroImg">
      </div>
    </div>
  </div>
  <div class="scroll-indicator">Scroll</div>
</section>

<!-- HISTORIA -->
<section class="historia" id="historia">
  <div class="section-header fade-in">
    <div class="section-label">Capítulo I</div>
    <h2 class="section-title">Mi <em>Historia</em></h2>
    <div class="section-divider"></div>
  </div>
  <div class="historia-content">
    <div class="historia-image fade-in">
      <img src="https://images.unsplash.com/photo-2?w=600" alt="Natalia" id="histImg">
    </div>
    <div class="historia-text fade-in">
      <h3>De Recife al Mundo</h3>
      <p>Natalia Marinho no nació en un palacio. Nació en <strong>Recife</strong>, una ciudad vibrante del nordeste brasileño donde los sueños a veces parecen demasiado grandes para las calles que los albergan. Creció entre el ritmo del frevo, el color del mar y la pasión por la moda que latía en cada rincón de su infancia.</p>
      <p>A los 18 años, con una maleta y una determinación inquebrantable, cruzó el Atlántico. España no le dio nada fácil — pero Natalia no vino a buscar facilidades. <strong>Vino a construir.</strong></p>
      <div class="quote-box">
        <p>No me coronaron por lo que parezco. Me coronaron por lo que represento.</p>
        <div class="quote-author">— Natalia Marinho</div>
      </div>
      <p>Hoy, como <strong>Miss T Supranational 2025</strong>, representa algo más grande que ella misma: la posibilidad de que una chica trans de Recife pueda coronarse reina del mundo. Su historia no es solo la de una mujer — es la de un movimiento.</p>
    </div>
  </div>
</section>

<!-- HACER -->
<section class="hacer" id="hacer">
  <div class="section-header fade-in">
    <div class="section-label">Capítulo II</div>
    <h2 class="section-title">Lo que <em>hago</em></h2>
    <p style="color: rgba(255,255,255,0.7); margin-top: 1rem; font-size: 1.1rem;">Moda, Eventos & Representación</p>
    <div class="section-divider"></div>
  </div>
  <div class="hacer-grid">
    <div class="hacer-card fade-in">
      <span class="hacer-icon">👗</span>
      <h3>Diseño de Moda</h3>
      <p>Colecciones que fusionan la elegancia clásica con la identidad contemporánea. Cada pieza cuenta una historia de resistencia, belleza y autenticidad.</p>
    </div>
    <div class="hacer-card fade-in">
      <span class="hacer-icon">✨</span>
      <h3>Eventos & Certámenes</h3>
      <p>Presencia en eventos de moda y galas internacionales. Una fuerza natural que ilumina cada espacio con su carisma y presencia escénica.</p>
    </div>
    <div class="hacer-card fade-in">
      <span class="hacer-icon">💎</span>
      <h3>Representación</h3>
      <p>Voz del colectivo trans. Embajadora de diversidad, inclusión y empoderamiento. Su plataforma amplifica las voces que necesitan ser escuchadas.</p>
    </div>
  </div>
</section>

<!-- CAMINO -->
<section class="camino" id="camino">
  <div class="section-header fade-in">
    <div class="section-label">Capítulo III</div>
    <h2 class="section-title">Mi <em>Camino</em></h2>
    <div class="section-divider"></div>
  </div>
  <div class="timeline">
    <div class="timeline-item fade-in">
      <div class="timeline-content">
        <div class="timeline-year">Recife</div>
        <h3 class="timeline-title">Nace en Recife, Brasil</h3>
        <p>Creció con pasión por la moda y el arte, soñando con un mundo más grande. Las calles de Recife forjaron su carácter y su visión del mundo.</p>
      </div>
      <div class="timeline-visual">
        <div class="timeline-icon">🌴</div>
      </div>
      <div class="timeline-dot"></div>
    </div>
    <div class="timeline-item fade-in">
      <div class="timeline-content">
        <div class="timeline-year">18</div>
        <h3 class="timeline-title">La Gran Decisión</h3>
        <p>Cruza el Atlántico rumbo a España. Solo con su talento y determinación. Un acto de valentía que definiría el resto de su vida.</p>
      </div>
      <div class="timeline-visual">
        <div class="timeline-icon">✈️</div>
      </div>
      <div class="timeline-dot"></div>
    </div>
    <div class="timeline-item fade-in">
      <div class="timeline-content">
        <div class="timeline-year"></div>
        <h3 class="timeline-title">Adaptación & Resiliencia</h3>
        <p>Cada obstáculo se convirtió en escalón. Cada rechazo en motivación. La adaptación no fue un destino, fue una forma de vida.</p>
      </div>
      <div class="timeline-visual">
        <div class="timeline-icon">💪</div>
      </div>
      <div class="timeline-dot"></div>
    </div>
    <div class="timeline-item fade-in">
      <div class="timeline-content">
        <div class="timeline-year">ES</div>
        <h3 class="timeline-title">Hogar — Española de Corazón</h3>
        <p>Obtiene la nacionalidad. España deja de ser tierra de paso para convertirse en hogar. Un nuevo capítulo de pertenencia y orgullo.</p>
      </div>
      <div class="timeline-visual">
        <div class="timeline-icon">🇸</div>
      </div>
      <div class="timeline-dot"></div>
    </div>
    <div class="timeline-item fade-in">
      <div class="timeline-content">
        <div class="timeline-year">2025</div>
        <h3 class="timeline-title">La Coronación</h3>
        <p>Coronada Miss T Supranational en Italia. Los sueños se hacen realidad. El mundo reconoce su fuerza, su belleza y su mensaje.</p>
      </div>
      <div class="timeline-visual">
        <div class="timeline-icon">👑</div>
      </div>
      <div class="timeline-dot"></div>
    </div>
  </div>
</section>

<!-- LOGROS -->
<section class="logros" id="logros">
  <div class="section-header fade-in">
    <div class="section-label">Capítulo IV</div>
    <h2 class="section-title">Logros & <em>Reconocimientos</em></h2>
    <div class="section-divider"></div>
  </div>
  <div class="logros-grid">
    <div class="logro-card fade-in">
      <div class="logro-icon">👑</div>
      <h4>Miss T Supranational</h4>
      <p>Coronada en Italia 2025, representando la excelencia y la diversidad trans a nivel mundial.</p>
    </div>
    <div class="logro-card fade-in">
      <div class="logro-icon">🌍</div>
      <h4>Embajadora Global</h4>
      <p>Voz oficial del colectivo trans en foros internacionales de diversidad e inclusión.</p>
    </div>
    <div class="logro-card fade-in">
      <div class="logro-icon"></div>
      <h4>Diseñadora Emergente</h4>
      <p>Colecciones presentadas en pasarelas de moda que fusionan identidad y elegancia.</p>
    </div>
    <div class="logro-card fade-in">
      <div class="logro-icon">🏆</div>
      <h4>Ícono de Representación</h4>
      <p>Reconocida por medios internacionales como referente de empoderamiento y autenticidad.</p>
    </div>
  </div>
</section>

<!-- GALERIA -->
<section class="galeria" id="galeria">
  <div class="section-header fade-in">
    <div class="section-label">Capítulo V</div>
    <h2 class="section-title">Galería <em>Real</em></h2>
    <div class="section-divider"></div>
  </div>
  <div class="galeria-grid">
    <div class="galeria-item fade-in">
      <img src="https://images.unsplash.com/photo-3?w=600" alt="Natalia verde" id="gal1">
      <div class="galeria-overlay">
        <div>
          <h4>Esmeralda Real</h4>
          <p>Coronación · Italia 2025</p>
        </div>
      </div>
    </div>
    <div class="galeria-item fade-in">
      <img src="https://images.unsplash.com/photo-4?w=600" alt="Natalia roja" id="gal2">
      <div class="galeria-overlay">
        <div>
          <h4>Rubí Imperial</h4>
          <p>Gala de Representación</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- MENSAJE -->
<section class="mensaje">
  <div class="mensaje-content fade-in">
    <div class="mensaje-icon">✦</div>
    <h2>Un mensaje para <em>cada niña</em> que sueña en grande</h2>
    <p>No importa de dónde vengas. No importa cuántas veces te digan que no. Lo que importa es la fuerza con la que te levantas, la verdad con la que caminas y el amor con el que te representas.</p>
    <p>Soy prueba viva de que una chica trans de Recife puede coronarse reina del mundo. Y tú también puedes serlo. Tu corona no te la da nadie — te la forjas tú, con cada paso valiente que das.</p>
    <div class="mensaje-signature">— Natalia Marinho, Miss T Supranational 2025</div>
  </div>
</section>

<!-- CONTACTO -->
<section class="contacto" id="contacto">
  <div class="section-header fade-in">
    <div class="section-label">Capítulo VI</div>
    <h2 class="section-title">Trabajemos <em>Juntas</em></h2>
    <div class="section-divider"></div>
  </div>
  <div class="contacto-grid">
    <div class="contacto-info fade-in">
      <h3>Abierta a proyectos que celebren la diversidad, la moda y la autenticidad.</h3>
      <p>Colaboraciones, eventos, prensa, entrevistas o simplemente una conversación inspiradora. Cada mensaje es leído personalmente.</p>
      <div class="contacto-links">
        <a href="mailto:ataliafalcon@icloud.com" class="contacto-link">
          <div class="contacto-link-icon">✉</div>
          <div class="contacto-link-text">
            <strong>Email</strong>
            <span>ataliafalcon@icloud.com</span>
          </div>
        </a>
        <a href="https://www.instagram.com/nati_natalia_marinho_/" target="_blank" class="contacto-link">
          <div class="contacto-link-icon">📷</div>
          <div class="contacto-link-text">
            <strong>Instagram</strong>
            <span>@nati_natalia_marinho_</span>
          </div>
        </a>
        <a href="mailto:ataliafalcon@icloud.com" class="contacto-link">
          <div class="contacto-link-icon">🎤</div>
          <div class="contacto-link-text">
            <strong>Prensa & Media</strong>
            <span>Entrevistas y colaboraciones</span>
          </div>
        </a>
      </div>
    </div>
    <div class="contacto-form fade-in">
      <h4>Envíame un mensaje</h4>
      <form onsubmit="event.preventDefault(); alert('¡Mensaje enviado! Natalia te responderá pronto.'); this.reset();">
        <div class="form-group">
          <label>Nombre</label>
          <input type="text" required placeholder="Tu nombre completo">
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" required placeholder="tu@email.com">
        </div>
        <div class="form-group">
          <label>Asunto</label>
          <input type="text" required placeholder="¿De qué se trata?">
        </div>
        <div class="form-group">
          <label>Mensaje</label>
          <textarea required placeholder="Cuéntame tu idea..."></textarea>
        </div>
        <button type="submit" class="btn-submit">Enviar Mensaje</button>
      </form>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-logo">Natalia Marinho</div>
  <div class="footer-tagline">Miss T Supranational 2025 · Elegancia · Fuerza · Representación</div>
  <div class="footer-social">
    <a href="https://www.instagram.com/nati_natalia_marinho_/" target="_blank" title="Instagram">📷</a>
    <a href="mailto:ataliafalcon@icloud.com" title="Email">✉</a>
    <a href="#" title="TikTok">🎵</a>
    <a href="#" title="YouTube">▶</a>
  </div>
  <div class="footer-bottom">
    © 2026 Natalia Marinho — Miss T Supranational 2025 · Todos los derechos reservados
  </div>
</footer>

<script>
  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Fade in on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Close menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('open');
    });
  });

  // Language toggle
  document.querySelectorAll('.nav-lang button').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.nav-lang button').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Parallax on hero image
  window.addEventListener('scroll', () => {
    const heroImg = document.querySelector('.hero-image-wrapper');
    if (heroImg) {
      const scrolled = window.scrollY;
      heroImg.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
  });
</script>

</body>
</html>
```

## [USER] 2026-06-20 18:11

las fotos estan rotas, no uses verde, colores claros, champgne. gsap, scroll triggering, efecto flotando, muchos viausles. mejora la web no cambias

## [ASSISTANT] 2026-06-20 18:11 · Qwen3.7-Plus

```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Natalia Marinho | Miss T Supranational 2025</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root {
    --champagne: #f7e7ce;
    --champagne-light: #faf3e0;
    --champagne-dark: #e6d5b8;
    --gold: #d4af37;
    --gold-light: #f0d77b;
    --gold-dark: #b8941f;
    --cream: #faf8f3;
    --ivory: #fffef9;
    --beige: #f5f0e8;
    --charcoal: #2a2a2a;
    --dark: #1a1a1a;
    --white: #ffffff;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Montserrat', sans-serif;
    background: var(--ivory);
    color: var(--charcoal);
    overflow-x: hidden;
    line-height: 1.6;
  }

  h1, h2, h3, h4 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .serif-italic {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
  }

  /* NAV */
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 1.5rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.4s ease;
    background: transparent;
  }

  nav.scrolled {
    background: rgba(255, 254, 249, 0.98);
    backdrop-filter: blur(20px);
    padding: 1rem 3rem;
    box-shadow: 0 4px 30px rgba(0,0,0,0.08);
  }

  nav.scrolled .nav-logo { color: var(--gold-dark); }
  nav.scrolled .nav-links a { color: var(--charcoal); }

  .nav-logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    color: var(--white);
    font-weight: 700;
    letter-spacing: 0.1em;
    transition: color 0.3s;
  }

  .nav-logo span {
    color: var(--gold);
    font-weight: 400;
    font-style: italic;
  }

  .nav-links {
    display: flex;
    gap: 2.5rem;
    list-style: none;
  }

  .nav-links a {
    color: var(--white);
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    position: relative;
    transition: color 0.3s;
  }

  .nav-links a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gold);
    transition: width 0.3s;
  }

  .nav-links a:hover { color: var(--gold); }
  .nav-links a:hover::after { width: 100%; }

  .nav-lang {
    display: flex;
    gap: 0.5rem;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
  }

  .nav-lang button {
    background: transparent;
    border: 1px solid rgba(255,255,255,0.4);
    color: var(--white);
    padding: 0.3rem 0.7rem;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    transition: all 0.3s;
  }

  nav.scrolled .nav-lang button {
    border-color: rgba(0,0,0,0.2);
    color: var(--charcoal);
  }

  .nav-lang button.active,
  .nav-lang button:hover {
    background: var(--gold);
    border-color: var(--gold);
    color: var(--white);
  }

  .menu-toggle {
    display: none;
    background: transparent;
    border: none;
    color: var(--white);
    font-size: 1.5rem;
    cursor: pointer;
  }

  nav.scrolled .menu-toggle { color: var(--charcoal); }

  /* HERO */
  .hero {
    min-height: 100vh;
    background: linear-gradient(135deg, var(--dark) 0%, var(--charcoal) 50%, var(--dark) 100%);
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(247, 231, 206, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  .hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    padding: 8rem 4rem 4rem;
    max-width: 1600px;
    margin: 0 auto;
    width: 100%;
    align-items: center;
    position: relative;
    z-index: 2;
  }

  .hero-text {
    color: var(--white);
  }

  .hero-badge {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    border: 1px solid var(--gold);
    color: var(--gold);
    font-size: 0.75rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    margin-bottom: 2rem;
    font-weight: 500;
  }

  .hero-title {
    font-size: clamp(3rem, 6vw, 5.5rem);
    line-height: 1;
    margin-bottom: 1rem;
    font-weight: 900;
  }

  .hero-title .line1 {
    display: block;
    color: var(--white);
    font-weight: 400;
    font-style: italic;
    font-size: 0.5em;
    margin-bottom: 0.5rem;
  }

  .hero-title .line2 {
    display: block;
    background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 50%, var(--gold) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-title .line3 {
    display: block;
    color: var(--champagne);
    font-weight: 400;
    font-size: 0.6em;
    margin-top: 0.5rem;
    letter-spacing: 0.1em;
  }

  .hero-subtitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.3rem;
    color: rgba(255,255,255,0.7);
    font-style: italic;
    margin: 2rem 0;
    max-width: 500px;
  }

  .hero-stats {
    display: flex;
    gap: 3rem;
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(212, 175, 55, 0.3);
  }

  .stat {
    text-align: left;
  }

  .stat-number {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    color: var(--gold);
    font-weight: 700;
    line-height: 1;
  }

  .stat-label {
    font-size: 0.7rem;
    color: rgba(255,255,255,0.6);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-top: 0.5rem;
  }

  .hero-image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero-image-wrapper {
    position: relative;
    width: 100%;
    max-width: 550px;
  }

  .hero-image-wrapper::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    border: 1px solid var(--gold);
    opacity: 0.4;
    pointer-events: none;
  }

  .hero-image-wrapper img {
    width: 100%;
    height: auto;
    display: block;
    filter: drop-shadow(0 20px 60px rgba(0,0,0,0.5));
  }

  .hero-crown {
    position: absolute;
    top: -40px;
    right: 20px;
    font-size: 3rem;
    color: var(--gold);
    animation: shimmer 3s ease-in-out infinite;
  }

  @keyframes shimmer {
    0%, 100% { opacity: 0.6; transform: scale(1) rotate(0deg); }
    50% { opacity: 1; transform: scale(1.1) rotate(5deg); }
  }

  .floating-particles {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
  }

  .particle {
    position: absolute;
    background: var(--gold);
    border-radius: 50%;
    opacity: 0.3;
  }

  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    color: var(--gold);
    font-size: 0.7rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .scroll-indicator::after {
    content: '';
    width: 1px;
    height: 40px;
    background: var(--gold);
    animation: scrollBounce 2s ease-in-out infinite;
  }

  @keyframes scrollBounce {
    0%, 100% { transform: scaleY(1); opacity: 1; }
    50% { transform: scaleY(0.5); opacity: 0.5; }
  }

  /* SECTIONS GENERAL */
  section {
    padding: 8rem 4rem;
    position: relative;
  }

  .section-header {
    text-align: center;
    margin-bottom: 5rem;
  }

  .section-label {
    display: inline-block;
    font-size: 0.75rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .section-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    color: var(--charcoal);
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }

  .section-title em {
    font-style: italic;
    color: var(--gold-dark);
  }

  .section-divider {
    width: 80px;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
    margin: 0 auto;
  }

  /* HISTORIA */
  .historia {
    background: linear-gradient(180deg, var(--ivory) 0%, var(--champagne-light) 100%);
  }

  .historia-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
  }

  .historia-image {
    position: relative;
  }

  .historia-image img {
    width: 100%;
    border-radius: 4px;
    box-shadow: 0 30px 80px rgba(0,0,0,0.15);
  }

  .historia-image::after {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    border: 2px solid var(--gold);
    z-index: -1;
    opacity: 0.5;
  }

  .historia-text h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: var(--charcoal);
  }

  .historia-text p {
    font-size: 1.05rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: #555;
  }

  .quote-box {
    background: linear-gradient(135deg, var(--champagne) 0%, var(--champagne-dark) 100%);
    color: var(--charcoal);
    padding: 2.5rem 3rem;
    margin: 2.5rem 0;
    border-left: 4px solid var(--gold);
    position: relative;
    box-shadow: 0 10px 40px rgba(0,0,0,0.08);
  }

  .quote-box::before {
    content: '"';
    position: absolute;
    top: -20px;
    left: 20px;
    font-family: 'Playfair Display', serif;
    font-size: 6rem;
    color: var(--gold);
    opacity: 0.5;
    line-height: 1;
  }

  .quote-box p {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem;
    font-style: italic;
    color: var(--charcoal);
    margin: 0;
    position: relative;
    z-index: 2;
  }

  .quote-author {
    margin-top: 1rem;
    font-size: 0.85rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-dark);
    font-weight: 600;
  }

  /* HACER */
  .hacer {
    background: linear-gradient(135deg, var(--charcoal) 0%, var(--dark) 100%);
    color: var(--white);
    position: relative;
    overflow: hidden;
  }

  .hacer::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }

  .hacer .section-title { color: var(--white); }
  .hacer .section-title em { color: var(--gold); }

  .hacer-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 1300px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  .hacer-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(212, 175, 55, 0.2);
    padding: 3rem 2rem;
    text-align: center;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
  }

  .hacer-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.4s;
  }

  .hacer-card:hover {
    background: rgba(212, 175, 55, 0.08);
    border-color: var(--gold);
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  }

  .hacer-card:hover::before {
    opacity: 1;
  }

  .hacer-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    display: block;
    position: relative;
    z-index: 2;
  }

  .hacer-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--gold);
    position: relative;
    z-index: 2;
  }

  .hacer-card p {
    color: rgba(255,255,255,0.7);
    line-height: 1.7;
    font-size: 0.95rem;
    position: relative;
    z-index: 2;
  }

  /* CAMINO TIMELINE */
  .camino {
    background: linear-gradient(180deg, var(--champagne-light) 0%, var(--beige) 100%);
  }

  .timeline {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, transparent, var(--gold), transparent);
    transform: translateX(-50%);
  }

  .timeline-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-bottom: 4rem;
    position: relative;
  }

  .timeline-item:nth-child(even) .timeline-content {
    order: 2;
  }

  .timeline-item:nth-child(even) .timeline-visual {
    order: 1;
    text-align: right;
  }

  .timeline-dot {
    position: absolute;
    left: 50%;
    top: 2rem;
    width: 20px;
    height: 20px;
    background: var(--gold);
    border: 4px solid var(--beige);
    border-radius: 50%;
    transform: translateX(-50%);
    z-index: 2;
    box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.3);
  }

  .timeline-year {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    color: var(--gold-dark);
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  .timeline-title {
    font-size: 1.5rem;
    color: var(--charcoal);
    margin-bottom: 1rem;
  }

  .timeline-content p {
    color: #555;
    line-height: 1.7;
  }

  .timeline-visual {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .timeline-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--champagne) 0%, var(--champagne-dark) 100%);
    color: var(--gold-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    border-radius: 50%;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }

  /* LOGROS */
  .logros {
    background: linear-gradient(135deg, var(--gold-dark) 0%, var(--gold) 50%, var(--gold-light) 100%);
    color: var(--white);
    position: relative;
    overflow: hidden;
  }

  .logros::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
  }

  .logros .section-title { color: var(--white); }
  .logros .section-title em { color: var(--champagne); }

  .logros-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    max-width: 1300px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  .logro-card {
    text-align: center;
    padding: 2rem 1rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    transition: all 0.4s;
  }

  .logro-card:hover {
    background: rgba(255,255,255,0.2);
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.2);
  }

  .logro-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .logro-card h4 {
    color: var(--champagne);
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .logro-card p {
    font-size: 0.85rem;
    color: rgba(255,255,255,0.9);
    line-height: 1.6;
  }

  /* GALERIA */
  .galeria {
    background: var(--ivory);
  }

  .galeria-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .galeria-item {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    background: var(--champagne-light);
    aspect-ratio: 3/4;
    border-radius: 8px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
  }

  .galeria-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s ease;
  }

  .galeria-item:hover img {
    transform: scale(1.1);
  }

  .galeria-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(26, 26, 26, 0.9) 0%, transparent 60%);
    display: flex;
    align-items: flex-end;
    padding: 2.5rem;
    opacity: 0;
    transition: opacity 0.4s;
  }

  .galeria-item:hover .galeria-overlay {
    opacity: 1;
  }

  .galeria-overlay h4 {
    color: var(--white);
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  .galeria-overlay p {
    color: var(--gold);
    font-size: 0.85rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  /* MENSAJE */
  .mensaje {
    background: linear-gradient(135deg, var(--charcoal) 0%, var(--dark) 100%);
    color: var(--white);
    text-align: center;
    padding: 10rem 4rem;
    position: relative;
    overflow: hidden;
  }

  .mensaje::before,
  .mensaje::after {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%);
    opacity: 0.3;
  }

  .mensaje::before { top: -300px; left: -300px; }
  .mensaje::after { bottom: -300px; right: -300px; }

  .mensaje-content {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  .mensaje-icon {
    font-size: 4rem;
    color: var(--gold);
    margin-bottom: 2rem;
  }

  .mensaje h2 {
    font-size: clamp(2rem, 4vw, 3.5rem);
    margin-bottom: 2rem;
    line-height: 1.2;
  }

  .mensaje h2 em {
    color: var(--gold);
    font-style: italic;
  }

  .mensaje p {
    font-size: 1.15rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.8);
    margin-bottom: 1.5rem;
  }

  .mensaje-signature {
    margin-top: 3rem;
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 1.5rem;
    color: var(--gold);
  }

  /* CONTACTO */
  .contacto {
    background: linear-gradient(180deg, var(--beige) 0%, var(--champagne-light) 100%);
  }

  .contacto-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
  }

  .contacto-info h3 {
    font-size: 2.5rem;
    color: var(--charcoal);
    margin-bottom: 1.5rem;
  }

  .contacto-info p {
    font-size: 1.05rem;
    color: #555;
    line-height: 1.8;
    margin-bottom: 2rem;
  }

  .contacto-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .contacto-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.2rem 1.5rem;
    background: var(--white);
    border: 1px solid rgba(0,0,0,0.08);
    text-decoration: none;
    color: var(--charcoal);
    transition: all 0.3s;
    box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  }

  .contacto-link:hover {
    border-color: var(--gold);
    transform: translateX(10px);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
  }

  .contacto-link-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    flex-shrink: 0;
  }

  .contacto-link-text {
    flex: 1;
  }

  .contacto-link-text strong {
    display: block;
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-dark);
    margin-bottom: 0.3rem;
    font-weight: 600;
  }

  .contacto-link-text span {
    font-size: 0.95rem;
    color: #444;
  }

  .contacto-form {
    background: var(--white);
    padding: 3rem;
    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
    border-radius: 8px;
  }

  .contacto-form h4 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: var(--charcoal);
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-group label {
    display: block;
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--gold-dark);
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid rgba(0,0,0,0.1);
    font-family: 'Montserrat', sans-serif;
    font-size: 0.95rem;
    transition: all 0.3s;
    background: var(--ivory);
    border-radius: 4px;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--gold);
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
  }

  .form-group textarea {
    resize: vertical;
    min-height: 120px;
  }

  .btn-submit {
    width: 100%;
    padding: 1.2rem;
    background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
    color: var(--white);
    border: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.85rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 600;
    border-radius: 4px;
  }

  .btn-submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
  }

  /* FOOTER */
  footer {
    background: var(--dark);
    color: var(--white);
    padding: 4rem 4rem 2rem;
    text-align: center;
  }

  .footer-logo {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    color: var(--gold);
    margin-bottom: 1rem;
  }

  .footer-tagline {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    color: rgba(255,255,255,0.6);
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }

  .footer-social {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .footer-social a {
    width: 45px;
    height: 45px;
    border: 1px solid rgba(212, 175, 55, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gold);
    text-decoration: none;
    transition: all 0.3s;
    font-size: 1.1rem;
  }

  .footer-social a:hover {
    background: var(--gold);
    color: var(--dark);
    transform: translateY(-3px);
  }

  .footer-bottom {
    padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.1);
    font-size: 0.8rem;
    color: rgba(255,255,255,0.4);
    letter-spacing: 0.1em;
  }

  /* ANIMATIONS */
  .fade-in {
    opacity: 0;
    transform: translateY(30px);
  }

  /* RESPONSIVE */
  @media (max-width: 1024px) {
    section { padding: 5rem 2rem; }
    .hero-content { grid-template-columns: 1fr; padding: 7rem 2rem 4rem; }
    .hero-image { order: -1; }
    .hero-image-wrapper { max-width: 400px; margin: 0 auto; }
    .historia-content { grid-template-columns: 1fr; gap: 3rem; }
    .hacer-grid { grid-template-columns: 1fr; }
    .logros-grid { grid-template-columns: repeat(2, 1fr); }
    .contacto-grid { grid-template-columns: 1fr; }
    .galeria-grid { grid-template-columns: 1fr; }
    .timeline::before { left: 30px; }
    .timeline-item { grid-template-columns: 1fr; gap: 1rem; padding-left: 70px; }
    .timeline-item:nth-child(even) .timeline-content,
    .timeline-item:nth-child(even) .timeline-visual { order: unset; text-align: left; }
    .timeline-dot { left: 30px; }
  }

  @media (max-width: 768px) {
    nav { padding: 1rem 1.5rem; }
    .nav-links { display: none; }
    .menu-toggle { display: block; }
    .nav-links.open {
      display: flex;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: rgba(255,254,249,0.98);
      flex-direction: column;
      padding: 2rem;
      gap: 1.5rem;
    }
    .hero-stats { gap: 1.5rem; flex-wrap: wrap; }
    .logros-grid { grid-template-columns: 1fr; }
    .mensaje { padding: 6rem 2rem; }
    .contacto-form { padding: 2rem; }
  }
</style>
</head>
<body>

<!-- NAV -->
<nav id="navbar">
  <div class="nav-logo">NATALIA <span>Marinho</span></div>
  <ul class="nav-links" id="navLinks">
    <li><a href="#historia">Historia</a></li>
    <li><a href="#hacer">Lo que hago</a></li>
    <li><a href="#camino">Camino</a></li>
    <li><a href="#logros">Logros</a></li>
    <li><a href="#galeria">Galería</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ul>
  <div class="nav-lang">
    <button class="active">ES</button>
    <button>PT</button>
    <button>CA</button>
    <button>FR</button>
    <button>IT</button>
    <button>EN</button>
    <button>DE</button>
  </div>
  <button class="menu-toggle" onclick="document.getElementById('navLinks').classList.toggle('open')">☰</button>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="floating-particles" id="particles"></div>
  <div class="hero-content">
    <div class="hero-text">
      <div class="hero-badge">Miss T Supranational 2025</div>
      <h1 class="hero-title">
        <span class="line1">Natalia</span>
        <span class="line2">Marinho</span>
        <span class="line3">Elegancia · Fuerza · Representación</span>
      </h1>
      <p class="hero-subtitle">De Recife al mundo. Una reina que no nació en un palacio, sino en las calles vibrantes del nordeste brasileño, donde los sueños son más grandes que las ciudades que los albergan.</p>
      <div class="hero-stats">
        <div class="stat">
          <div class="stat-number">2025</div>
          <div class="stat-label">Coronación</div>
        </div>
        <div class="stat">
          <div class="stat-number">18</div>
          <div class="stat-label">Años al cruzar el Atlántico</div>
        </div>
        <div class="stat">
          <div class="stat-number">ES</div>
          <div class="stat-label">Española de Corazón</div>
        </div>
        <div class="stat">
          <div class="stat-number">∞</div>
          <div class="stat-label">Pasión</div>
        </div>
      </div>
    </div>
    <div class="hero-image">
      <div class="hero-image-wrapper">
        <div class="hero-crown">👑</div>
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80" alt="Natalia Marinho">
      </div>
    </div>
  </div>
  <div class="scroll-indicator">Scroll</div>
</section>

<!-- HISTORIA -->
<section class="historia" id="historia">
  <div class="section-header fade-in">
    <div class="section-label">Capítulo I</div>
    <h2 class="section-title">Mi <em>Historia</em></h2>
    <div class="section-divider"></div>
  </div>
  <div class="historia-content">
    <div class="historia-image fade-in">
      <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80" alt="Natalia">
    </div>
    <div class="historia-text fade-in">
      <h3>De Recife al Mundo</h3>
      <p>Natalia Marinho no nació en un palacio. Nació en <strong>Recife</strong>, una ciudad vibrante del nordeste brasileño donde los sueños a veces parecen demasiado grandes para las calles que los albergan. Creció entre el ritmo del frevo, el color del mar y la pasión por la moda que latía en cada rincón de su infancia.</p>
      <p>A los 18 años, con una maleta y una determinación inquebrantable, cruzó el Atlántico. España no le dio nada fácil — pero Natalia no vino a buscar facilidades. <strong>Vino a construir.</strong></p>
      <div class="quote-box">
        <p>No me coronaron por lo que parezco. Me coronaron por lo que represento.</p>
        <div class="quote-author">— Natalia Marinho</div>
      </div>
      <p>Hoy, como <strong>Miss T Supranational 2025</strong>, representa algo más grande que ella misma: la posibilidad de que una chica trans de Recife pueda coronarse reina del mundo. Su historia no es solo la de una mujer — es la de un movimiento.</p>
    </div>
  </div>
</section>

<!-- HACER -->
<section class="hacer" id="hacer">
  <div class="section-header fade-in">
    <div class="section-label">Capítulo II</div>
    <h2 class="section-title">Lo que <em>hago</em></h2>
    <p style="color: rgba(255,255,255,0.7); margin-top: 1rem; font-size: 1.1rem;">Moda, Eventos & Representación</p>
    <div class="section-divider"></div>
  </div>
  <div class="hacer-grid">
    <div class="hacer-card fade-in">
      <span class="hacer-icon">👗</span>
      <h3>Diseño de Moda</h3>
      <p>Colecciones que fusionan la elegancia clásica con la identidad contemporánea. Cada pieza cuenta una historia de resistencia, belleza y autenticidad.</p>
    </div>
    <div class="hacer-card fade-in">
      <span class="hacer-icon">✨</span>
      <h3>Eventos & Certámenes</h3>
      <p>Presencia en eventos de moda y galas internacionales. Una fuerza natural que ilumina cada espacio con su carisma y presencia escénica.</p>
    </div>
    <div class="hacer-card fade-in">
      <span class="hacer-icon">💎</span>
      <h3>Representación</h3>
      <p>Voz del colectivo trans. Embajadora de diversidad, inclusión y empoderamiento. Su plataforma amplifica las voces que necesitan ser escuchadas.</p>
    </div>
  </div>
</section>

<!-- CAMINO -->
<section class="camino" id="camino">
  <div class="section-header fade-in">
    <div class="section-label">Capítulo III</div>
    <h2 class="section-title">Mi <em>Camino</em></h2>
    <div class="section-divider"></div>
  </div>
  <div class="timeline">
    <div class="timeline-item fade-in">
      <div class="timeline-content">
        <div class="timeline-year">Recife</div>
        <h3 class="timeline-title">Nace en Recife, Brasil</h3>
        <p>Creció con pasión por la moda y el arte, soñando con un mundo más grande. Las calles de Recife forjaron su carácter y su visión del mundo.</p>
      </div>
      <div class="timeline-visual">
        <div class="timeline-icon">🌴</div>
      </div>
      <div class="timeline-dot"></div>
    </div>
    <div class="timeline-item fade-in">
      <div class="timeline-content">
        <div class="timeline-year">18</div>
        <h3 class="timeline-title">La Gran Decisión</h3>
        <p>Cruza el Atlántico rumbo a España. Solo con su talento y determinación. Un acto de valentía que definiría el resto de su vida.</p>
      </div>
      <div class="timeline-visual">
        <div class="timeline-icon">✈️</div>
      </div>
      <div class="timeline-dot"></div>
    </div>
    <div class="timeline-item fade-in">
      <div class="timeline-content">
        <div class="timeline-year"></div>
        <h3 class="timeline-title">Adaptación & Resiliencia</h3>
        <p>Cada obstáculo se convirtió en escalón. Cada rechazo en motivación. La adaptación no fue un destino, fue una forma de vida.</p>
      </div>
      <div class="timeline-visual">
        <div class="timeline-icon">💪</div>
      </div>
      <div class="timeline-dot"></div>
    </div>
    <div class="timeline-item fade-in">
      <div class="timeline-content">
        <div class="timeline-year">ES</div>
        <h3 class="timeline-title">Hogar — Española de Corazón</h3>
        <p>Obtiene la nacionalidad. España deja de ser tierra de paso para convertirse en hogar. Un nuevo capítulo de pertenencia y orgullo.</p>
      </div>
      <div class="timeline-visual">
        <div class="timeline-icon">🏡</div>
      </div>
      <div class="timeline-dot"></div>
    </div>
    <div class="timeline-item fade-in">
      <div class="timeline-content">
        <div class="timeline-year">2025</div>
        <h3 class="timeline-title">La Coronación</h3>
        <p>Coronada Miss T Supranational en Italia. Los sueños se hacen realidad. El mundo reconoce su fuerza, su belleza y su mensaje.</p>
      </div>
      <div class="timeline-visual">
        <div class="timeline-icon">👑</div>
      </div>
      <div class="timeline-dot"></div>
    </div>
  </div>
</section>

<!-- LOGROS -->
<section class="logros" id="logros">
  <div class="section-header fade-in">
    <div class="section-label">Capítulo IV</div>
    <h2 class="section-title">Logros & <em>Reconocimientos</em></h2>
    <div class="section-divider"></div>
  </div>
  <div class="logros-grid">
    <div class="logro-card fade-in">
      <div class="logro-icon">👑</div>
      <h4>Miss T Supranational</h4>
      <p>Coronada en Italia 2025, representando la excelencia y la diversidad trans a nivel mundial.</p>
    </div>
    <div class="logro-card fade-in">
      <div class="logro-icon">🌍</div>
      <h4>Embajadora Global</h4>
      <p>Voz oficial del colectivo trans en foros internacionales de diversidad e inclusión.</p>
    </div>
    <div class="logro-card fade-in">
      <div class="logro-icon">🎨</div>
      <h4>Diseñadora Emergente</h4>
      <p>Colecciones presentadas en pasarelas de moda que fusionan identidad y elegancia.</p>
    </div>
    <div class="logro-card fade-in">
      <div class="logro-icon">🏆</div>
      <h4>Ícono de Representación</h4>
      <p>Reconocida por medios internacionales como referente de empoderamiento y autenticidad.</p>
    </div>
  </div>
</section>

<!-- GALERIA -->
<section class="galeria" id="galeria">
  <div class="section-header fade-in">
    <div class="section-label">Capítulo V</div>
    <h2 class="section-title">Galería <em>Real</em></h2>
    <div class="section-divider"></div>
  </div>
  <div class="galeria-grid">
    <div class="galeria-item fade-in">
      <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80" alt="Natalia elegante">
      <div class="galeria-overlay">
        <div>
          <h4>Elegancia Real</h4>
          <p>Coronación · Italia 2025</p>
        </div>
      </div>
    </div>
    <div class="galeria-item fade-in">
      <img src="https://images.unsplash.com/photo-1529139574466-a302c27e3844?w=800&q=80" alt="Natalia glamour">
      <div class="galeria-overlay">
        <div>
          <h4>Glamour Imperial</h4>
          <p>Gala de Representación</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- MENSAJE -->
<section class="mensaje">
  <div class="mensaje-content fade-in">
    <div class="mensaje-icon">✦</div>
    <h2>Un mensaje para <em>cada niña</em> que sueña en grande</h2>
    <p>No importa de dónde vengas. No importa cuántas veces te digan que no. Lo que importa es la fuerza con la que te levantas, la verdad con la que caminas y el amor con el que te representas.</p>
    <p>Soy prueba viva de que una chica trans de Recife puede coronarse reina del mundo. Y tú también puedes serlo. Tu corona no te la da nadie — te la forjas tú, con cada paso valiente que das.</p>
    <div class="mensaje-signature">— Natalia Marinho, Miss T Supranational 2025</div>
  </div>
</section>

<!-- CONTACTO -->
<section class="contacto" id="contacto">
  <div class="section-header fade-in">
    <div class="section-label">Capítulo VI</div>
    <h2 class="section-title">Trabajemos <em>Juntas</em></h2>
    <div class="section-divider"></div>
  </div>
  <div class="contacto-grid">
    <div class="contacto-info fade-in">
      <h3>Abierta a proyectos que celebren la diversidad, la moda y la autenticidad.</h3>
      <p>Colaboraciones, eventos, prensa, entrevistas o simplemente una conversación inspiradora. Cada mensaje es leído personalmente.</p>
      <div class="contacto-links">
        <a href="mailto:ataliafalcon@icloud.com" class="contacto-link">
          <div class="contacto-link-icon">✉</div>
          <div class="contacto-link-text">
            <strong>Email</strong>
            <span>ataliafalcon@icloud.com</span>
          </div>
        </a>
        <a href="https://www.instagram.com/nati_natalia_marinho_/" target="_blank" class="contacto-link">
          <div class="contacto-link-icon">📷</div>
          <div class="contacto-link-text">
            <strong>Instagram</strong>
            <span>@nati_natalia_marinho_</span>
          </div>
        </a>
        <a href="mailto:ataliafalcon@icloud.com" class="contacto-link">
          <div class="contacto-link-icon">🎤</div>
          <div class="contacto-link-text">
            <strong>Prensa & Media</strong>
            <span>Entrevistas y colaboraciones</span>
          </div>
        </a>
      </div>
    </div>
    <div class="contacto-form fade-in">
      <h4>Envíame un mensaje</h4>
      <form onsubmit="event.preventDefault(); alert('¡Mensaje enviado! Natalia te responderá pronto.'); this.reset();">
        <div class="form-group">
          <label>Nombre</label>
          <input type="text" required placeholder="Tu nombre completo">
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" required placeholder="tu@email.com">
        </div>
        <div class="form-group">
          <label>Asunto</label>
          <input type="text" required placeholder="¿De qué se trata?">
        </div>
        <div class="form-group">
          <label>Mensaje</label>
          <textarea required placeholder="Cuéntame tu idea..."></textarea>
        </div>
        <button type="submit" class="btn-submit">Enviar Mensaje</button>
      </form>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-logo">Natalia Marinho</div>
  <div class="footer-tagline">Miss T Supranational 2025 · Elegancia · Fuerza · Representación</div>
  <div class="footer-social">
    <a href="https://www.instagram.com/nati_natalia_marinho_/" target="_blank" title="Instagram">📷</a>
    <a href="mailto:ataliafalcon@icloud.com" title="Email">✉</a>
    <a href="#" title="TikTok">🎵</a>
    <a href="#" title="YouTube">▶</a>
  </div>
  <div class="footer-bottom">
    © 2026 Natalia Marinho — Miss T Supranational 2025 · Todos los derechos reservados
  </div>
</footer>

<script>
  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Create floating particles
  const particlesContainer = document.getElementById('particles');
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.width = Math.random() * 6 + 2 + 'px';
    particle.style.height = particle.style.width;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.opacity = Math.random() * 0.5 + 0.1;
    particlesContainer.appendChild(particle);
    
    gsap.to(particle, {
      y: -100,
      x: Math.random() * 100 - 50,
      duration: Math.random() * 10 + 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: Math.random() * 5
    });
  }

  // Navbar scroll effect
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: { className: 'scrolled', targets: 'nav' }
  });

  // Fade in animations with ScrollTrigger
  gsap.utils.toArray('.fade-in').forEach((element, i) => {
    gsap.fromTo(element, 
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        delay: i * 0.1
      }
    );
  });

  // Hero image floating effect
  gsap.to(".hero-image-wrapper", {
    y: -20,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  // Timeline items animation
  gsap.utils.toArray('.timeline-item').forEach((item, i) => {
    gsap.fromTo(item,
      {
        opacity: 0,
        x: i % 2 === 0 ? -50 : 50
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Cards stagger animation
  gsap.utils.toArray('.hacer-card').forEach((card, i) => {
    gsap.fromTo(card,
      {
        opacity: 0,
        y: 60,
        rotationX: 15
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        delay: i * 0.15
      }
    );
  });

  // Logros cards animation
  gsap.utils.toArray('.logro-card').forEach((card, i) => {
    gsap.fromTo(card,
      {
        opacity: 0,
        scale: 0.8,
        rotation: -5
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        delay: i * 0.1
      }
    );
  });

  // Gallery items parallax
  gsap.utils.toArray('.galeria-item').forEach((item, i) => {
    gsap.fromTo(item,
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        delay: i * 0.2
      }
    );
  });

  // Close menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('open');
    });
  });

  // Language toggle
  document.querySelectorAll('.nav-lang button').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.nav-lang button').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: target, offsetY: 80 },
          ease: "power3.inOut"
        });
      }
    });
  });
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js"></script>
</body>
</html>
```
