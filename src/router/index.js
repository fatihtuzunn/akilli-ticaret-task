import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'


import Error404 from '../views/404/Error404.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  

  {
    path: '/:catchAll(.*)', name: 'NotFound', component: Error404
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
