export default {
  state: {
    money: 100,
  },
  getters: {
    getMoney(state) {
      return state.money;
    },
  },
  mutations: {
    CHANGE_MONEY(state, change) {
      state.money = change;
    },
  },
};
