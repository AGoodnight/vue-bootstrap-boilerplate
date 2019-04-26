import Vue from 'vue'
import Router from 'vue-router'
import home from './components/Home.vue';
import about from './components/About.vue';

Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/',
      name:'home',
      component:home
    },
    {
      path:'/about',
      name:'about',
      component:about
    }
  ]
});
