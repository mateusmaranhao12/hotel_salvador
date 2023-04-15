<template>
    <div class="login d-flex justify-content-center">
        <div class="card mx-auto mt-5 mb-3">
            <div class="card-body">
                <h3 class="card-title mb-4">Cadastre-se agora mesmo para fazer suas reservas!</h3>
                <div class="container">
                    <div class="row">
                        <form>
                            <div v-if="mensagem_alerta" class="mt-3 mb-3 text-center" :class="mensagem_alerta.status">
                                {{ mensagem_alerta.mensagem }}
                            </div>
                            <div class="form-group">
                                <label for="nome">Nome <span class="text-danger">*</span></label>
                                <input type="text" ref="nome" placeholder="Nome" id="nome" class="form-control mb-3"
                                    name="nome" v-model="usuarios_cadastrados.nome" />
                            </div>

                            <div class="form-group">
                                <label for="email">E-mail <span class="text-danger">*</span></label>
                                <input type="text" ref="email" placeholder="E-mail" id="email" class="form-control mb-3"
                                    name="email" v-model="usuarios_cadastrados.email" />
                            </div>

                            <div class="form-group">
                                <label for="cpf">CPF <span class="text-danger">*</span></label>
                                <input type="text" ref="cpf" placeholder="CPF" id="cpf" class="form-control mb-3"
                                    maxlength="11" name="cpf" v-model="usuarios_cadastrados.cpf" />
                            </div>

                            <div class="form-group">
                                <label for="senha">Senha <span class="text-danger">*</span></label>
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
                                        @click.prevent="enviarFormulario()">Cadastrar-se</button>
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
import axios from 'axios'

interface MensagemAlerta {
    status: string
    mensagem: string
}

@Options({
    name: 'Cadastro',

    components: {
    },
})

export default class Cadastro extends Vue {

    usuarios_cadastrados = { nome: '', email: '', cpf: '', senha: '' }
    mostrar_senha = false
    senha = ''
    mensagem_alerta: MensagemAlerta | null = null

    public alternarExibicaoSenha() {
        this.mostrar_senha = !this.mostrar_senha
    }

    public enviarFormulario() { //enviar formulario

        if (this.validarFormulario()) {
            this.cadastrarUsuario();
        } else {
            this.mensagem_alerta = {
                status: 'alert alert-danger',
                mensagem: 'Erro. Preencha todos os campos!'
            }
        }

        setTimeout(() => {
            this.mensagem_alerta = { status: '', mensagem: '' }
        }, 5000)

    }

    private validarFormulario() { //verificar se todos os campos foram preenchidos
        if (
            this.usuarios_cadastrados.nome === '' ||
            this.usuarios_cadastrados.email === '' ||
            this.usuarios_cadastrados.cpf === '' ||
            this.usuarios_cadastrados.senha === ''
        ) {
            return false;
        } else {
            return true;
        }
    }

    private cadastrarUsuario() { //cadastro de usuários

        // Verificar se já existe um usuário com o mesmo e-mail ou CPF
        axios.get('http://localhost/Projetos/hotel_salvador/src/backend/verificar_usuario.php', {
            params: {
                email: this.usuarios_cadastrados.email,
                cpf: this.usuarios_cadastrados.cpf
            }
        }).then((res) => {
            if (res.data.status === 'erro' && res.data.usuario_existente) {
                // Já existe um usuário com as mesmas informações
                this.mensagem_alerta = {
                    status: 'alert alert-danger',
                    mensagem: 'Já existe um usuário com o mesmo e-mail ou CPF!'
                }
            } else {
                // Não existe um usuário com as mesmas informações, pode cadastrar um novo usuário
                var cadastrar_usuario = this.toFormData(this.usuarios_cadastrados)

                axios.post(
                    'http://localhost/Projetos/hotel_salvador/src/backend/cadastrar_usuario.php', cadastrar_usuario
                ).then((res) => {
                    if (res.data.status === 'sucesso') {
                        this.mensagem_alerta = {
                            status: 'alert alert-success',
                            mensagem: res.data.mensagem
                        }
                    } else if (res.data.status === 'erro') {
                        this.mensagem_alerta = {
                            status: 'alert alert-danger',
                            mensagem: res.data.mensagem
                        }
                    }
                    setTimeout(() => {
                        this.mensagem_alerta = { status: '', mensagem: '' }
                    }, 5000)
                })
                this.limparFormulario()
            }
        })
    }

    public limparFormulario() {
        this.usuarios_cadastrados.nome = ''
        this.usuarios_cadastrados.email = ''
        this.usuarios_cadastrados.cpf = ''
        this.usuarios_cadastrados.senha = ''
    }

    toFormData(obj: Record<string, any>): FormData {
        const liveFormData = new FormData();
        for (const key in obj) {
            liveFormData.append(key, obj[key])
        }
        return liveFormData
    }
}
</script>

<style lang="scss" scoped>
@import '@/scss/forms_index.scss';
</style>