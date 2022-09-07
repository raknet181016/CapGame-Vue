export default {
  state: {
    modalQiwi: false,
    modalWithdrawal: false
  },
  getters: {
    getModalQiwi(state){
        return state.modalQiwi
    },
    getModalWithdrawal(state){
        return state.modalWithdrawal
    }
  },
  mutations: {
    SHOW_MODAL(state, modal){
        state[modal] = !state[modal]
    },

  },
  actions: {},
};
