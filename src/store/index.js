import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    
  },
  mutations: {
    LOADING (state, status) {
      state.isLoading = status;
    }
  },
  actions: {
    updateLoading (context, status) {
      context.commit('LOADING', status);
    },
    getAllRoomsInfo (context, status) {
      context.commit('LOADING', true);

      axios({
        method: 'get',
        url: 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms',
        headers: {
          'Authorization': 'Bearer tTbi8Es6qw4Mm4aIpVArVsDm13jEhBPscofeWsI2ah5T9XW8KK2BNheL2U7L',
          'accept': 'application/json'
        }
      }).then(res => {
        console.log(res.data.items);
        context.commit('LOADING', false);
      })
    }
  },
  // modules: {
  // }
})
