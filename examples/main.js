import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;
import { router } from './router';
import MtRouter from '../src';

Vue.use(MtRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
