import { createStore } from 'vuex'

export default createStore({
  state: {
    items:[],
  },
  mutations: {
    deleteitems(state,index) {
      state.items.splice(index,1)
    },
    add(state,item) {
      state.items.push(item)
    },
    restart(state) {
      state.items = [];
    }
  },
  actions: {
  },
  modules: {
  }
})
