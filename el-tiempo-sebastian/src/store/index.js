import { createStore } from 'vuex'

export default createStore({
  // Es como el data de vue, guarda las info que vamos a necesitar
  state: {
    frutas: [
      {nombre:'Manzana', cantidad:2},
      {nombre:'Peras', cantidad:4},
      {nombre:'Sandia', cantidad:2}
    ]
    
  },
  getters: {
  },
  // MUTACIONES, se ejecutan constantemente
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
