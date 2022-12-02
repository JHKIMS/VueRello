import Vue from "vue";
import router from './router/router1.js'

new Vue({
  el: "#app",
  router,
  render: h => h({template: '<router-view></router-view>'})
});
