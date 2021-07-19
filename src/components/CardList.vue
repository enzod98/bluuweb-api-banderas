<template>
  <div class="row">
      <div 
        class="col-12"
        v-for="pais in paises"
        :key="pais.name"
        >
        <card :pais="pais" />
      </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex'
import Card from './Card.vue';


export default {
  components: { Card },
  setup() {
      const store = useStore();

      const paises = computed(() => {
          return store.getters.topPaisesPoblacion
      })

      onMounted( async() => {
          //dispatch sería para ejecutar una acción de nuestro store
          await store.dispatch('getPaises');
          await store.dispatch('filtrarRegion', 'Americas');
      })

      return { paises }
  },
};
</script>