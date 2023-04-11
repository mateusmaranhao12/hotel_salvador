<template>
    <div class="footer p-3">
        <div class="container">
            <div class="row">
                <div class="col-md-6 p-2">
                    <h4>Regiões do Hotel Salvador</h4>
                    <ul>
                        <li>Barra</li>
                        <li>Itapuã</li>
                        <li>Pelourinho</li>
                    </ul>
                </div>
                <div class="col-md-6 p-2">
                    <h4>Redes Sociais</h4>
                    <ul class="d-flex justify-content-center">
                        <li class="m-3">
                            <a href=""><i class="fa-brands fa-instagram"></i></a>
                        </li>
                        <li class="m-3">
                            <a href=""><i class="fa-brands fa-facebook"></i></a>
                        </li>
                        <li class="m-3">
                            <a href=""><i class="fa-brands fa-twitter"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-12 p-2">
                    <h4>Todos os direitos reservados 2023</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
    components: {

    },
})
export default class Footer extends Vue {
} 
</script>

<style lang="scss" scoped>
@import '@/scss/footer.scss';
</style>