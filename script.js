// Definir índices separados para cada galería
let slideIndices = {
    'lotus-gallery': 0,
    'zen-gallery': 0,
    'nirvana-gallery': 0,
    'mandala-gallery': 0
};

function showSlides(index, galleryId) {
    const gallery = document.getElementById(galleryId);
    const slides = gallery.querySelectorAll(".gallery-slide img");
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        slideIndices[galleryId] = 0;  // Volver al primer slide si se llega al final
    } else if (index < 0) {
        slideIndices[galleryId] = totalSlides - 1;  // Ir al último slide si se retrocede desde el primero
    } else {
        slideIndices[galleryId] = index;
    }

    // Mover el contenedor de imágenes
    const offset = -slideIndices[galleryId] * 100;  // Desplazar el contenedor
    gallery.querySelector(".gallery-slide").style.transform = `translateX(${offset}%)`;
}

function plusSlides(n, galleryId) {
    // Cambiar slides en la galería específica
    showSlides(slideIndices[galleryId] + n, galleryId);
}

// Inicializar ambas galerías en el primer slide
showSlides(slideIndices['lotus-gallery'], 'lotus-gallery');
showSlides(slideIndices['zen-gallery'], 'zen-gallery');
showSlides(slideIndices['nirvana-gallery'], 'nirvana-gallery');
showSlides(slideIndices['mandala-gallery'], 'mandala-gallery');