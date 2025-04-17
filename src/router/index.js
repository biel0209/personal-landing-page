import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
// import Projetos from '../views/Projetos.vue'

const routes = [
  { path: '/', component: Home },
  // { path: '/projetos', component: Projetos },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
