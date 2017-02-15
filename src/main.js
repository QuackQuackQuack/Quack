import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import resources from './resources'
import _ from 'lodash'
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css';

/* eslint-disable no-new */
const app = new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})



export {app, router, store, resources}
