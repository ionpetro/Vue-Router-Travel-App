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
      component: Home
    },
    {
      path: '/brazil',
      name: 'brazil',
      component: () => import( /* webpackChunkName: "brazil" */ './views/Brazil')
    },
    {
      path: '/hawaii',
      name: 'hawaii',
      component: () => import( /* webpackChunkName: "hawaii" */ './views/Hawaii')
    },
    {
      path: '/panama',
      name: 'panama',
      component: () => import( /* webpackChunkName: "panama" */ './views/Panama')
    },
    {
      path: '/jamaica',
      name: 'jamaica',
      component: () => import( /* webpackChunkName: "jamaica" */ './views/Jamaica')

    }
  ]
})
