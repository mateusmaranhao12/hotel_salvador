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
                        <router-link :class="{ active: $route.path === '/home' }" to="/home"
                            class="nav-link"><i class="fa-solid fa-home"></i>
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="{ active: $route.path === '/login' }" to="/login" class="nav-link"><i class="fa-solid fa-user"></i> Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="{ active: $route.path === '/cadastro' }" to="/cadastro" class="nav-link"><i class="fa-sharp fa-solid fa-user-plus"></i>
                            Cadastro</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
    components: {

    },
})
export default class NavbarIndex extends Vue {
} 
</script>

<style lang="scss" scoped>
@import '@/scss/navbar.scss';
</style>