import Vue from 'vue';
import Vuex from 'vuex';

import userModule from './user/index';
import chatModule from './chat/index';

Vue.use(Vuex);

/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
const state = {
  nearbyRooms: []
};

const mutations = {
  setNearbyRooms(state, payload) {
    state.nearbyRooms = payload;
  }
};

const actions = {
  getNearbyRooms({ commit, rootState }) {
    return new Promise((resolve, reject) => {
      fetch(`${window.apiUrl}/rooms`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `bearer ${rootState.login.jwtToken}`
        }
      })
      .then(response => response.json())
      .then((json) => {
        commit('setNearbyRooms', json.rooms);
        resolve(json.rooms);
      })
      .catch(err => reject(err));
    });
  }
};

export default new Vuex.Store({
  modules: {
    user: userModule,
    chat: chatModule
  },
  state,
  mutations,
  actions
});
