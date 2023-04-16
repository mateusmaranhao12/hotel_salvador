<template>
    <div class="pagina-inicial">
        <div class="container">
        <div class="row">
            <div class="col">
                <h1>Seja Bem vindo (a), {{ nomeUsuario }}</h1>
            </div>
        </div>
    </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import axios from 'axios'
import jwt_decode from '@/utils/jwt-decode'
import { TokenPayload } from '@/utils/interfaces'

@Options({
    components: {
        
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