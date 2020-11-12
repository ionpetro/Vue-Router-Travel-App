import Vue from 'vue';
import VueRouter from 'vue-router';
import Router from 'vue-router';
import Home from './views/Home.vue'

Vue.use(VueRouter);


export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
      props: true
    },
    {
      path: '/details/:slug',
      name: 'DestinationDetails',
      props: true,
      component: () =>
        import( /* webpackChunkName: "destinationDetails" */ './views/DestinationDetails')

    }
  ]
})
