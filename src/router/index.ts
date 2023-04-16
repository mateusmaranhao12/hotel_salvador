import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { usuarioAutenticado } from '@/utils/auth'

/* Carregamento normal das rotas */
import PaginaInicial from '@/components/PaginaInicial.vue'
import PaginaNaoEncontrada from '@/views/PaginaNaoEncontrada.vue'

/* Carregamento com lazy loading das rotas */
const Cadastro = () => import(/* webpackChunkName: "index" */ '@/components/Cadastro.vue')
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue')
const FazerReserva = () => import(/* webpackChunkName: "dashboard" */ '@/components/FazerReserva.vue')
const Index = () => import(/* webpackChunkName: "index" */ '@/views/Index.vue')
const Home = () => import(/* webpackChunkName: "index" */ '@/components/Home.vue')
const ListaReservas = () => import(/* webpackChunkName: "dashboard" */ '@/components/ListaReservas.vue') 
const Login = () => import(/* webpackChunkName: "index" */ '@/components/Login.vue') 


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
  },

  { path: '/:catchAll(.*)*', component: PaginaNaoEncontrada } //caso a rota digitada não exista
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