import { createRouter, createWebHashHistory } from 'vue-router'
import ClavierView from "@/views/ClavierView.vue";




const routes = [
  {
    path: '/',
    name: 'clavier',
    component: ClavierView
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited
    component: () => import(/*  webpackChunkName: "about" */ '../views/ContactView.vue')
  },
  {
    path: '/journal',
    name: 'journal',
    component: () => import(/* webpackChunkName: "about" */ '../views/JournalView.vue')

  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
