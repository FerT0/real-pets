import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Account from './components/Account.vue'
import Home from './components/Home.vue'

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
