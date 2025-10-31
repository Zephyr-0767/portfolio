/* script.js — optimized and small */

// Placeholder project slots (change later)
const projects = [
  { image: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&q=60&w=800", desc: "Project 1" },
  { image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=60&w=800", desc: "Project 2" },
  { image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=60&w=800", desc: "Project 3" },
  { image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=60&w=800", desc: "Project 4" },
];

function createCard(p) {
  const card = document.createElement('article');
  card.className = 'card reveal';
  card.innerHTML = `
    <img class="card-img" src="${p.image}" alt="${p.desc} preview" loading="lazy" />
    <div class="caption">${p.desc}</div>
  `;
  return card;
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  const fragment = document.createDocumentFragment();
  projects.forEach(p => fragment.appendChild(createCard(p)));
  grid.appendChild(fragment);
}

function setupReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => observer.observe(el));
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = (form.name && form.name.value) ? form.name.value.trim() : 'Friend';
    alert(`Thanks ${name}! This demo form doesn't send emails yet.`);
    form.reset();
  });

  const resetBtn = document.getElementById('reset');
  if (resetBtn) resetBtn.addEventListener('click', () => form.reset());
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  document.getElementById('year').textContent = new Date().getFullYear();
  setupReveal();
  initContactForm();
});
