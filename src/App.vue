<template>
  <h1 class="text-center">Países API</h1>
  <Continentes />
  <Buscador />
  <CardList />
</template>

<script>
import CardList from './components/CardList'
import Continentes from './components/Continentes'
import Buscador from './components/Buscador'

export default {
  name: 'App',
  components: {
    CardList,
    Continentes,
    Buscador
  }
}
</script>
