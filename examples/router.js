import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import {
  Home,
  About
} from './pages';
const routes = [
  { path: '', component: Home },
  { path: '/about', component: About }
];

export const router = new VueRouter({
  mode: 'hash',
  routes
});
