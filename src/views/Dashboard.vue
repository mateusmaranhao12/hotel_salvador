<template>
    <Navbar />
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

<style lang="scss">
@import '@/scss/dashboard.scss';
</style>