import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const headers = {
  'Authorization': 'Bearer tTbi8Es6qw4Mm4aIpVArVsDm13jEhBPscofeWsI2ah5T9XW8KK2BNheL2U7L',
  'accept': 'application/json',
  'Content-Type': 'application/json',
};

export default new Vuex.Store({
  state: {
    isLoading: false,
    rooms: [],
    currentRoomInfo: {},
    currentBooking: [],
    currentReservation: {},
    reservationInfo: {
      name: '',
      tel: '',
      date: [],
    }
  },
  mutations: {
    LOADING (state, status) {
      state.isLoading = status;
    },
    setRoomsInfo (state, status) {
      state.rooms = status;
    },
    setCurrentRoomInfo (state, status) {
      state.currentRoomInfo = status;
    },
    setCurrentBooking (state, status) {
      state.currentBooking = status;
      // console.log(state.currentBooking);
    },
    setCurrentReservation (state, status) {
      state.currentReservation = status;
    }
  },
  actions: {
    updateLoading (context, status) {
      if (status == false) {
        setTimeout(() => {
          context.commit('LOADING', status);
        }, 700);
      } else {
        context.commit('LOADING', status);
      }
    },
    getAllRoomsInfo (context, status) {
      context.commit('LOADING', true);

      axios({
        method: 'get',
        url: 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms',
        headers
      }).then(res => {
        context.commit('setRoomsInfo', res.data.items);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        context.dispatch('updateLoading', false);
      })
    },
    getSingleRoom (context, status) {
      context.commit('LOADING', true);
      const id = status;

      axios({
        methods: 'get',
        url: `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${id}`,
        headers
      }).then(res => {
        console.log(res.data.room[0]);
        context.commit('setCurrentRoomInfo', res.data.room[0]);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        context.commit('LOADING', false);
      })
    },
    roomBooking (context, status) {
      let obj = {
        name: status.name,
        tel: status.tel,
        date: [...status.date],
      };
      console.log(obj);

      axios({
        method: 'post',
        url: `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${status.roomId}`,
        headers,
        data: {
          name: status.name,
          tel: status.tel,
          date: [...status.date],
        }
      })
      .then(res => {
        if (res.data.success) {
          console.log('成功訂房');
          console.log(res.data);
        }
      })
      .catch(err => {
        console.log('訂房失敗');
        console.log(err.response.data);
      })
    }
  },
  // modules: {
  // }
})
