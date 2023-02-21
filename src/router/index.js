import {createRouter, createWebHistory} from 'vue-router'
import AppAbout from '../views/AppAbout'
import Home from '../views/AppHome'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/AppAbout',
    name: '/AppAbout',
    component: AppAbout,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router