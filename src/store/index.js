import { createStore } from "vuex";
import showModal from "./modules/showModal";
import globalMoney from "./modules/globalMoney";

const store = createStore({
  modules: {showModal, globalMoney},
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});

export default store;
