document.addEventListener("DOMContentLoaded", function () {
  // Inicializa o carrossel de depoimentos
  const testimonialCarousel = new bootstrap.Carousel('#testimonialCarousel', {
    interval: 10000,
    ride: 'carousel'
  });

  // Animação de digitação
  const words = ["tecnologia.", "código limpo.", "soluções inteligentes."];
  const typingTarget = document.getElementById("typing-word");

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];
    const displayedText = currentWord.substring(0, charIndex);

    typingTarget.textContent = displayedText;

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 50);
    } else {
      isDeleting = !isDeleting;

      if (!isDeleting) {
        wordIndex = (wordIndex + 1) % words.length;
      }

      setTimeout(typeEffect, 1000);
    }
  }

  typeEffect(); // Inicia a animação
});
