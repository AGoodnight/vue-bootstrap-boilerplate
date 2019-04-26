import './assets/sass/main.scss';
import Vue from "vue";
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

const app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!"
  }
});

console.log("hello")
