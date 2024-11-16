let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Función para mostrar una imagen específica
function showSlide(index) {
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  const offset = -currentSlide * 100;
  document.querySelector('.carousel-slides').style.transform = `translateX(${offset}%)`;
}

// Funciones para avanzar y retroceder manualmente
function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Configura el carrusel automático
const autoAdvance = setInterval(nextSlide, 1000); // Cambia cada 3 segundos

// Iniciar el carrusel en la primera imagen
showSlide(currentSlide);
