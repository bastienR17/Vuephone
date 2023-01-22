import { createStore } from 'vuex'

export default createStore({
  state: {
contacts_enregistre: [
        {
          name: '',
          number: '',
            contacts: []
        },
        ],




  },
  getters: {
  },
  mutations: {
      addJournal(state, contact) {
        state.contacts_enregistre.push(contact)

    }




  },
  actions: {
  },
  modules: {
  }
})
