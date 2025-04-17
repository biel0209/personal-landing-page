<script setup>
</script>

<template>
  <div class="col-md-2 menu">

    <router-link :to="{ path: '/', hash: '#home' }" tag="a" class="menu-item">
      <i class="bi bi-house menu-icon"></i>
      <span class="menu-text">Início</span>
    </router-link>

    <!-- Sobre -->
    <router-link :to="{ path: '/', hash: '#about' }" tag="a" class="menu-item">
      <i class="bi bi-person menu-icon"></i>
      <span class="menu-text">Sobre</span>
    </router-link>

    <!-- Habilidades -->
    <router-link :to="{ path: '/', hash: '#skills' }" tag="a" class="menu-item">
      <i class="bi bi-award menu-icon"></i>
      <span class="menu-text">Skills</span>
    </router-link>

    <!-- Timeline -->
    <router-link :to="{ path: '/', hash: '#timeline' }" tag="a" class="menu-item">
      <i class="bi bi-bar-chart-steps menu-icon"></i>
      <span class="menu-text">Timeline</span>
    </router-link>

    <!-- Projetos -->
    <router-link :to="{ path: '/', hash: '#featured-projects' }" tag="a" class="menu-item">
      <i class="bi bi-code-slash menu-icon"></i>
      <span class="menu-text">Projetos</span>
    </router-link>

    <!-- Feedbacks -->
    <router-link :to="{ path: '/', hash: '#feedbacks' }" tag="a" class="menu-item">
      <i class="bi bi-quote menu-icon"></i>
      <span class="menu-text">Feedbacks</span>
    </router-link>

    <!-- Contato -->
    <router-link :to="{ path: '/', hash: '#contact' }" tag="a" class="menu-item">
      <i class="bi bi-envelope menu-icon"></i>
      <span class="menu-text">Contato</span>
    </router-link>
  </div>
</template>

<style scoped>
.menu {
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
  padding-left: 26px;
  z-index: 999;
}

.menu-item {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  background-color: transparent;
  font-weight: 400;
  font-size: large;
  border-radius: 50px;
  cursor: pointer;
  width: 67px;
  transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out;
  overflow: hidden;
}

.menu-icon {
  font-size: 1.3rem;
  /* background-color: color-mix(in srgb, #272829, transparent 92%); */
  background-color: color-mix(in srgb, #f8f9fa, transparent 25%);
  /* background-color: #f8f9fa; */
  padding: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* color: #45505b; */
  color: #45505b;
}

.menu-item:hover {
  background-color: var(--primary-color);
  color: white;
  width: 160px;
}

.menu-item:hover .menu-icon {
  background-color: inherit;
  color: inherit;
}

.menu-text {
  opacity: 0;
  white-space: nowrap;
}

.menu-item:hover .menu-text {
  opacity: 1;
}
</style>