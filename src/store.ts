import Vue from 'vue';
import Vuex from 'vuex';
import IContact from './models/contact.model';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  },
  getters: {
    fullName: (state) => {
      return `Mr(s). ${state.firstName} ${state.lastName}`;
    },
  },
  mutations: {
    changeDataUser(state, clientData: IContact) {
      state.firstName = clientData.firstName;
      state.lastName = clientData.lastName;
      state.email = clientData.email;
      state.phone = clientData.phone;
    },
  },
  actions: {
    setUserData(context, clientData: IContact) {
      context.commit('changeDataUser', clientData);
    },
  },
});
