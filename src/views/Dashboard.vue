<template>
    <Navbar />
    <h1>Dashboard</h1>
    <router-view />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Navbar from '@/components/Navbar.vue'

@Options({
    components: {
        Navbar
    },
})
export default class Dashboard extends Vue {

    
}
</script>