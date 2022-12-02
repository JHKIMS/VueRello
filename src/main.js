import Vue from "vue";
import router from './router/router1.js'
import App from './App.vue'

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
