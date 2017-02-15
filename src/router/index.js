import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Message from '../components/message.vue';
import Users from '../components/users.vue';
import Home from '../components/home.vue';
import GetTodo from '../components/GetTodo.vue';

Vue.component('app-message', Message);

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path:'/users/:teamId', component: Users},
    { path:'/storeExample', component: GetTodo},
    { path:'/message', component: Message},
  ],
  mode: 'history',
  linkActiveClass: 'is-active'
})
