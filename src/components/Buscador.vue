<template>
    <input 
    type="text" 
    name=""
    placeholder="Ingrese pais"
    class="form-control my-3"
    v-model="buscador"
    @keyup="buscar"
    >
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex';
export default {
    setup() {
        const store = useStore();
        const buscador = ref('');

        const buscar = () => {
            store.dispatch('buscarPais', buscador.value)
        }

        return { buscador, buscar }
    },
}
</script>