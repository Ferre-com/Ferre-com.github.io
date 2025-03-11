document.addEventListener("DOMContentLoaded", function() {
    ScrollReveal().reveal(".fade-in", {
        delay: 200,
        duration: 1000,
        distance: "20px",
        origin: "bottom"
    });

    const links = document.querySelectorAll(".navbar a");
    links.forEach(link => {
        link.addEventListener("mouseover", function() {
            link.style.textShadow = "0 0 10px #ff0";
        });
        link.addEventListener("mouseout", function() {
            link.style.textShadow = "none";
        });
    });

    document.querySelector(".btn").addEventListener("click", function() {
        alert("¡Bienvenido al mundo de la ciberseguridad!");
    });
});
