<template>
  <navbar-index />
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import NavbarIndex from '@/components/NavbarIndex.vue'

@Options({
  components: {
    NavbarIndex
  }
})
export default class Home extends Vue {}
</script>
