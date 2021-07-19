import { createStore } from 'vuex'

export default createStore({
  state: {
    paises: [],
    paisesFiltrados: []
  },
  mutations: {
    setPaises(state, payload){
      state.paises = payload;
    },
    setPaisesFiltrados(state, payload){
      state.paisesFiltrados = payload;
    }
  },
  actions: {
    async getPaises({ commit }){
      try{
        const res = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await res.json();

        commit('setPaises', data)

      } catch(e) {
        console.log(e);
      }
    },
    filtrarRegion( {commit, state}, region ){
      const filtro = state.paises.filter((pais) => pais.region.includes(region))
      commit('setPaisesFiltrados', filtro);
    },
    buscarPais({commit, state}, palabraClave){
      const palabraSana = palabraClave.toLowerCase();
      
      const filtro = state.paises.filter(pais => {
        let textoApi = pais.name.toLowerCase()
        if(textoApi.includes(palabraSana)){
          return pais;
        }
      })

      commit('setPaisesFiltrados', filtro);

    }
  },
  modules: {
  },
  getters: {
    topPaisesPoblacion(state){
      return state.paisesFiltrados.sort((a, b) => {
        return a.population < b.population ? 1 : -1
      })
    }
  }
})
