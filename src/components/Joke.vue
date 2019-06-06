<template>
  <section>
    <h1>Dad Jokes</h1>
    <div class='card' v-for="joke in jokes">
      <h3>{{joke['joke']}}</h3>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
import store from '../store/store';

export default {
  name:"DadJoke",
  store,
  mounted(){
      axios.get( `https://icanhazdadjoke.com/search?limit=5`,{
        headers:{
          Accept:'application/json'
        }
      }).then((response)=>{
        this.jokes = response['data']['results']
      })
  },
  data(){
    return {
      jokes:null
    }
  }
}
</script>
