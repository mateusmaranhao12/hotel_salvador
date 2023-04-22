<template>
    <div class="reserva">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h3> Faça sua reserva agora mesmo!</h3>
                </div>
            </div>
        </div>
    </div>

    <div class="container formulario d-flex justify-content-center">
        <div class="card mx-auto mt-5 mb-5">
            <div class="card-body">
                <h3 class="card-title mb-5">Preencha os dados para fazer sua reserva</h3>
                <div class="container">
                    <div class="row">
                        <form>
                            <div v-if="mensagem_alerta" class="text-center" :class="mensagem_alerta.status">
                                {{ mensagem_alerta.mensagem }}
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="col-form-label">Local que deseja se hospedar: <span
                                            class="text-danger">*</span></label>
                                    <select v-model="reservas.local" class="form-select mt-2 mb-1">
                                        <option value="">Selecione uma opção</option>
                                        <option v-for="l in local" :key="l" :value="l">{{ l }}</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label class="col-form-label">Tipo de suíte: <span class="text-danger">*</span></label>
                                    <select v-model="reservas.suite" class="form-select mt-2">
                                        <option value="">Selecione uma opção</option>
                                        <option v-for="t in tipo_suite" :key="t" :value="t">{{ t }}</option>
                                    </select>
                                </div>
                                <div class="col-md-12">
                                    <label class="col-form-label">N do apartamento: <span
                                            class="text-danger">*</span></label>
                                    <select v-model="reservas.ap" class="form-select mt-1 mb-1">
                                        <option value="">Selecione uma opção</option>
                                        <option v-for="ap in apartamento" :key="ap" :value="ap">{{ ap }}</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label class="col-form-label">Quantidade de adultos: <span
                                            class="text-danger">*</span></label>
                                    <select v-model="reservas.qtd_adultos" class="form-select mt-2 mb-1">
                                        <option value="">Selecione uma opção</option>
                                        <option v-for="adulto in adultos" :key="adulto" :value="adulto">{{ adulto }}
                                        </option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label class="col-form-label">Quantidade de crianças: <span
                                            class="text-danger">*</span></label>
                                    <select v-model="reservas.qtd_criancas" class="form-select mt-2">
                                        <option value="">Selecione uma opção</option>
                                        <option v-for="crianca in criancas" :key="crianca" :value="crianca">{{ crianca }}
                                        </option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label class="col-form-label">Check-in: <span class="text-danger">*</span></label>
                                    <div class="col">
                                        <input v-model="reservas.checkin" type="date" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label class="col-form-label">Check-out: <span class="text-danger">*</span></label>
                                    <div class="col">
                                        <input v-model="reservas.checkout" type="date" class="form-control">
                                    </div>
                                </div>
                                <div class="d-flex justify-content-end mt-5">
                                    <button class="btn btn-primary" @click.prevent="enviarFormulario()">Fazer
                                        Reserva</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Footer from './Footer.vue'
import axios from 'axios'
import { MensagemAlerta } from '@/utils/interfaces'
import jwt_decode from '@/utils/jwt-decode'
import { TokenPayload } from '@/utils/interfaces'

@Options({
    components: {
        Footer
    },
})

export default class FazerReserva extends Vue {
    local = ['Barra', 'Itapuã', 'Pelourinho']
    tipo_suite = ['Simples', 'Conforto', 'Premium']
    apartamento = ['101', '102', '103', '104', '105', '106']
    adultos = ['1', '2', '3', '4', '5', '6', '7', '8']
    criancas = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
    mensagem_alerta: MensagemAlerta | null = null
    reservas = {
        local: '',
        suite: '',
        ap: '',
        qtd_adultos: '',
        qtd_criancas: '',
        checkin: '',
        checkout: '',
        usuario_id: '',
        usuario_nome: ''
    }

    idUsuario = ''
    nomeUsuario = ''

    created() {
        const token = localStorage.getItem('token')
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            axios.get('http://localhost/Projetos/hotel_salvador/src/backend/usuarios.php').then(response => {
                const token_decoded = jwt_decode(token) as TokenPayload
                this.idUsuario = token_decoded.id
                this.nomeUsuario = token_decoded.nome
                this.reservas.usuario_id = this.idUsuario // Define o id do usuário na reserva
                this.reservas.usuario_nome = this.nomeUsuario // Define o nome do usuário na reserva
            })
        }
    }

    public enviarFormulario() {
        if (this.validarFormulario()) {
            this.fazerReserva()
            this.limparFormulario()
        } else {
            this.mensagem_alerta = {
                status: 'alert alert-danger',
                mensagem: 'Erro. Preencha todos os campos!'
            }
            setTimeout(() => {
                this.mensagem_alerta = { status: '', mensagem: '' }
            }, 5000)
        }
    }

    private validarFormulario() {
        if (
            this.reservas.local === '' ||
            this.reservas.suite === '' ||
            this.reservas.ap === '' ||
            this.reservas.qtd_adultos === '' ||
            this.reservas.qtd_criancas === '' ||
            this.reservas.checkin === '' ||
            this.reservas.checkout === '' ||
            this.reservas.checkin > this.reservas.checkout
        ) {
            return false
        } else {
            return true
        }
    }

    public fazerReserva() {
        var fazer_reserva = this.toFormData(this.reservas)
        axios.post(
            'http://localhost/Projetos/hotel_salvador/src/backend/fazer_reserva.php', fazer_reserva
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
    }

    public limparFormulario() {
        this.reservas.local = ''
        this.reservas.suite = ''
        this.reservas.ap = ''
        this.reservas.qtd_adultos = ''
        this.reservas.qtd_criancas = ''
        this.reservas.checkin = ''
        this.reservas.checkout = ''
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

<style lang="scss">
@import '@/scss/dashboard.scss';
@import '@/scss/forms.scss';
</style>