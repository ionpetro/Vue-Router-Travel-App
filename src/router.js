import Vue from 'vue';
import VueRouter from 'vue-router';
import Router from 'vue-router';
import Home from './views/Home.vue'
import store from './store.js'

Vue.use(VueRouter);


const router = new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      const position = {
        behavior: 'smooth'
      };
      if (to.hash) {
        position.selector = to.hash;
        if (to.hash === '#experience') {
          position.offset = {
            y: 140
          }
        }
        if (document.querySelector(to.hash)) {
          return position;
        }
        return false;
      }

    }
  },
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

      }],
      beforeEnter: (to, from, next) => {
        const exists = store.destinations.find(
          destination => destination.slug === to.params.slug
        )
        console.log(exists);
        exists ? next() : next({
          name: 'NotFound'
        });
      }

    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/User'),
      // use meta property to protect my route
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login')
    },
    {
      path: '404',
      alias: '*',
      name: 'NotFound',
      component: () => import('./views/NotFound'),

    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.user) {
      next({
        name: 'login'
      })
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
