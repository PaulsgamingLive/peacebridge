
export function setupScrollAnimations() {
  if (typeof window === 'undefined') return;

  // Initialize intersection observer for scroll animations
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all elements with scroll-trigger class
  const elements = document.querySelectorAll('.scroll-trigger');
  elements.forEach(element => {
    observer.observe(element);
  });

  return () => {
    elements.forEach(element => {
      observer.unobserve(element);
    });
  };
}
