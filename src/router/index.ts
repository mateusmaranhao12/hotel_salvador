import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Cadastro from '@/components/Cadastro.vue'
import Dashboard from '@/views/Dashboard.vue'
import FazerReserva from '@/components/FazerReserva.vue'
import Index from '@/views/Index.vue'
import Home from '@/components/Home.vue'
import ListaReservas from '@/components/ListaReservas.vue'
import Login from '@/components/Login.vue'
import PaginaInicial from '@/components/PaginaInicial.vue'
import { usuarioAutenticado } from '@/utils/auth'

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
    component: Dashboard,
    redirect: '/dashboard/pagina-inicial',
    meta: {
      requiresAuth: true
    },

    children: [

      {
        path: 'pagina-inicial',
        name: 'PaginaInicial',
        component: PaginaInicial,
        meta: {
          requiresAuth: true
        }
      },

      {
        path: 'fazer-reserva',
        name: 'FazerReserva',
        component: FazerReserva,
        meta: {
          requiresAuth: true
        }
      },

      {
        path: 'lista-reservas',
        name: 'ListaReservas',
        component: ListaReservas,
        meta: {
          requiresAuth: true
        }
      }

    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!usuarioAutenticado()) {
      next({
        name: 'Login',
        replace: true
      })
    } else {
      // Se o usuário já estiver autenticado, redireciona para a página de dashboard
      if (to.name === 'Dashboard') {
        next({
          name: 'Dashboard',
          replace: true
        })
      } else {
        next()
      }
    }
  } else {
    next()
  }
})

export default router