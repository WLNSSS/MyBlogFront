// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'view-design';
import 'view-design/dist/styles/iview.css';
import axios from 'axios';
import Qs from "qs"
Vue.prototype.qs = Qs;　

Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(iView); 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
