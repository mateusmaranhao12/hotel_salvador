<template>
    <nav class="navbar navbar-expand-lg navbar-index bg-index">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand"><i class="fa-solid fa-umbrella-beach"></i> Hotel
                Salvador</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <button @click="fazerLogout()" class="btn btn-primary"><i
                                class="fa-solid fa-arrow-right-from-bracket"></i> Logout</button>
                    </li>
                </ul>
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

    fazerLogout() {
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