
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router




import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Aide from '@/views/Aide'
import Community from '@/views/Community'
import Connection from '@/views/Connection'
import Publier from '@/views/Publier'
import Gerer from '@/views/Gerer'
import Playground from '@/views/Playground'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/aide',
      name: 'Aide',
      component: Aide
    },
    {
      path: '/community',
      name: 'Communiity',
      component: Community
    },
    {
      path: '/connexion',
      name: 'Connection',
      component: Connection
    },
    {
      path: '/publier',
      name: 'Publier',
      component: Publier
    },
    {
      path: '/gerer',
      name: 'Gerer',
      component: Gerer
    },
    {
      path: '/playground',
      name: 'Playground',
      component: Playground
    },

  ]
})