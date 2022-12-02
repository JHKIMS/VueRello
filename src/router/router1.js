import Vue from 'vue';
import VueRouter from "vue-router";
import HomeVue from '../components/HomeVue.vue'
import LoginVue from '../components/LoginVue.vue'
import NotFoundVue from '../components/NotFoundVue.vue'

Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: "/", component: HomeVue },
    { path: "/login", component: LoginVue },
    { path: "*", component: NotFoundVue },
  ]
});


export default router