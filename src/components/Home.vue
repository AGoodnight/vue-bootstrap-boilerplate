<template>
  <div class="home">
    <h1 class='mt-4 display-4'>Welcome to Vue!</h1>
    <p class="lead mt-3 mb-4">
      Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
    </p>
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <p>
        <dl class="row">
          <dt class="col-sm-3">Description lists</dt>
          <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

          <dt class="col-sm-3">Euismod</dt>
          <dd class="col-sm-9">
            <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
            <p>Donec id elit non mi porta gravida at eget metus.</p>
          </dd>

          <dt class="col-sm-3">Malesuada porta</dt>
          <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

          <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
          <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

          <dt class="col-sm-3">Nesting</dt>
          <dd class="col-sm-9">
            <dl class="row">
              <dt class="col-sm-4">Nested definition list</dt>
              <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
            </dl>
          </dd>
        </dl>
      </p>
      <a href="#" class="btn btn-primary" v-on:click='increment'>Add</a>
      <a href="#" class="btn btn-primary" v-on:click='decrement'>Remove</a>
      <p>{{countPlusLocalState}}</p>
    </div>
  </div>
  </div>
</template>

<script>

  import { mapState } from 'vuex';
  import store from '../store/store';

  export default {
    name: 'home',
    store,
    computed:mapState({
      count: state => state.count,
      countAlias:'count',
      countPlusLocalState(state){
        return state.count + this.localCount
      }
    }),
    methods:{
      increment(){
        store.commit('increment');
      },
      decrement(){
        store.commit('decrement');
      }
    },
    data(){
      return{
        msg: 'This is a homepage',
        localCount:12
      }
    }
  }
</script>
