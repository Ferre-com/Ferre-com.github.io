function initLoadingScreen() {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        const mainContent = document.getElementById('main-content');

        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 1s ease';

        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.classList.remove('hidden');
        }, 1000);
    }, 3000);
}

function initMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

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

function initImageRotation() {
    const ctfStack = document.querySelector('.ctf-stack');
    const certificateStack = document.querySelector('.certificate-stack');

    if (!ctfStack || !certificateStack) {
        console.error('Stacks not found!');
        return;
    }

    function displayImages(stack) {
        const images = stack.querySelectorAll('.stacked-image');
        const noImagesMessage = stack.parentElement.querySelector('.no-images-message');

        images.forEach(image => {
            image.style.display = 'none';
            image.style.position = 'absolute';//reset to absolute
        });

        if (images.length === 0) {
            noImagesMessage.style.display = 'block';
        } else if (images.length === 1) {
            noImagesMessage.style.display = 'none';
            images[0].style.display = 'block';
            images[0].style.position = 'static';
            images[0].style.transform = 'none';
        } else if (images.length === 2) {
             noImagesMessage.style.display = 'none';
            images[0].style.display = 'block';
            images[1].style.display = 'block';
            images[0].style.position = 'static';
            images[1].style.position = 'static';
            images[0].style.transform = 'none';
            images[1].style.transform = 'none';

            // Posiciona las imágenes lado a lado (ajusta los valores)
            images[0].style.marginLeft = '0';
            images[1].style.marginLeft = '10px';

        } else {  // 3 o más imágenes: Usa la lógica de rotación
            noImagesMessage.style.display = 'none';
            images.forEach(image => {
                image.style.display = 'block';
            });
            rotateImages(stack);

        }
    }

    function rotateImages(stack) {
        const images = stack.querySelectorAll('.stacked-image');
        const numImages = images.length;

        if (numImages < 3) return;

        // Mueve la primera imagen al final
        const firstImage = images[0];
        stack.appendChild(firstImage);

        setTimeout(() => {
            images.forEach((image, index) => {
                image.style.transition = 'none';

                const relativeIndex = index % 3;

                switch (relativeIndex) {
                    case 0:
                        image.style.zIndex = 1; // Trasera izquierda
                        image.style.transform = 'translateX(-60%) translateY(10px) scale(0.8)'; // Ajuste de posición y escala
                        image.style.opacity = 0.5;
                        break;
                    case 1:
                        image.style.zIndex = 3; // Al frente y en el centro
                        image.style.transform = 'translateX(0) translateY(-10px) scale(1.1)'; // Ajuste de posición y escala
                        image.style.opacity = 1;
                        break;
                    case 2:
                        image.style.zIndex = 1; // Trasera derecha
                        image.style.transform = 'translateX(60%) translateY(10px) scale(0.8)'; // Ajuste de posición y escala
                        image.style.opacity = 0.5;
                        break;
                }
            });
            stack.offsetWidth;

            images.forEach(image => {
                image.style.transition = '';
            });
        }, 50);
    }

    // Llama a displayImages para la visualización inicial
    displayImages(ctfStack);
    displayImages(certificateStack);

    // Rota las imágenes cada pocos segundos, solo si hay 3+
    setInterval(() => {
        if (ctfStack.querySelectorAll('.stacked-image').length >= 3) rotateImages(ctfStack);
        if (certificateStack.querySelectorAll('.stacked-image').length >= 3) rotateImages(certificateStack);

    }, 3000);
}

// --- Inicialización ---
function init() {
    initLoadingScreen();
    initMobileMenu();
    initSmoothScroll();
    initImageRotation();
}

document.addEventListener('DOMContentLoaded', init);