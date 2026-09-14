const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

const copyButton = document.getElementById('copyEmail');
if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const email = 'huyhoangnguyenpham62@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      copyButton.textContent = 'Đã copy email ✓';
      setTimeout(() => copyButton.textContent = 'Copy email', 1600);
    } catch {
      copyButton.textContent = email;
    }
  });
}

const modal = document.getElementById('topologyModal');
const openButton = document.getElementById('openTopology');
const closeButton = document.getElementById('closeTopology');
const closeModal = () => {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};
if (openButton && modal) {
  openButton.addEventListener('click', () => {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
}
if (closeButton) closeButton.addEventListener('click', closeModal);
if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
