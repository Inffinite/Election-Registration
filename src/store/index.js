import Vue from 'vue'
import Vuex from 'vuex'
import myStore from './myStore'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  modules: {
    myStore
  }
})
