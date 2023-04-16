<template>
    <div class="container">
        <div class="row">
            <div class="col mt-5">
                <div class="alert alert-danger" role="alert">
                    <h4 class="alert-heading">Opss</h4>
                    <p>A rota que você tentou acessar não existe ou está desativada :/</p>
                    <hr>
                    <div class="justify-content-end d-flex">
                        <button class="btn btn-danger mb-0" @click="retornarParaPaginaAnterior()">Voltar para a página anterior</button>
                        <!--Botão que aciona o método de voltar para a rota anterior-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class PaginaNaoEncontrada extends Vue {
    public retornarParaPaginaAnterior() { //retornar para a página anterior
        window.history.go(-1)
    }
} 
</script>