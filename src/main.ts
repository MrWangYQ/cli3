import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import ElementUI from 'element-ui';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './assets/reset.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
