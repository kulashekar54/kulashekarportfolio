// Update year
document.getElementById("year").textContent = new Date().getFullYear();

// Animate skill progress bars when visible
document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".skill .progress i");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.width = el.dataset.level + "%";
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => observer.observe(b));
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
