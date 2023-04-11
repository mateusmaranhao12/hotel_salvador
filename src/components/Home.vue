<template>
    <div class="secao-inicial">
        <div class="container">
            <div class="row">
                <div class="col mt-3 mb-3">
                    <h1>Venha conhecer uma das capitais mais lindas do Nordeste!</h1>
                    <img class="img-fluid" src="../assets/imgs/home1.webp" />
                </div>
            </div>
        </div>
    </div>
    <div class="elevador-lacerda">
        <div class="container">
            <div class="row">
                <div class="col-md-6 mt-3 mb-3">
                    <h1>Elevador Lacerda</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum aliquet gravida. Duis vel
                        luctus ex, at viverra ipsum. Sed volutpat sapien in molestie dignissim. Aenean elit orci, cursus sed
                        felis vitae, gravida ultrices diam. Aenean risus ante, vestibulum eu tincidunt quis, aliquam nec
                        dolor. Aliquam id bibendum risus. Proin vehicula, metus sed tempus malesuada, dui ipsum porta nisl,
                        eu bibendum nisi metus non urna. Nulla faucibus laoreet augue, at faucibus velit ultricies in.
                        Pellentesque sit amet leo turpis. Aenean eu nisl dolor. Morbi dapibus tincidunt eros.
                    </p>
                </div>
                <div class="col-md-6 mt-3 mb-3">
                    <img class="img-fluid" src="../assets/imgs/home2.jpeg" />
                </div>
            </div>
        </div>
    </div>
    <div class="farol-da-barra">
        <div class="container">
            <div class="row">
                <div class="col-md-6 mt-3 mb-3">
                    <img class="img-fluid" src="../assets/imgs/home3.jpg" />
                </div>
                <div class="col-md-6 mt-3 mb-3">
                    <h1>Farol da Barra</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum aliquet gravida. Duis vel
                        luctus ex, at viverra ipsum. Sed volutpat sapien in molestie dignissim. Aenean elit orci, cursus sed
                        felis vitae, gravida ultrices diam. Aenean risus ante, vestibulum eu tincidunt quis, aliquam nec
                        dolor. Aliquam id bibendum risus. Proin vehicula, metus sed tempus malesuada, dui ipsum porta nisl,
                        eu bibendum nisi metus non urna. Nulla faucibus laoreet augue, at faucibus velit ultricies in.
                        Pellentesque sit amet leo turpis. Aenean eu nisl dolor. Morbi dapibus tincidunt eros.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="tour">
        <div class="container">
            <div class="row">
                <div class="col-md-6 mt-3 mb-3">
                    <h1>Tour pela cidade através das agências do Hotel Salvador</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum aliquet gravida. Duis vel
                        luctus ex, at viverra ipsum. Sed volutpat sapien in molestie dignissim. Aenean elit orci, cursus sed
                        felis vitae, gravida ultrices diam. Aenean risus ante, vestibulum eu tincidunt quis, aliquam nec
                        dolor. Aliquam id bibendum risus. Proin vehicula, metus sed tempus malesuada, dui ipsum porta nisl,
                        eu bibendum nisi metus non urna. Nulla faucibus laoreet augue, at faucibus velit ultricies in.
                        Pellentesque sit amet leo turpis. Aenean eu nisl dolor. Morbi dapibus tincidunt eros.
                    </p>
                </div>
                <div class="col-md-6 mt-3 mb-3">
                    <img class="img-fluid" src="../assets/imgs/home4.jpg" />
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Footer from './Footer.vue'

@Options({
    components: {
        Footer
    },
})
export default class Home extends Vue {
} 
</script>

<style lang="scss" scoped>
@import '@/scss/home.scss';
</style>