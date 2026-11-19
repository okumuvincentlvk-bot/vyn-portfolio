
// VYN PORTFOLIO - JAVASCRIPT

// 1. Smooth navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function() {
    console.log('Navigating to:', this.textContent);
  });
});

// 2. Reveal sections on scroll
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.15
});

sections.forEach(section => {
  observer.observe(section);
});

// 3. Dynamic footer year
const footer = document.querySelector('footer p');

footer.textContent =
  `© ${new Date().getFullYear()} VYN. All rights reserved.`;

// 4. Project card interaction
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('selected');
  });
});

console.log('VYN Portfolio system online.');
