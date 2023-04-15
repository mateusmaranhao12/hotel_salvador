<template>
    <nav class="navbar navbar-expand-lg navbar-index bg-index">
        <div class="container-fluid">
            <router-link to="/dashboard" class="navbar-brand"><i class="fa-solid fa-user"></i> </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-start" id="navbarNav">
                <ul class="navbar-nav flex-grow-1"> <!-- Adiciona a classe "flex-grow-1" aqui -->
                    <li class="nav-item">
                        <router-link :class="{ active: $route.name === 'PaginaInicial' }" :to="{ name: 'PaginaInicial' }"
                            class="nav-link"><i class="fa-solid fa-home"></i> Página Inicial</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="{ active: $route.name === 'FazerReserva' }" :to="{ name: 'FazerReserva' }"
                            class="nav-link"><i class="fa-solid fa-user"></i> Fazer Reserva</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="{ active: $route.name === 'ListaReservas' }" :to="{ name: 'ListaReservas' }"
                            class="nav-link"><i class="fa-sharp fa-solid fa-user-plus"></i> Lista de reservas</router-link>
                    </li>
                </ul>
                <div> <!-- Adiciona uma div aqui para conter o botão de logout -->
                    <button @click="fazerLogout()" class="btn btn-primary ms-auto"><i
                            class="fa-solid fa-arrow-right-from-bracket"></i> Logout</button>
                    <!-- Adiciona a classe "ms-auto" aqui -->
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import axios from 'axios'

@Options({
    components: {
    },
})
export default class Navbar extends Vue {

    public fazerLogout() {
        // Remove o token JWT do local storage
        localStorage.removeItem('token')
        // Remove o header de autorização do axios
        delete axios.defaults.headers.common['Authorization']
        // Redireciona o usuário de volta para a página de login
        this.$router.push('/')
    }

}
</script>

<style lang="scss" scoped>
@import '@/scss/navbar.scss';
</style>