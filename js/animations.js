document.addEventListener('DOMContentLoaded', () => {
  // Check user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    console.log('Reduced motion preferred. Animations disabled.');
    return;
  }

  // Register GSAP ScrollTrigger if GSAP is loaded
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Disable heavy animations on mobile screens (under 768px)
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    // Hero Text Reveal
    gsap.from('.hero-animate', {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // Hero Image Parallax (only on Desktop)
    if (!isMobile) {
      gsap.to('.hero-image-parallax', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }

    // Scroll Fade-in for Cards and Sections
    gsap.utils.toArray('.scroll-fade-in').forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    });

    // Timeline Progress Line Activation
    if (!isMobile) {
      gsap.to('.timeline-line-progress', {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top 40%',
          end: 'bottom 60%',
          scrub: true
        }
      });
    }
  } else {
    // Fallback: simple IntersectionObserver if GSAP is not available
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-fade-in').forEach(el => {
      observer.observe(el);
    });
  }
});
