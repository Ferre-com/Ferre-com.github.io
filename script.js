document.addEventListener("DOMContentLoaded", function () {
    // Animaciones con GSAP
    gsap.from(".header-content", { opacity: 0, y: -50, duration: 1, ease: "power2.out" });
    gsap.from(".navbar ul li", { opacity: 0, y: -20, stagger: 0.2, duration: 0.8, ease: "power2.out" });
    gsap.from(".btn-glow", { opacity: 0, scale: 0.8, duration: 1, ease: "elastic.out(1, 0.5)" });
    
    // ScrollReveal para secciones
    ScrollReveal().reveal(".glass-card", {
        duration: 1000,
        origin: "bottom",
        distance: "50px",
        easing: "ease-in-out",
        reset: true
    });

    // Efecto hover en proyectos
    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            gsap.to(card, { scale: 1.05, boxShadow: "0px 0px 15px rgba(0,255,255,0.6)", duration: 0.3 });
        });
        card.addEventListener("mouseleave", () => {
            gsap.to(card, { scale: 1, boxShadow: "none", duration: 0.3 });
        });
    });

    // Animación en botones de redes sociales
    document.querySelectorAll(".social-links a").forEach(link => {
        link.addEventListener("mouseenter", () => {
            gsap.to(link, { scale: 1.2, duration: 0.3 });
        });
        link.addEventListener("mouseleave", () => {
            gsap.to(link, { scale: 1, duration: 0.3 });
        });
    });
});