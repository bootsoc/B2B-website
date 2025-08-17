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
});