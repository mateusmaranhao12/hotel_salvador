<template>
    <div class="login d-flex justify-content-center">
        <div class="card mx-auto mt-5 mb-3">
            <div class="card-body">
                <h3 class="card-title mb-4">Cadastre-se agora mesmo para fazer suas reservas!</h3>
                <div class="container">
                    <div class="row">
                        <form>

                            <div class="form-group">
                                <label for="nome">Nome</label>
                                <input type="text" ref="nome" placeholder="Nome" id="nome" class="form-control mb-3"
                                    name="nome" v-model="usuarios_cadastrados.nome" />
                            </div>

                            <div class="form-group">
                                <label for="email">E-mail</label>
                                <input type="text" ref="email" placeholder="E-mail" id="email" class="form-control mb-3"
                                    name="email" v-model="usuarios_cadastrados.email" />
                            </div>

                            <div class="form-group">
                                <label for="cpf">CPF</label>
                                <input type="text" ref="cpf" placeholder="CPF" id="cpf" class="form-control mb-3" name="cpf"
                                    v-model="usuarios_cadastrados.cpf" />
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
                                    <button class="btn btn-primary float-end mt-5"
                                        @click.prevent="cadastrarUsuario()">Cadastrar-se</button>
                                </div>
                            </div>

                            <div class="form-row mt-3 mb-3 text-center">
                                <small>Já tem cadastro?? <router-link class="text-primary" to="/login">Faça
                                        login</router-link> agora
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

    name: 'Cadastro',
    
    components: {
    },
})
export default class Cadastro extends Vue {

    usuarios_cadastrados = { nome: '', email: '', cpf: '', senha: '' }
    mostrar_senha = false
    senha = ''

    alternarExibicaoSenha() {
        this.mostrar_senha = !this.mostrar_senha
    }

    cadastrarUsuario() {
        console.log('Usuário cadastrado')
    }
}
</script>

<style lang="scss" scoped>
@import '@/scss/forms_index.scss';
</style>