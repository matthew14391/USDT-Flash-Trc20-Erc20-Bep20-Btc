// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Dark mode toggle button
const toggleButton = document.createElement('button');
toggleButton.textContent = "☀️";
toggleButton.classList.add('toggle-btn');
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleButton.textContent = document.body.classList.contains('dark-mode') ? "🌙" : "☀️";
});

console.log("✅ USDTFlash site loaded successfully!");
