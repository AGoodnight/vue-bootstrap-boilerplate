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
  </div>
</template>

<script>
  export default {
    name: 'about',
    computed: {
    now: function () {
        return Date.now()
      }
    },
    methods:{
      addName(){
        this.items.push("New Name")
      }
    },
    data () {
      return {
        items:[
          "Bilbo",
          "Gandalf",
          "Greyworm",
          "Danny",
          "Samwise"
        ],
        headerID: "about-us-header",
        msg: 'This is an About Page'
      }
    }
  }
</script>
