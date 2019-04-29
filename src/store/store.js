import Vue from "vue";
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);

const persistedState = createPersistedState({
  key:"vue-boilerplate"
});

export default new Vuex.Store({
  state:{
    count:0,
    names:[
      "Bilbo",
      "Gandalf",
      "Greyworm",
      "Danny",
      "Samwise"
    ],
  },
  plugins:[persistedState],
  mutations:{
    increment(state){
      state.count++;
    },
    decrement: state => state.count--,
    addName(state,payload){
      state.names.push(payload.name)
    },
    removeName(state){
      state.names.pop();
    }
  }
})
