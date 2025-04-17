<script setup>

const skills = [
  {
    title: "JavaScript & TypeScript",
    subtitle: "Desenvolvimento ágil com JS e robustez com TS.",
    img: [
      "javascript/javascript-original.svg",
      "typescript/typescript-original.svg"
    ]
  },
  {
    title: "React & Vue",
    subtitle: "Interfaces dinâmicas e modernas com os principais frameworks de front-end.",
    img: [
      "react/react-original.svg",
      "vuejs/vuejs-original.svg"
    ]
  },
  {
    title: "Node.js",
    subtitle: "Desenvolvimento do lado do servidor para aplicações de backend escaláveis.",
    img: [
      "nodejs/nodejs-original.svg"
    ]
  },
  {
    title: "Python, Selenium & Playwrigth",
    subtitle: "Automação de processos e web scraping com foco em eficiência e escala.",
    img: [
      "python/python-original.svg",
      "selenium/selenium-original.svg",
      "playwright/playwright-original.svg"
    ]
  },
  {
    title: "HTML & CSS",
    subtitle: "Web design semântico, acessível e responsivo.",
    img: [
      "html5/html5-original.svg",
      "css3/css3-original.svg"
    ]
  },
  {
    title: "Cypress & Vitest",
    subtitle: "Testes unitários e end-to-end automatizados.",
    img: [
      "cypressio/cypressio-original.svg",
      "vitest/vitest-original.svg"
    ]
  },
];

</script>

<template>
  <section id="skills" class="reveal-up container mb-5">
    <div class="container text-center mb-5">
      <h2 class="title">Skills</h2>
      <hr class="custom-hr mx-auto">
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-3">
      <div class="col-3" v-for="(skill, index) in skills" :key="index">
        <div class="d-flex align-items-center mb-0">
          <img v-for="(icon, i) in skill.img" :key="i"
            :src="`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}`" class="skill-img me-1"
            alt="Icon" />
        </div>
        <strong>{{ skill.title }}</strong>
        <p>{{ skill.subtitle }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skill-img {
  margin-right: 1rem;
  width: 3rem;
}
</style>