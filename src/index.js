import Vue from "vue";
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'

Vue.use(Vuex)
Vue.use(BootstrapVue)

import App from './App.vue'
import router from './router'
import './assets/sass/main.scss';
import 'es6-promise/auto'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
