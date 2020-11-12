import Vue from 'vue';
import VueRouter from 'vue-router';
import Router from 'vue-router';
import Home from './views/Home.vue'

Vue.use(VueRouter);


export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: 'details/:id',
      name: 'DestinationDetails',
      component: () =>
        import( /* webpackChunkName: "destinationDetails" */ './views/DestinationDetails')

    }
  ]
})
