import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/room/:id',
    component: () => import('../views/Room.vue')
  },
  {
    path: '/reservation/:id',
    component: () => import('../views/Reservation.vue')
  },
  {
    path: '/reservation/:id/result',
    component: () => import('../views/Reservation-result.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
