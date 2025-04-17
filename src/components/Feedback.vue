<script setup>
import { onMounted } from "vue";

const testimonials = [
  {
    name: "Deborah Moraes",
    position: "Coordenadora de Inovação e Projetos - Nextios",
    score: 5,
    img: "deborah.jpg",
    message:
      "O Marcus é um desenvolvedor que se destaca pela capacidade de identificar problemas e propor melhorias de forma clara, objetiva e alinhada às necessidades do time. Sua contribuição tem sido fundamental para a evolução da área de desenvolvimento, e sua trajetória demonstra uma evolução profissional notável. Executa suas tarefas com eficácia, qualidade e comprometimento com prazos, sempre demonstrando um entendimento profundo dos processos envolvidos. Participa ativamente da construção e evolução do sistema de precificação da Nextios, hoje utilizado por toda a empresa. Mesmo diante de desafios ou temas que ainda não domina, Marcus assume a responsabilidade, estuda, aprende e entrega. É um profissional confiável, resiliente e com uma postura exemplar dentro da equipe.",
  },
  {
    name: "Cesar Costa",
    position: "Desenvolvedor - Nextios",
    score: 5,
    img: "cesar.jpg",
    message:
      "Conheci o Marcus como um dev super técnico, daqueles que realmente dominam o que fazem. Ao longo desses últimos anos, tivemos a oportunidade de crescer juntos, trocar muitas ideias e aprender um com o outro — e sou muito grato por isso. O Marcus é um grande parceiro, tanto no código quanto fora dele! Sempre me apoiou em tudo que propus, com uma disposição admirável. Ele entrou no time bem na dele, tímido (como todo bom programador, rs), mas foi se soltando e hoje manda muito bem nas soft skills também. Chegou ao ponto de tocar demandas sozinho, do início ao fim, com muita responsabilidade. Tenho um enorme orgulho de ter feito parte do seu crescimento e também uma gratidão imensa por tudo que ele contribuiu. Marcus, você é brabo!",
  },
  {
    name: "João Reis",
    position: "Desenvolvedor - Nextios",
    score: 5,
    img: "joao.jpg",
    message:
      'Marcus é um cara muito tranquilo de se trabalhar. É aquele tipo de pessoa que te faz sentir alívio de tê-la no seu time porque é muito fácil de lidar; é objetivo, dedicado, se comunica bem, é interessado, se coloca na linha de frente pra resolver o problema e sempre dá um jeito, tem o "se-vira-ômetro" alto e um ótimo senso de completude, além da incrível capacidade técnica. Gostaria sempre de trabalhar junto com ele.',
  },
];

function iniciarCarrossel() {
  new bootstrap.Carousel("#testimonialCarousel", {
    interval: 10000,
    ride: "carousel",
  });
}

onMounted(() => {
  iniciarCarrossel();
});
</script>

<template>
  <section id="feedbacks" class="reveal-up container mb-5">
    <div class="container text-center mb-5">
      <h2 class="title">Feedbacks</h2>
      <hr class="custom-hr mx-auto" />
    </div>

    <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(t, i) in testimonials" :key="`slide-${i}`" :class="['carousel-item', { active: i === 0 }]">
          <div class="row align-items-center justify-content-center px-3">
            <!-- Texto -->
            <div class="col-md-8">
              <div class="border-start border-3 ps-4" style="border-color: #0563bbe0">
                <p class="text-justify">
                  <i class="fa-solid fa-quote-left fs-4 text-primary me-2"></i>
                  {{ t.message }}
                  <i class="fa-solid fa-quote-right fs-4 text-primary ms-2"></i>
                </p>
                <h5 class="fw-bold mb-0">{{ t.name }}</h5>
                <small class="text-muted">{{ t.position }}</small>
                <div class="text-warning mt-2">
                  <i class="fa-solid fa-star me-1" v-for="n in t.score" :key="`star-${i}-${n}`" />
                </div>
              </div>
            </div>
            <!-- Foto -->
            <div class="col-md-3 text-center">
              <img :src="`/img/${t.img}`" class="rounded-circle img-fluid" style="max-width: 150px"
                :alt="`Foto de ${t.name}`" />
            </div>
          </div>
        </div>
      </div>

      <div class="carousel-indicators mt-4">
        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.carousel-item {
  min-height: 300px;
}

.carousel-indicators [data-bs-target] {
  background-color: #0056b3;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
}
</style>
