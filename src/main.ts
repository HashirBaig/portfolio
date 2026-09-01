import './styles.css';
import heroVisual from './assets/hero-visual.png';
import geoProject from './assets/project-geo.png';
import aiProject from './assets/project-ai.png';
import cicdProject from './assets/project-cicd.png';

type NavItem = { label: string; icon: string; target: string };
type Expertise = { title: string; body: string; icon: string; tone: string };
type Project = { title: string; description: string; image: string; tags: string[] };

const navItems: NavItem[] = [
  { label: 'Home', icon: '⌂', target: 'home' },
  { label: 'About', icon: '♙', target: 'about' },
  { label: 'Expertise', icon: '☆', target: 'expertise' },
  { label: 'Projects', icon: '▣', target: 'projects' },
  { label: 'Research', icon: '⚗', target: 'research' },
  { label: 'Skills', icon: '</>', target: 'skills' },
  { label: 'Experience', icon: '▤', target: 'experience' },
  { label: 'Contact', icon: '✉', target: 'contact' },
];

const expertise: Expertise[] = [
  {
    title: 'Fullstack Web Development',
    body: 'Building robust and scalable web applications using modern technologies for both frontend and backend.',
    icon: '</>',
    tone: 'green',
  },
  {
    title: 'Geospatial Software Development',
    body: 'Developing geospatial applications, interactive maps and spatial data processing solutions.',
    icon: '◎',
    tone: 'blue',
  },
  {
    title: 'Data Analysis & Visualization',
    body: 'Extracting insights from data and creating meaningful visualizations for better decision-making.',
    icon: '▥',
    tone: 'purple',
  },
  {
    title: 'AI Engineering',
    body: 'Designing and developing deep learning models and AI-powered solutions for real-world problems.',
    icon: '◉',
    tone: 'orange',
  },
  {
    title: 'CI/CD & DevOps',
    body: 'Automating workflows and deployments using CI/CD pipelines for efficient and reliable delivery.',
    icon: '∞',
    tone: 'cyan',
  },
];

const projects: Project[] = [
  {
    title: 'Geospatial Web Platform',
    description: 'A fullstack web application for visualizing, analyzing and managing geospatial data with interactive maps.',
    image: geoProject,
    tags: ['React', 'Node.js', 'PostGIS', 'Leaflet'],
  },
  {
    title: 'Deep Learning for Land Use Mapping',
    description: 'Designed and trained a deep learning model for semantic segmentation of satellite imagery for land use classification.',
    image: aiProject,
    tags: ['Python', 'PyTorch', 'U-Net', 'GDAL'],
  },
  {
    title: 'CI/CD Pipeline Automation',
    description: 'Automated testing, building and deployment pipeline for a fullstack application using modern DevOps tools.',
    image: cicdProject,
    tags: ['GitHub Actions', 'Docker', 'Nginx', 'Linux'],
  },
];

const techGroups = [
  { name: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'] },
  { name: 'Backend', items: ['Node.js', 'Express.js', 'Python', 'PostgreSQL'] },
  { name: 'Geospatial', items: ['QGIS', 'GeoServer', 'PostGIS', 'GDAL'] },
  { name: 'AI / Data', items: ['PyTorch', 'TensorFlow', 'NumPy', 'Pandas'] },
  { name: 'DevOps', items: ['Docker', 'GitHub Actions', 'Nginx', 'Linux'] },
];

const iconSvg = (name: 'download' | 'arrow' | 'mail' | 'pin' | 'code' | 'moon' | 'menu' | 'close') => {
  const icons = {
    download: '<path d="M12 3v11m0 0 4-4m-4 4-4-4M5 18v2h14v-2"/>',
    arrow: '<path d="M5 12h14m-5-5 5 5-5 5"/>',
    mail: '<path d="M3 6h18v12H3z"/><path d="m3 7 9 6 9-6"/>',
    pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    code: '<path d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-10-4 14"/>',
    moon: '<path d="M20 15.5A8 8 0 0 1 8.5 4 8 8 0 1 0 20 15.5Z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
  };
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
};

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('App root not found');

app.innerHTML = `
  <div class="page-shell">
    <button class="mobile-menu-button" type="button" aria-label="Open navigation">${iconSvg('menu')}</button>
    <aside class="sidebar" aria-label="Primary navigation">
      <div>
        <div class="brand-mark">${iconSvg('code')}</div>
        <h1>Hashir Baig</h1>
        <p>Software Engineer |<br/>GeoAI Developer</p>
      </div>
      <nav>
        ${navItems.map((item, i) => `
          <a class="nav-link ${i === 0 ? 'active' : ''}" href="#${item.target}">
            <span class="nav-icon">${item.icon}</span>${item.label}
          </a>
        `).join('')}
      </nav>
      <div class="socials" aria-label="Social links">
        <a href="#" aria-label="GitHub">GH</a>
        <a href="#" aria-label="LinkedIn">in</a>
        <a href="mailto:hashir.baig@example.com" aria-label="Email">@</a>
      </div>
    </aside>

    <main class="main-panel">
      <section class="hero" id="home">
        <div class="top-actions">
          <button class="btn btn-ghost" data-download>${iconSvg('download')} Download CV ${iconSvg('arrow')}</button>
          <button class="icon-button" data-theme-toggle aria-label="Toggle theme">${iconSvg('moon')}</button>
        </div>
        <div class="hero-grid">
          <div class="hero-copy">
            <h2>Building intelligent,<br/>scalable and impactful<br/><span>software solutions.</span></h2>
            <p>Fullstack Developer with a strong focus on geospatial applications, data analysis and AI. I enjoy turning complex problems into simple, efficient and user-friendly solutions.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="#projects">View Projects ${iconSvg('arrow')}</a>
              <a class="btn btn-ghost" href="#contact">Contact Me ${iconSvg('mail')}</a>
            </div>
          </div>
          <div class="hero-art" aria-label="Profile and role highlights">
            <img src="${heroVisual}" alt="Professional portrait with Geo Developer, AI Researcher and Problem Solver highlights" />
          </div>
        </div>
      </section>

      <section class="content-section" id="expertise">
        <div class="section-heading"><h3>My <span>Expertise</span></h3></div>
        <div class="expertise-grid">
          ${expertise.map(item => `
            <article class="expertise-card tone-${item.tone}">
              <div class="expertise-icon">${item.icon}</div>
              <h4>${item.title}</h4>
              <p>${item.body}</p>
            </article>
          `).join('')}
        </div>
      </section>

      <section class="content-section" id="projects">
        <div class="section-heading row"><h3>Featured <span>Projects</span></h3><a href="#projects">View all projects ${iconSvg('arrow')}</a></div>
        <div class="projects-grid">
          ${projects.map(project => `
            <article class="project-card">
              <img src="${project.image}" alt="${project.title} preview" />
              <div class="project-body">
                <h4>${project.title}</h4>
                <p>${project.description}</p>
                <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
                <a class="project-link" href="#">View Project ${iconSvg('arrow')}</a>
              </div>
            </article>
          `).join('')}
        </div>
      </section>

      <section class="content-section tech-section" id="skills">
        <div class="section-heading"><h3>Tech <span>Stack</span></h3></div>
        <div class="tech-grid">
          ${techGroups.map(group => `
            <div class="tech-group">
              <h4>${group.name}</h4>
              <div class="tech-items">
                ${group.items.map((item, index) => `<div class="tech-item"><div class="tech-logo">${['✣','N','≈','T','⬢','EX','Py','PG','Q','G','PS','GD','◌','TF','Nu','Pd','◆','GA','N','L'][techGroups.flatMap(g=>g.items).indexOf(item)] ?? String(index + 1)}</div><span>${item}</span></div>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="about-contact-wrap" id="about">
        <div class="about-card" id="experience">
          <div class="section-heading"><h3>About <span>Me</span></h3></div>
          <p>I am a Software Engineer and GeoAI enthusiast with a background in geospatial software development, data analysis and deep learning. I love building solutions that combine spatial data and AI to solve real-world challenges.</p>
          <div class="meta-row">
            <div><span class="meta-icon">${iconSvg('pin')}</span><small>Location</small><strong>Netherlands</strong></div>
            <div><span class="meta-icon">${iconSvg('mail')}</span><small>Email</small><strong>hashir.baig@example.com</strong></div>
            <div><span class="meta-icon">◫</span><small>Languages</small><strong>English, Dutch, Urdu</strong></div>
          </div>
        </div>
        <div class="cta-card" id="contact">
          <h3>Let's work together</h3>
          <p>I'm open to exciting opportunities and collaborations.<br/>Let's build something impactful!</p>
          <a class="btn btn-light" href="mailto:hashir.baig@example.com">Get In Touch ${iconSvg('mail')}</a>
        </div>
      </section>

      <section class="sr-only" id="research"><h2>Research</h2></section>
      <footer>© <span data-year></span> Hashir Baig. All rights reserved.</footer>
      <button class="scroll-top" type="button" aria-label="Back to top">↑</button>
    </main>
  </div>
`;

const links = [...document.querySelectorAll<HTMLAnchorElement>('.nav-link')];
const sections = links
  .map(link => document.querySelector<HTMLElement>(link.getAttribute('href') ?? ''))
  .filter((section): section is HTMLElement => Boolean(section));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = (entry.target as HTMLElement).id;
    links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
sections.forEach(section => observer.observe(section));

document.querySelector<HTMLButtonElement>('[data-theme-toggle]')?.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');
});

document.querySelector<HTMLButtonElement>('.scroll-top')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelector<HTMLButtonElement>('[data-download]')?.addEventListener('click', () => {
  alert('Connect this button to your CV PDF, e.g. /public/hashir-baig-cv.pdf');
});

const menuButton = document.querySelector<HTMLButtonElement>('.mobile-menu-button');
menuButton?.addEventListener('click', () => {
  document.body.classList.toggle('sidebar-open');
  menuButton.innerHTML = document.body.classList.contains('sidebar-open') ? iconSvg('close') : iconSvg('menu');
});

document.querySelectorAll<HTMLAnchorElement>('.nav-link').forEach(link => link.addEventListener('click', () => {
  document.body.classList.remove('sidebar-open');
  if (menuButton) menuButton.innerHTML = iconSvg('menu');
}));

document.querySelector<HTMLElement>('[data-year]')!.textContent = String(new Date().getFullYear());
