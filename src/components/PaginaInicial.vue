<template>
  <div class="pagina-inicial">
    <div class="container">
      <div class="row">
        <div class="col">
          <h3>Seja Bem vindo (a), {{ nomeUsuario }}</h3>
          <h5>No Hotel Salvador, você pode se hospedar na sua região favorita da cidade!</h5>
        </div>
      </div>
    </div>
  </div>
  <div class="pelourinho">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mt-3 mb-3">
          <h1>Pelourinho</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum aliquet gravida. Duis vel
            luctus ex, at viverra ipsum. Sed volutpat sapien in molestie dignissim. Aenean elit orci, cursus sed
            felis vitae, gravida ultrices diam. Aenean risus ante, vestibulum eu tincidunt quis, aliquam nec
            dolor. Aliquam id bibendum risus. Proin vehicula, metus sed tempus malesuada, dui ipsum porta nisl,
            eu bibendum nisi metus non urna. Nulla faucibus laoreet augue, at faucibus velit ultricies in.
            Pellentesque sit amet leo turpis. Aenean eu nisl dolor. Morbi dapibus tincidunt eros.
          </p>
          <div class="d-flex justify-content-center mt-5">
            <router-link to="fazer-reserva" class="btn btn-primary">Faça sua reserva agora mesmo!</router-link>
          </div>
        </div>
        <div class="col-md-6 mt-3 mb-3">
          <img class="img-fluid" src="../assets/imgs/pelourinho.jpg" />
        </div>
      </div>
    </div>
  </div>

  <div class="barra">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mt-3 mb-3">
          <img class="img-fluid" src="../assets/imgs/barra.jpg" />
        </div>
        <div class="col-md-6 mt-3 mb-3">
          <h1>Barra</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum aliquet gravida. Duis vel
            luctus ex, at viverra ipsum. Sed volutpat sapien in molestie dignissim. Aenean elit orci, cursus sed
            felis vitae, gravida ultrices diam. Aenean risus ante, vestibulum eu tincidunt quis, aliquam nec
            dolor. Aliquam id bibendum risus. Proin vehicula, metus sed tempus malesuada, dui ipsum porta nisl,
            eu bibendum nisi metus non urna. Nulla faucibus laoreet augue, at faucibus velit ultricies in.
            Pellentesque sit amet leo turpis. Aenean eu nisl dolor. Morbi dapibus tincidunt eros.
          </p>
          <div class="d-flex justify-content-center mt-5">
            <router-link to="fazer-reserva" class="btn btn-primary">Faça sua reserva agora mesmo!</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="itapua">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mt-3 mb-3">
          <h1>Itapuã</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum aliquet gravida. Duis vel
            luctus ex, at viverra ipsum. Sed volutpat sapien in molestie dignissim. Aenean elit orci, cursus sed
            felis vitae, gravida ultrices diam. Aenean risus ante, vestibulum eu tincidunt quis, aliquam nec
            dolor. Aliquam id bibendum risus. Proin vehicula, metus sed tempus malesuada, dui ipsum porta nisl,
            eu bibendum nisi metus non urna. Nulla faucibus laoreet augue, at faucibus velit ultricies in.
            Pellentesque sit amet leo turpis. Aenean eu nisl dolor. Morbi dapibus tincidunt eros.
          </p>
          <div class="d-flex justify-content-center mt-5">
            <router-link to="fazer-reserva" class="btn btn-primary">Faça sua reserva agora mesmo!</router-link>
          </div>
        </div>
        <div class="col-md-6 mt-3 mb-3">
          <img class="img-fluid" src="../assets/imgs/itapua.jpg" />
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Footer from './Footer.vue'
import axios from 'axios'
import jwt_decode from '@/utils/jwt-decode'
import { TokenPayload } from '@/utils/interfaces'

@Options({
  components: {
    Footer
  },
})
export default class PaginaInicial extends Vue {

  nomeUsuario = ''

  created() {
    const token = localStorage.getItem('token')
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      axios.get('http://localhost/Projetos/hotel_salvador/src/backend/usuarios.php').then(response => {
        const token_decoded = jwt_decode(token) as TokenPayload
        this.nomeUsuario = token_decoded.nome
      })
    }
  }

}
</script>