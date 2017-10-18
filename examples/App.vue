<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <hr>
    <mt-router-view :router="$router"></mt-router-view>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default {
    name: 'app',
    data() {
      return {
        pageArr: []
      };
    },
    watch: {
      $route(a, b, c) {
        this.setCurrentPage(this.$route);
      }
    },
    mounted() {
      this.setCurrentPage(this.$route);
    },
    methods: {
      setCurrentPage(route) {
        let pageName = this.getRouteComponentName(route);
        this.pageArr.push({ name: pageName });
      },
      getRouteComponentName(route) {
        let comp = route.matched[0].components.default;
        Vue.component(comp.name, comp);
        return comp.name;
      }
    }
  }
</script>
