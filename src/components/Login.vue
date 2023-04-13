<template>
    <div class="login d-flex justify-content-center">
        <div class="card mx-auto mt-5 mb-3">
            <div class="card-body">
                <h3 class="card-title mb-4">Faça Login agora mesmo para fazer suas reservas!</h3>
                <div class="container">
                    <div class="row">
                        <div v-if="mensagem_erro_login" class="alert alert-danger text-center">
                            {{ mensagem_erro_login }}
                        </div>
                        <form @submit.prevent="fazerLogin">
                            <div class="form-group">
                                <label for="email">E-mail</label>
                                <input type="text" ref="email" placeholder="e-mail" id="email" class="form-control mb-3"
                                    name="email" v-model="usuarios_cadastrados.email" />
                            </div>

                            <div class="form-group">
                                <label for="senha">Senha</label>
                                <div class="input-group mb-3">
                                    <input v-if="mostrar_senha" type="text" class="form-control" placeholder="Senha"
                                        name="senha" aria-label="Senha" aria-describedby="button-addon2"
                                        v-model="usuarios_cadastrados.senha">
                                    <input v-else type="password" class="form-control" placeholder="Senha" name="senha"
                                        aria-label="Senha" aria-describedby="button-addon2"
                                        v-model="usuarios_cadastrados.senha">
                                    <button @click="alternarExibicaoSenha()" class="btn btn-outline-primary" type="button"
                                        id="senha">
                                        <i class="fa-solid"
                                            :class="{ 'fa-eye-slash': mostrar_senha, 'fa-eye': !mostrar_senha }"></i>
                                    </button>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <button class="btn btn-primary float-end mt-5" @click.prevent="fazerLogin()">Fazer
                                        login</button>
                                </div>
                            </div>

                            <div class="form-row mt-3 mb-3 text-center">
                                <small>Ainda não tem conta? <router-link class="text-primary"
                                        to="/cadastro">Cadastre-se</router-link> agora
                                    mesmo!</small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import axios from 'axios'

@Options({
    components: {
    },
})
export default class Login extends Vue {

    usuarios_cadastrados = { email: '', senha: '' }
    mostrar_senha = false
    senha = ''
    mensagem_erro_login = ''

    alternarExibicaoSenha() {
        this.mostrar_senha = !this.mostrar_senha
    }

    fazerLogin() { //metodo fazer login
        // Verifica se o email e a senha foram preenchidos
        if (!this.usuarios_cadastrados.email || !this.usuarios_cadastrados.senha) {
            this.mensagem_erro_login = 'Por favor, preencha seu e-mail e senha.'
            setTimeout(() => {
                this.mensagem_erro_login = ''
            }, 5000)
        }

        // Cria um objeto FormData para enviar os dados de login
        const formData = new FormData()
        formData.append('email', this.usuarios_cadastrados.email)
        formData.append('senha', this.usuarios_cadastrados.senha)

        // Envia os dados de login para o servidor
        axios.post('http://localhost/Projetos/hotel_salvador/src/backend/login.php', formData)
            .then(res => {
                // Se o login for válido, redireciona para a página de dashboard
                if (res.data.status === 'OK') {
                    this.$router.push('/dashboard')
                } else {
                    // Caso contrário, exibe uma mensagem de erro
                    this.mensagem_erro_login = res.data.mensagem
                    setTimeout(() => {
                        this.mensagem_erro_login = ''
                    }, 5000)
                }
            })
            .catch(error => {
                console.error(error)
                this.mensagem_erro_login = 'Ocorreu um erro ao fazer o login. Por favor, tente novamente mais tarde.'
                setTimeout(() => {
                    this.mensagem_erro_login = ''
                }, 5000)
            })
    }
}
</script>

<style lang="scss" scoped>
@import '@/scss/forms_index.scss';
</style>