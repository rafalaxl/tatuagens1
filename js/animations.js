/**
 * Pedro Tattoo - Animations Control
 * Especialista em GSAP 3 & ScrollTrigger
 * 
 * Este script controla as animações de entrada, parallax e micro-interações 
 * da landing page, garantindo uma experiência de luxo e fluidez.
 */

// Registrar Plugins
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    const mm = gsap.matchMedia();

    /**
     * 1. ANIMAÇÕES DO HERO
     * Parallax na imagem e entrada suave dos textos.
     */
    mm.add("(min-width: 768px)", () => {
        // Efeito Parallax na imagem de fundo (Desktop)
        // Adicionamos um pequeno scale para evitar bordas vazias durante o movimento
        gsap.to(".hero-img", {
            yPercent: 20,
            scale: 1.1,
            ease: "none",
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        // Revelação da Headline e Subheadline
        gsap.from(".reveal-text", {
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power4.out",
            clearProps: "all"
        });
    });

    mm.add("(max-width: 767px)", () => {
        // Revelação simplificada para Mobile (Performance)
        gsap.from(".reveal-text", {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out",
            clearProps: "all"
        });
    });

    /**
     * 2. REVELAÇÃO DE SEÇÕES (SCROLL REVEAL)
     * Aplica um efeito de fade-in + slide-up em elementos com a classe .reveal
     */
    const reveals = gsap.utils.toArray('.reveal');
    reveals.forEach((el) => {
        // Verifica se há classes de delay do Tailwind para respeitar a intenção do design
        const delay = el.classList.contains('delay-200') ? 0.2 : 
                      el.classList.contains('delay-300') ? 0.3 : 0;

        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            y: 40,
            opacity: 0,
            duration: 1,
            delay: delay,
            ease: "power2.out",
            clearProps: "transform, opacity"
        });
    });

    /**
     * 3. MICRO-INTERAÇÕES DE BOTÕES
     * Efeito de escala e brilho sutil ao passar o mouse.
     */
    const primaryButtons = document.querySelectorAll('.btn-primary');
    primaryButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, { 
                scale: 1.03, 
                backgroundColor: "#E5C76B", // gold-light
                boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)",
                duration: 0.3, 
                ease: "power2.out" 
            });
        });
        
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { 
                scale: 1, 
                backgroundColor: "#D4AF37", // gold-champagne
                boxShadow: "0 0 0px rgba(212, 175, 55, 0)",
                duration: 0.3, 
                ease: "power2.out" 
            });
        });
    });
});
