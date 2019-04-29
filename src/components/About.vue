<template>
  <div class="about">
    <h1 v-bind:id="headerID">{{msg}}</h1>
    <h2>The current time is {{now}}</h2>
    <ol>
      <li v-for="item in items">
        {{item}}
      </li>
    </ol>
    <button v-on:click="addName">Add a Name</button>
    <button v-on:click="removeName">Remove a Name</button>
  </div>
</template>

<script>

  import { mapState } from 'vuex';
  import store from '../store/store';

  export default {
    name: 'about',
    store,
    computed:mapState({
      items(state){
        return state.names;
      },
      now() {
        return Date.now();
      }
    }),
    methods:{
      addName(){
        store.commit('addName',{
          name:"newName"
        });
      },
      removeName(){
        store.commit('removeName');
      }
    },
    data () {
      return {
        headerID: "about-us-header",
        msg: 'This is an About Page'
      }
    }
  }
</script>
