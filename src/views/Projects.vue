<script setup>
import Feedback from '../components/Feedback.vue'
import Skills from '../components/Skills.vue'
import { onMounted } from 'vue'
import Projects from '../components/Projects.vue'
import { projects } from '../data/projects'
import About from '../components/About.vue'
import Timeline from '../components/Timeline.vue'

function iniciarAnimacaoDigitacao() {
  const words = ["tecnologia.", "código limpo.", "soluções inteligentes."]
  const typingTarget = document.getElementById("typing-word")

  if (!typingTarget) return

  let wordIndex = 0
  let charIndex = 0
  let isDeleting = false

  function typeEffect() {
    const currentWord = words[wordIndex]
    const displayedText = currentWord.substring(0, charIndex)

    typingTarget.textContent = displayedText

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++
      setTimeout(typeEffect, 100)
    } else if (isDeleting && charIndex > 0) {
      charIndex--
      setTimeout(typeEffect, 50)
    } else {
      isDeleting = !isDeleting
      if (!isDeleting) {
        wordIndex = (wordIndex + 1) % words.length
      }
      setTimeout(typeEffect, 1000)
    }
  }

  typeEffect()
}

function iniciarCarrossel() {
  new bootstrap.Carousel('#testimonialCarousel', {
    interval: 10000,
    ride: 'carousel'
  })
}

onMounted(() => {
  iniciarCarrossel()
  iniciarAnimacaoDigitacao()
})

</script>


<template>
  <div id="home">

    <section
      class="hero-section position-relative text-white d-flex align-items-center justify-content-center text-center px-3">
      <div class="overlay"></div> <!-- camada escura -->
      <div class="content d-flex flex-column align-items-center justify-content-center">
        <h1 class="display-4 fw-bold mb-4">Marcus Melo</h1>
        <p class="lead mb-4 mx-auto" style="max-width: 700px;">
          Desenvolvedor de Software com paixão por <span id="typing-word"></span>
        </p>
        <a href="#sobre" class="btn btn-light text-primary fw-semibold px-4 py-2 rounded-pill">
          Saiba mais
        </a>

      </div>

    </section>

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-10 main-content align-items-center d-flex flex-column">

          <About />

          <Skills />

          <Timeline />

          <Projects :projects="projects.slice(0, 4)" :inHome="true" />

          <Feedback />

        </div>
      </div>


    </div>
  </div>

</template>

<style scoped>
.hero-section {
  background-image: url("/img/background8.jpg");
  /* caminho relativo */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
}

.hero-section h1 {
  font-size: 64px;
  font-weight: 700;
}

.hero-section .overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.hero-section .content {
  z-index: 2;
  /* padding-left: 500px; */
  /* padding-right: 200px; */
  /* padding-bottom: 500px; */
}

#typing-word::after {
  content: '|';
  animation: blink 0.7s infinite;
}

@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}
</style>