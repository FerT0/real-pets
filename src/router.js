import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Account from './components/Account.vue'
import Home from './components/Home.vue'
import Products from './components/Products.vue'
import Services from './components/Services.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: App
  },
  {
    path: '/Home',
    name: 'home',
    component: Home
  },
  {
    path: '/Account',
    name: 'account',
    component: Account
  },
  {
    path: '/Products',
    name: 'products',
    component: Products
  },
  {
    path: '/Services',
    name: 'services',
    component: Services
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
