import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

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
    curRoom: {},
    checkDate: {
      checkin: '',
      checkout: '',
    },
    reservationData: {
      roomId: '',
      roomNum: 1,
      adultNum: 0,
      childNum: 0,
      totalPrice: 0,
      date: [],
      guestInfo: {
        firstName: '',
        lastName: '',
        name: '',
        gender: '',
        tel: '',
        email: '',
        breakfast: false,
        rentCar: false,
      },    
    },
    reservationResult: {
      success: false,
      data: {},
    }
  },
  mutations: {
    LOADING (state, status) {
      state.isLoading = status;
    },
    setRooms (state, status) {
      state.rooms = status;
    },
    setCurRoom (state, status) {
      state.curRoom = status;
    },
    setCheckDate (state, status) {
      state.checkDate = status;
      console.log('checkDate: ', state.checkDate);
    },
    setReservationData (state, status) {
      state.reservationData = Object.assign(state.reservationData, status);
      console.log('reservationData: ',state.reservationData);
    },
    setReservationResult (state, status) {
      state.reservationResult = status;

      // if (status.success) {
      //   let room = status.data.room[0];
      //   router.push(`/reservation/${room.id}/result`);
      // }
      router.push(`/reservation/${state.reservationData.roomId}/result`);
    },
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
    getRooms (context, status) {
      context.commit('LOADING', true);

      axios({
        method: 'get',
        url: 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms',
        headers
      }).then(res => {
        context.commit('setRooms', res.data.items);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        context.dispatch('updateLoading', false);
      })
    },
    getCurRoom (context, id) {
      context.commit('LOADING', true);

      axios({
        methods: 'get',
        url: `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${id}`,
        headers
      }).then(res => {
        console.log('current room: ', res.data.room[0]);
        context.commit('setCurRoom', res.data.room[0]);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        context.commit('LOADING', false);
      })
    },
    bookRoom (context, data) {
      const guestInfo = data.guestInfo;

      axios({
        method: 'post',
        url: `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${data.roomId}`,
        headers,
        data: {
          name: guestInfo.name,
          tel: guestInfo.tel,
          date: data.date,
        }
      })
      .then(res => {
        if (res.data.success) {
          let result = {
            success: true,
            data: res.data,
          };
          console.log('booking result: ', result);
          context.commit('setReservationResult', result);
        }
      })
      .catch(err => {
        let result = {
          success: false,
          data: err.response.data,
        };
        console.log('booking result: ', result);

        let message = result.data.message;
        if (message == '您所提供的訂房時間(date)不得大於 90 天。') result.data.message = '訂房時間不得大於 90 天';
        else if (message == '您所提供的訂房時間(date)不得小於或等於今天。') result.data.message = '訂房時間不得小於或等於今天';
        else if (message == '您所提供的訂房時間(date)已有訂房。') result.data.message = '您所提供的訂房時間已有訂房';

        console.log(result);

        context.commit('setReservationResult', result);
      })
    },
  },
})
