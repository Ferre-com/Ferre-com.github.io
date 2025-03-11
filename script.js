// Función para la pantalla de carga
function initLoadingScreen() {
    // Esperar 3 segundos (3000 ms) y luego mostrar el contenido principal
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        const mainContent = document.getElementById('main-content');

        // Ocultar la pantalla de carga
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 1s ease';

        // Mostrar el contenido principal después de la animación
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.classList.remove('hidden');
        }, 1000); // Esperar 1 segundo para la transición
    }, 3000); // Duración de la pantalla de carga
}

// Función para el menú responsive
function initMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Función para el scroll suave
function initSmoothScroll() {
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Inicializar todas las funciones
function init() {
    initLoadingScreen();
    initMobileMenu();
    initSmoothScroll();
}

// Ejecutar la función init cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);