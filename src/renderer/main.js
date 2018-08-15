// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import Vuelidate from 'vuelidate';
import Vuetify from 'vuetify';

import 'material-design-icons/iconfont/material-icons.css';
import 'vuetify/dist/vuetify.css';

Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();
Vue.use(Vuetify);
Vue.use(Vuelidate);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
});