<script setup>
</script>

<template>
  <div class="col-md-2 menu">
    <!-- Home -->
    <a class="menu-item" href="index.html">
      <i class="bi bi-house menu-icon"></i>
      <span class="menu-text">Início</span>
    </a>

    <!-- Sobre -->
    <a class="menu-item" href="#">
      <i class="bi bi-person menu-icon"></i>
      <span class="menu-text">Sobre</span>
    </a>

    <!-- Projetos -->
    <a class="menu-item" href="#">
      <i class="bi bi-code-slash menu-icon"></i>
      <span class="menu-text">Projetos</span>
    </a>

    <!-- Feedbacks -->
    <a class="menu-item" href="#">
      <i class="bi bi-quote menu-icon"></i>
      <span class="menu-text">Feedbacks</span>
    </a>

    <!-- Contato -->
    <a class="menu-item" href="#">
      <i class="bi bi-envelope menu-icon"></i>
      <span class="menu-text">Contato</span>
    </a>
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