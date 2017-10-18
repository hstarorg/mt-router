<template>
  <div class="mt-router">
    <div class="mt-router-header"></div>
    <div class="mt-router-body">
      <div class="page-view" v-for="page in pageList">
        <component :is="page.name"></component>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  export default {
    name: 'mt-router-view',
    props: {
      router: null
    },
    data() {
      return {
        pageList: []
      };
    },
    mounted() {
      if (!this.router) {
        console.error('Must provider router.');
      }
      this.router.afterEach((to, from, next) => {
        this.pushNewPage(to);
      });
      this.pushNewPage(this.$route);
    },
    methods: {
      pushNewPage(route) {
        let comp = this._getComponentByRoute(route);
        this.pageList.push({ name: comp.name });
      },
      _getComponentByRoute(route) {
        let comp = route.matched[0].components.default;
        return comp;
      }
    }
  };
</script>
