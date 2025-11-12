const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const header = document.getElementById('siteHeader');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light');
  themeToggle.textContent = '☀️';
}

// Theme toggle
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  const isLight = body.classList.contains('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  themeToggle.textContent = isLight ? '☀️' : '🌙';
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

// Smooth scroll
function scrollToSection(id) {
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
}

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
