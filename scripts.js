/*
 * JavaScript for PrecisionB2B website.
 *
 * Handles intersection observer animations and mobile navigation toggle.
 */

document.addEventListener('DOMContentLoaded', function () {
  // Intersection Observer for animations
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  const animatedElements = document.querySelectorAll('.animate');
  animatedElements.forEach(el => observer.observe(el));

  // Mobile navigation toggle
  const toggle = document.querySelector('.mobile-toggle');
  const navList = document.querySelector('nav ul');
  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
  }

      // Animated counters for stats section
      const counters = document.querySelectorAll('.stat-number');
      counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target')) || 0;
        const suffix = counter.getAttribute('data-suffix') || '';
        const prefix = counter.getAttribute('data-prefix') || '';
        const duration = 2000; // total animation time in ms
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const current = Math.floor(progress * target);
          counter.innerText = prefix + current + suffix;
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            // ensure final value matches target
            counter.innerText = prefix + target + suffix;
          }
        };
        window.requestAnimationFrame(step);
      });
});