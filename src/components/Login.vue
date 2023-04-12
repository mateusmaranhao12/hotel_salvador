<template>
    <div class="login d-flex justify-content-center">
        <div class="card mx-auto mt-5 mb-3">
            <div class="card-body">
                <h3 class="card-title mb-4">Faça Login agora mesmo para fazer suas reservas!</h3>
                <div class="container">
                    <div class="row">
                        <form>
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

@Options({
    components: {
    },
})
export default class Login extends Vue {

    usuarios_cadastrados = { email: '', senha: '' }
    mostrar_senha = false
    senha = ""

    alternarExibicaoSenha() {
        this.mostrar_senha = !this.mostrar_senha
    }

    fazerLogin() {
        this.$router.push('/dashboard')
    }
}
</script>

<style lang="scss" scoped>
@import '@/scss/forms_index.scss';
</style>