import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { defineCustomElements } from 'bs-components';
import './css/styles.less';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [
  'bs-alert',
  'bs-button',
  'bs-carousel',
  'bs-collapse',
  'bs-dropdown',
  'bs-modal',
  'bs-scrollspy',
  'bs-tab',
  'bs-tooltip'
];

defineCustomElements(window);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
