import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  /* Photography */
  {
    path: '/photography/fashion',
    name: 'photographyFashion',
    component: () => import('../views/photography/PhotographyFashionView.vue')
  },
  {
    path: '/photography/advertising',
    name: 'photographyAdvertising',
    component: () => import('../views/photography/PhotographyAdvertisingView.vue')
  },
  {
    path: '/photography/editorials',
    name: 'photographyEditorials',
    component: () => import('../views/photography/PhotographyEditorialsView.vue')
  },
  /* Content */
  {
    path: '/content/fashion',
    name: 'contentFashion',
    component: () => import('../views/content/ContentFashionView.vue')
  },
  {
    path: '/content/advertising',
    name: 'contentAdvertising',
    component: () => import('../views/content/ContentAdvertisingView.vue')
  },
  {
    path: '/content/editorials',
    name: 'contentEditorials',
    component: () => import('../views/content/ContentEditorialsView.vue')
  },

  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/sustainabilitiy',
    name: 'sustainability',
    component: () => import('../views/SustainabilityView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export const getRoute = (
  name:
    | 'home'
    | 'photographyFashion'
    | 'photographyAdvertising'
    | 'photographyEditorials'
    | 'contentFashion'
    | 'contentAdvertising'
    | 'contentEditorials'
    | 'about'
    | 'contact'
    | 'sustainability'
) => {
  return routes.find((route) => route.name === name)!
}

export default router
