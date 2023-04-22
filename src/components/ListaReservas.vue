<template>
    <div class="reserva">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h3>Lista de reservas</h3>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col">
                <table class="table table-hover mt-5">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Local</th>
                            <th scope="col">Suíte</th>
                            <th scope="col">Apartamento</th>
                            <th scope="col">Quantidade de Adultos</th>
                            <th scope="col">Quantidade de Crianças</th>
                            <th scope="col">Check-in</th>
                            <th scope="col">Check-out</th>
                            <th scope="col">Usuário que fez a reserva</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="reserva in reservas" :key="reserva.id">
                            <th scope="row">{{ reserva.id }}</th>
                            <td>{{ reserva.local }}</td>
                            <td>{{ reserva.suite }}</td>
                            <td>{{ reserva.ap }}</td>
                            <td>{{ reserva.qtd_adultos }}</td>
                            <td>{{ reserva.qtd_criancas }}</td>
                            <td>{{ formatDate(reserva.checkin) }}</td>
                            <td>{{ formatDate(reserva.checkout) }}</td>
                            <td>{{ reserva.usuario_nome }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import axios from 'axios'
import { Reservas } from '@/utils/interfaces'
import moment from 'moment'

@Options({
  components: {}
})
export default class ListaReservas extends Vue {

  reservas: Reservas[] = []

  created() {
    this.getReservas()
  }

  public getReservas() {
    axios.get<Reservas[]>('http://localhost/Projetos/hotel_salvador/src/backend/reservas.php')
      .then((res) => {
          this.reservas = res.data
      })
      .catch((err) => {
        console.error(err)
      })
  }

  public formatDate(date: string): string {
    return moment(date).format('DD/MM/YYYY')
  }
}

</script>

<style lang="scss">
@import '@/scss/dashboard.scss';
@import '@/scss/table.scss';
</style>