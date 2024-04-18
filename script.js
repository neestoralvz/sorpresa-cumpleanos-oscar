// Animación de título
const title = document.querySelector('.animate-title');
title.style.animationDelay = '0.5s';

// Animación de imagen
const image = document.querySelector('.animate-image');
image.style.animationDelay = '1s';

// Animación de texto
const textElements = document.querySelectorAll('.animate-text');
textElements.forEach((element, index) => {
    element.style.animationDelay = `${1.5 + index * 0.3}s`;
});