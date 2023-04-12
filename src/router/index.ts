import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Cadastro from '@/components/Cadastro.vue'
import Dashboard from '@/views/Dashboard.vue'
import Index from '@/views/Index.vue'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    redirect: '/home',
    children: [

      { 
        path: 'cadastro', 
        name: 'Cadastro', 
        component: Cadastro 
      },

      { 
        path: 'home', 
        name: 'Home', 
        component: Home 
      },

      { 
        path: 'login', 
        name: 'Login', 
        component: Login 
      },

    ]
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
