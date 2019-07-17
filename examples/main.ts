import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Alert from '../packages/index';

Vue.config.productionTip = false;

Vue.use(Alert);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
