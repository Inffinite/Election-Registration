// import axios from 'axios'
// import url from './url'

export default {
    state: {
        code: ''
    },

    getters: {
        getCode(state) {
            return state.code;
        },
    },

    mutations: {
        SET_CODE(state, code) {
            state.code = code
        },
    },

    actions: {
        async addCode({ commit }, code) {
            commit('SET_CODE', code)
        },
    }
}