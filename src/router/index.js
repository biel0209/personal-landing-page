import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
]

export default createRouter({
  history: createWebHistory('/personal-landing-page/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
