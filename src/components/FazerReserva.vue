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
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="col-form-label">Local que deseja se hospedar: <span
                                            class="text-danger">*</span></label>
                                    <select class="form-select mt-2 mb-1">
                                        <option value="">Selecione uma opção</option>
                                        <option v-for="l in local" :key="l" :value="l">{{ l }}</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label class="col-form-label">Tipo de suíte: <span class="text-danger">*</span></label>
                                    <select class="form-select mt-2">
                                        <option value="">Selecione uma opção</option>
                                        <option v-for="t in tipo_suite" :key="t" :value="t">{{ t }}</option>
                                    </select>
                                </div>
                                <div class="col-md-12">
                                    <label class="col-form-label">N do apartamento: <span
                                            class="text-danger">*</span></label>
                                    <select class="form-select mt-1 mb-1">
                                        <option value="">Selecione uma opção</option>
                                        <option v-for="ap in apartamento" :key="ap" :value="ap">{{ ap }}</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label class="col-form-label">Quantidade de adultos: <span
                                            class="text-danger">*</span></label>
                                    <select class="form-select mt-2 mb-1">
                                        <option value="">Selecione uma opção</option>
                                        <option v-for="adulto in adultos" :key="adulto" :value="adulto">{{ adulto }}
                                        </option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label class="col-form-label">Quantidade de crianças: <span
                                            class="text-danger">*</span></label>
                                    <select class="form-select mt-2">
                                        <option value="">Selecione uma opção</option>
                                        <option v-for="crianca in criancas" :key="crianca" :value="crianca">{{ crianca }}
                                        </option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label class="col-form-label">Check-in: <span class="text-danger">*</span></label>
                                    <div class="col">
                                        <input type="date" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label class="col-form-label">Check-out: <span class="text-danger">*</span></label>
                                    <div class="col">
                                        <input type="date" class="form-control">
                                    </div>
                                </div>
                                <div class="d-flex justify-content-end mt-5">
                                    <button class="btn btn-primary">Fazer Reserva</button>
                                </div>
                            </div>
                        </form>
                    </div>
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
export default class FazerReserva extends Vue {


    local = ['Barra', 'Itapuã', 'Pelourinho']
    tipo_suite = ['Simples', 'Conforto', 'Premium']
    apartamento = ['101', '102', '103', '104', '105', '106']
    adultos = ['1', '2', '3', '4', '5', '6', '7', '8']
    criancas = ['0', '1', '2', '3', '4', '5', '6', '7', '8']

}
</script>

<style lang="scss">@import '@/scss/dashboard.scss';
@import '@/scss/forms.scss';</style>