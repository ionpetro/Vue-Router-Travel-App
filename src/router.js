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
      path: '/destination/:slug',
      name: 'DestinationDetails',
      props: true,
      component: () =>
        import( /* webpackChunkName: "destinationDetails" */ './views/DestinationDetails'),
      children: [{
        path: ":experienceSlug",
        name: "experienceDetails",
        props: true,
        component: () =>
          import( /* webpackChunkName: "experienceDetails" */ './views/ExperienceDetails'),

      }]

    }
  ]
})
