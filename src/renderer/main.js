// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import Vuelidate from 'vuelidate';
import Vuetify from 'vuetify';

import axios from 'axios';
import store from './store';

import 'material-design-icons/iconfont/material-icons.css';
import 'vuetify/dist/vuetify.css';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;

Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();
Vue.use(Vuetify);
Vue.use(Vuelidate);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  store,
  template: '<App/>',
}).$mount('#app');
