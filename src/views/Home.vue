<script setup>
import { onMounted } from 'vue'
import Feedback from '../components/Feedback.vue'

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
      <!-- Main Content -->
      <div class="col-md-10 main-content align-items-center d-flex flex-column">

        <section id="sobre" class="pt-5">
          <div class="row d-flex align-items-center container mb-5">
            <div class="col-md-2">
              <img src="/img/selfie.jpg" class="rounded-circle img-fluid" style="max-width: 200px;"
                alt="Foto Marcus Melo">
            </div>
            <div class="col">
              <h2 style="font-weight: bold; color: #45505b;">Marcus Melo</h2>
              <h5 class="text-muted">Desenvolvedor de Software</h5>
              <p>Sou Desenvolvedor de Software apaixonado por tecnologia, design limpo e soluções eficientes. Possuo
                experiência em projetos que vão
                desde a integração de sistemas corporativos até o
                desenvolvimento
                de chatbots e sistemas de gestão personalizados. Acredito em tecnologia como
                ferramenta para simplificar
                processos e gerar valor real para as organizações. Quer saber como posso ajudar no seu projeto? Confira
                meu
                portfólio e currículo online.</p>

            </div>
          </div>
          <div class="d-flex gap-2 mb-4">
            <a class="btn btn-success" href="#">Portfólio</a>
            <a class="btn btn-light d-flex align-items-center" href="/assets/Curriculo Atualizado - Marcus Melo.pdf"
              target="_blank" style="background-color: #0563bb; color: white;">
              <i class=" bi bi-filetype-pdf me-2"></i>Currículo
            </a>
          </div>
        </section>

        <section id="skills" class="container mb-5">
          <div class="container text-center mb-5">
            <h2 class="title">Habilidades</h2>
            <hr class="custom-hr mx-auto">
          </div>


          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-3">

            <div class="col-3">
              <div class="d-flex align-items-center mb-0">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  class="skill-img" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  class="skill-img" />
              </div>
              <strong>JavaScript & TypeScript</strong>
              <p>Desenvolvimento ágil com JS e robustez com TS.</p>
            </div>
            <div class="col-3">
              <div class="d-flex align-items-center mb-0">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  class="skill-img" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
                  class="skill-img" />
              </div>
              <strong>React & Vue</strong>
              <p>Interfaces dinâmicas e modernas com os principais frameworks de front-end.</p>
            </div>
            <div class="col-3">
              <div class="d-flex align-items-center mb-0">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                  class="skill-img" />
              </div>
              <strong>Node.js</strong>
              <p>Desenvolvimento do lado do servidor para aplicações de backend escaláveis.</p>
            </div>
            <div class="col">
              <div class="d-flex align-items-center mb-0">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                  class="skill-img" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg"
                  class="skill-img" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg"
                  class="skill-img" />
              </div>
              <strong>Python, Selenium & Playwrigth</strong>
              <p>Automação de processos e web scraping com foco em eficiência e escala.</p>
            </div>
            <div class="col">
              <div class="d-flex align-items-center mb-0">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                  class="skill-img" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                  class="skill-img" />
              </div>
              <strong>HTML & CSS</strong>
              <p>Web design semântico, acessível e responsivo.</p>
            </div>
            <div class="col">
              <div class="d-flex align-items-center mb-0">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg"
                  class="skill-img" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg"
                  class="skill-img" />
              </div>
              <strong>Cypress & Vitest</strong>
              <p>Testes unitários e end-to-end automatizados</p>
            </div>
          </div>
        </section>

        <section id="timeline" class="container mb-5 d-flex flex-column align-items-start">

          <div class="container text-center mb-5 ">
            <h2 class="title">Experiência</h2>
            <hr class="custom-hr mx-auto">
          </div>
          <div class="row">

            <div class="col">
              <div class="timeline">
                <div class="timeline-item">
                  <div class="timeline-marker"></div>
                  <div class="timeline-content">
                    <h3>Desenvolvedor Júnior</h3>
                    <p class="timeline-date">Outubro 2023 - Hoje</p>
                    <em>Nextios (LWSA) - Remoto</em>
                    <ul>
                      <li>
                        Aplicação Web para precificação de produtos.
                      </li>
                      <li>
                        Integração CRM x AWS ACE.
                      </li>
                      <li>
                        Integração entre sistemas de faturamentos,
                      </li>
                      <li>
                        Chatbots Web baseados em Generative AI.
                      </li>
                      <li>
                        Web scraping automatizado com RPA (Robotic Process Automation).
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="timeline-item">
                  <div class="timeline-marker"></div>
                  <div class="timeline-content">
                    <h3>Analista de Suporte de TI Júnior</h3>
                    <p class="timeline-date">Julho 2022 - Outubro 2023</p>
                    <em>Nextios (LWSA) - Remoto</em>
                    <ul>
                      <li>Área de operações com foco em monitoramento de serviços, ambientes em nuvem e gestão
                        de
                        incidentes críticos em produção.
                      </li>
                      <li>Iniciei e desenvolvi, de forma proativa, uma solução web que automatizou a coleta de dados de
                        incidentes e o envio de alertas, otimizando a comunicação entre times — destaque interno que
                        impulsionou minha transição para a área de desenvolvimento.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="timeline">
                <div class="timeline-item">
                  <div class="timeline-marker"></div>
                  <div class="timeline-content">
                    <h3>Bacharelado em Sistemas de Informação</h3>
                    <p class="timeline-date">Abril 2019 - Dezembro 2025</p>
                    <em>Universidade Federal de Sergipe</em>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </section>


        <section id="featured-projects" class="container mb-5">
          <div class="container text-center mb-5">
            <h2 class="title">Projetos em destaque</h2>
            <hr class="custom-hr mx-auto">
          </div>
          <div class="row">

            <div class="col-md-6 mb-5">


              <div class="card project-card">
                <div class="row no-gutters">
                  <div class="col-12 col-xl-5 card-img-holder">
                    <img src="/img/projects/project.png" class="card-img" alt="image">
                  </div>
                  <div class="col-12 col-xl-7">
                    <div class="card-body">
                      <h5 class="card-title">Project Heading</h5>
                      <p class="card-text">Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum
                        sociis natoque penatibus et magnis dis parturient montes.</p>
                      <p class="card-text"><small class="text-muted">Client: Google</small></p>
                    </div>
                  </div>
                </div>
                <div class="link-mask">
                  <div class="link-mask-text">
                    <a class="btn btn-secondary" href="/projects/project.html">
                      <i class="fas fa-eye me-2 fs-4"></i>
                      Mais detalhes
                    </a>
                  </div>
                </div>
              </div>




            </div>

            <div class="col-md-6 mb-5">
              <div class="card project-card">
                <div class="row no-gutters">
                  <div class="col-12 col-xl-5 card-img-holder">
                    <img src="/img/projects/project.png" class="card-img" alt="image">
                  </div>
                  <div class="col-12 col-xl-7">
                    <div class="card-body">
                      <h5 class="card-title">Project Heading</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque
                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                      <p class="card-text"><small class="text-muted">Client: Dropbox</small></p>
                    </div>
                  </div>
                </div>
                <div class="link-mask">
                  <div class="link-mask-text">
                    <a class="btn btn-secondary" href="project.html">
                      <i class="fas fa-eye me-2 fs-4"></i>
                      Mais detalhes
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 mb-5">
              <div class="card project-card">
                <div class="row no-gutters">
                  <div class="col-12 col-xl-5 card-img-holder">
                    <img src="/img/projects/project.png" class="card-img" alt="image">
                  </div>
                  <div class="col-12 col-xl-7">
                    <div class="card-body">
                      <h5 class="card-title">Project Heading</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque
                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                      <p class="card-text"><small class="text-muted">Client: Google</small></p>
                    </div>
                  </div>
                </div>
                <div class="link-mask">
                  <div class="link-mask-text">
                    <a class="btn btn-secondary" href="project.html">
                      <i class="fas fa-eye me-2 fs-4"></i>
                      Mais detalhes</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 mb-5">
              <div class="card project-card">
                <div class="row no-gutters">
                  <div class="col-12 col-xl-5 card-img-holder">
                    <img src="/img/projects/project.png" class="card-img" alt="image">
                  </div>
                  <div class="col-12 col-xl-7">
                    <div class="card-body">
                      <h5 class="card-title">Project Heading</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque
                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                      <p class="card-text"><small class="text-muted">Client: Uber</small></p>
                    </div>
                  </div>
                </div>
                <div class="link-mask">
                  <div class="link-mask-text">
                    <a class="btn btn-secondary" href="project.html">
                      <i class="fas fa-eye me-2 fs-4"></i>
                      Mais detalhes
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-flex justify-content-end">
              <a class="btn btn-success" href="#">Todos os projetos</a>
            </div>

          </div>
        </section>

        <Feedback />


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