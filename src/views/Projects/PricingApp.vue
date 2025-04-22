<script setup>

import { onMounted } from 'vue'
import { projects } from '../../data/projects'

function animationWritingInit() {
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

function carrouselInit() {
  new bootstrap.Carousel('#testimonialCarousel', {
    interval: 10000,
    ride: 'carousel'
  })
}

function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal-up');

  // Função para aplicar a animação dependendo da direção do scroll
  const applyAnimation = (entry) => {
    if (entry.isIntersecting) {
      // Detecta a direção do scroll e aplica a classe de animação correspondente
      if (entry.boundingClientRect.top < 0) {
        // Scroll para baixo: o efeito "subindo"
        entry.target.classList.add('visible');
        entry.target.classList.remove('upwards');
      } else {
        // Scroll para cima: o efeito "descendo"
        entry.target.classList.add('visible', 'upwards');
      }
    }
  };

  // Observador de entrada
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      applyAnimation(entry);
    });
  }, {
    threshold: 0.3, // Pode ajustar conforme necessário
  });

  reveals.forEach(el => {
    observer.observe(el);
  });
}

onMounted(() => {
  carrouselInit();
  animationWritingInit();
  initScrollAnimations();
})

</script>


<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-10 main-content align-items-center d-flex flex-column">
        <section id="project-highlight" class="py-5 bg-light">
          <div class="container">
            <!-- Título e Resumo -->
            <div class="text-center mb-5">
              <h2 class="title">Projeto em Destaque: Pricing App</h2>
              <p class="lead">Aplicação Web de precificação e gestão de listas de
                materiais.</p>
            </div>

            <div class="mb-5">
              <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                    aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="../../../public/img/projects/pricing-app/list-boms.png" class="d-block w-100 rounded"
                      alt="...">
                    <div class="carousel-caption d-none d-md-block">
                      <p>Listar BOMs</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src="../../../public/img/projects/pricing-app/edit-bom.png" class="d-block w-100 rounded"
                      alt="...">
                    <div class="carousel-caption d-none d-md-block">
                      <p>Editar um BOM</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src="../../../public/img/projects/pricing-app/log-register-bom.png"
                      class="d-block w-100 rounded" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                      <p>Visualizar logs de alterações</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src="../../../public/img/projects/pricing-app/role-management.png"
                      class="d-block w-100 rounded" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                      <p>Gerenciar perfis (roles)</p>
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <!-- Desafio e Solução -->
            <div class="row mb-5">
              <div class="col-md-6">
                <h4>O Desafio</h4>
                <p>Processos manuais em planilhas tornavam a gestão de preços e componentes ineficiente e suscetível a
                  erros.</p>
              </div>
              <div class="col-md-6">
                <h4>A Solução</h4>
                <p>Criação de uma plataforma web moderna com cálculos automatizados, controle de permissões e alta
                  performance.</p>
              </div>
            </div>

            <!-- Funcionalidades -->
            <div class="mb-5">
              <h4 class="mb-3">Principais Funcionalidades</h4>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">✅ CRUD completo para componentes e BOMs</li>
                <li class="list-group-item">✅ Simulação de preços em tempo real</li>
                <li class="list-group-item">✅ Controle de acesso com perfis e permissões</li>
                <li class="list-group-item">✅ Geração de relatórios dinâmicos</li>
                <li class="list-group-item">✅ Importação/exportação (Excel, PDF, imagens)</li>
                <li class="list-group-item">✅ Logs de atividade detalhados</li>
              </ul>
            </div>

            <!-- Impacto -->
            <div class="mb-5">
              <h4>Impacto</h4>
              <p>Redução do tempo médio de operação em cerca de <strong>70,4%</strong>, otimizando processos antes
                manuais e facilitando a gestão.</p>
            </div>

            <!-- Stacks -->
            <div class="mb-5">
              <h4>Tecnologias Utilizadas</h4>
              <p>
                <span class="badge bg-primary me-2 mb-2">Next.js</span>
                <span class="badge bg-secondary me-2 mb-2">TypeScript</span>
                <span class="badge bg-success me-2 mb-2">PostgreSQL</span>
                <span class="badge bg-warning text-dark me-2 mb-2">Node.js</span>
                <span class="badge bg-info text-dark me-2 mb-2">NextAuth.js</span>
                <span class="badge bg-dark me-2 mb-2">CASL</span>
                <span class="badge bg-danger me-2 mb-2">Prisma ORM</span>
                <span class="badge bg-light text-dark me-2 mb-2">Swagger</span>
              </p>
            </div>

            <div class="row">
              <div class="text-center">
                <small class="text-muted fst-italic">
                  Este projeto foi desenvolvido internamente e por isso detalhes sensíveis e dados específicos foram
                  omitidos para preservar a confidencialidade da empresa.
                </small>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 2rem;
  font-weight: 700;
}

.carousel-item img {
  filter: brightness(0.9);
}

.carousel-caption {
  /* color: black; */
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px 0px;
  border-radius: 10px;
  /* max-width: 400px; */
}
</style>