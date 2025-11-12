const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light');
  themeToggle.textContent = '☀️';
} else {
  body.classList.remove('light');
  themeToggle.textContent = '🌙';
}

// Toggle theme
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  const isLight = body.classList.contains('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  themeToggle.textContent = isLight ? '☀️' : '🌙';
});

// Smooth scroll
function scrollToSection(id) {
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
}

// Navbar background on scroll
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});
