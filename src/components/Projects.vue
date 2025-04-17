<script setup>
defineProps({
  projects: {
    type: Array,
    required: true
  },
  inHome: {
    type: Boolean,
    required: true
  }
});
</script>

<template>
  <section id="featured-projects" class="reveal-up container mb-5">
    <div v-if="inHome" class="container text-center mb-5">
      <h2 class="title">Projetos em destaque</h2>
      <hr class="custom-hr mx-auto">
    </div>
    <div class="row">
      <div v-for="(project, index) in projects" :key="index" class="col-md-6 mb-5">
        <div class="card project-card">
          <div class="row no-gutters">
            <div class="col-12 col-xl-5 card-img-holder">
              <img :src="`/img/projects/${project.img}`" class="card-img" :alt="project.title">
            </div>
            <div class="col-12 col-xl-7">
              <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.text }}</p>
              </div>
            </div>
          </div>
          <div class="link-mask">
            <div class="link-mask-text">
              <a class="btn btn-secondary" :href="project.route">
                <i class="fas fa-eye me-2 fs-4"></i>
                Mais detalhes
              </a>
            </div>
          </div>
        </div>
      </div>
      <div v-if="inHome" class="d-flex justify-content-end">
        <a class="btn btn-success" href="#">Todos os projetos</a>
      </div>

    </div>
  </section>
</template>

<style scoped>
.project-card {
  border-radius: 0;
  background: inherit;
  border: 1px solid rgba(0, 0, 0, 0.025);
  position: relative;
  height: 100%;
}

.project-card:hover .link-mask {
  visibility: visible;
  background: rgba(41, 41, 41, 0.5);
}

.project-card:hover .link-mask-text {
  display: block;
}

.project-card .card-img {
  border-radius: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.project-card .card-title {
  font-size: 1.125rem;
}

.project-card .card-text {
  font-size: 0.875rem;
}

.project-card .card-img-holder {
  max-height: 200px;
  overflow: hidden;
  vertical-align: middle;
}

.project-card .link-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
  border-radius: 16px;
}

.project-card .link-mask .link-mask-link {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.project-card .link-mask-text {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: middle;
  color: #fff;
  display: none;
}

.project-card .link-mask-text .btn {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin-top: 0px;
}


.project-meta {
  border: 1px solid rgba(0, 0, 0, 0.025);
  font-size: 0.875rem
}

.project-meta .client-name {
  font-size: 1.5rem
}

.project-meta .subheading {
  font-size: 1rem
}

.project-meta .client-meta {
  font-size: 1rem
}

.project-meta .client-meta .svg-inline--fa {
  color: #4f4f4f
}
</style>