import Vue from "vue";
import Vuex from "vuex";
import posters from "./modules/posters.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    posters,
  },
});
