// Minimal bootstrap for the site (vanilla TS). Keeps the loader, removes boot splash,
// and mounts a basic responsive shell so the site isn't left showing only "NORTHSTAR / DIGITAL".

import "./styles.css";

function removeBoot() {
  const boot = document.getElementById("boot");
  if (!boot) return;
  boot.classList.add("boot--hide");
  setTimeout(() => boot.remove(), 600); // matches CSS transition
}

function mountLoader() {
  const tpl = document.getElementById("aqua-loader-template") as HTMLTemplateElement | null;
  if (!tpl) return null;
  const el = tpl.content.firstElementChild!.cloneNode(true) as HTMLElement;
  document.body.appendChild(el);
  return el;
}

function removeLoader(loaderEl: HTMLElement | null) {
  if (!loaderEl) return;
  loaderEl.classList.add("aqua-loader--hide");
  setTimeout(() => loaderEl.remove(), 800);
}

function renderApp() {
  const app = document.getElementById("app")!;
  app.innerHTML = `
    <header class="ns-header">
      <div class="ns-container">
        <h1 class="ns-brand">Northstar Digital</h1>
        <nav class="ns-nav">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>

    <main class="ns-main">
      <section id="hero" class="ns-hero">
        <div class="ns-container">
          <h2 class="ns-hero-title">Premium web design and development, built around your business goals.</h2>
          <p class="ns-hero-lead">A curated selection of sections. Preview your structure. Send a project brief.</p>
        </div>
      </section>

      <section id="services" class="ns-section">
        <div class="ns-container">
          <h3>Services</h3>
          <div class="ns-grid">
            <div class="ns-card"><h4>Design</h4><p>Brand & visual design</p></div>
            <div class="ns-card"><h4>Development</h4><p>Front-end & CMS</p></div>
            <div class="ns-card"><h4>Strategy</h4><p>Product & conversion</p></div>
          </div>
        </div>
      </section>

      <section id="work" class="ns-section ns--muted">
        <div class="ns-container">
          <h3>Selected work</h3>
          <p>Portfolio placeholders — replace with real case studies / images</p>
        </div>
      </section>

      <section id="contact" class="ns-section">
        <div class="ns-container">
          <h3>Get a proposal</h3>
          <p>Contact form placeholder. Integration with email / backend not included.</p>
        </div>
      </section>
    </main>

    <footer class="ns-footer">
      <div class="ns-container">© ${new Date().getFullYear()} Northstar Digital</div>
    </footer>
  `;
}

async function bootstrap() {
  removeBoot();
  const loader = mountLoader();
  // simulate page assets loading; in your real app replace with actual data loading
  await new Promise((r) => setTimeout(r, 600)); // keep loader for brief moment
  renderApp();
  removeLoader(loader);
}

document.addEventListener("DOMContentLoaded", () => {
  bootstrap().catch((err) => {
    console.error("Bootstrap failed:", err);
    const boot = document.getElementById("boot");
    if (boot) boot.remove();
  });
});
