// Injecte le header et le footer communs dans chaque page.
// L'attribut data-active sur <body> détermine le lien actif du menu.

function renderHeader(){
  const active = document.body.getAttribute('data-active') || '';
  const link = (href, label, key) => `<a href="${href}" class="${active===key?'active':''}">${label}</a>`;
  return `
  <header>
    <div class="nav">
      <a href="index.html" class="logo">VCI<span>.</span></a>
      <nav class="nav-links">
        ${link('index.html','Accueil','accueil')}
        ${link('a-propos.html','À propos','apropos')}
        ${link('boutique.html','Boutique','boutique')}
        ${link('services.html','Services','services')}
        ${link('revendeurs.html','Revendeurs','revendeurs')}
        ${link('blog.html','Blog','blog')}
        ${link('contact.html','Contact','contact')}
        <a href="contact.html" class="nav-cta">Demander un devis</a>
      </nav>
      <a href="contact.html" class="nav-toggle">Devis</a>
    </div>
  </header>`;
}

function renderFooter(){
  return `
  <footer>
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo">VCI<span>.</span></div>
          <p>Velchim Ivoire — chimie industrielle, détergents et cosmétiques fabriqués à Abidjan depuis 2019. Une entreprise KOJEMICO HOLDING.</p>
        </div>
        <div class="footer-col">
          <span class="mono">Boutique</span>
          <a href="boutique.html?cat=detergents">Détergents</a>
          <a href="boutique.html?cat=cosmetiques">Cosmétiques</a>
          <a href="boutique.html">Tout le catalogue</a>
        </div>
        <div class="footer-col">
          <span class="mono">Entreprise</span>
          <a href="a-propos.html">À propos</a>
          <a href="services.html">Nos services</a>
          <a href="revendeurs.html">Devenir revendeur</a>
          <a href="blog.html">Blog & conseils</a>
        </div>
        <div class="footer-col">
          <span class="mono">Assistance</span>
          <a href="contact.html">Contact</a>
          <a href="contact.html#faq">FAQ</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 VCI — Velchim Ivoire. Tous droits réservés.</span>
        <span>Abidjan, Côte d'Ivoire</span>
      </div>
    </div>
  </footer>`;
}

document.addEventListener('DOMContentLoaded', function(){
  const h = document.getElementById('site-header');
  const f = document.getElementById('site-footer');
  if(h) h.outerHTML = renderHeader();
  if(f) f.outerHTML = renderFooter();
});
