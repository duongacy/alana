import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../views/HomeView.vue')
    },
    /* Photography */
    {
      path: '/photography/fashion',
      component: import('../views/photography/PhotographyFashionView.vue')
    },
    {
      path: '/photography/advertising',
      component: import('../views/photography/PhotographyAdvertisingView.vue')
    },
    {
      path: '/photography/editorials',
      component: import('../views/photography/PhotographyEditorialsView.vue')
    },
    /* Content */
    {
      path: '/content/fashion',
      component: import('../views/content/ContentFashionView.vue')
    },
    {
      path: '/content/advertising',
      component: import('../views/content/ContentAdvertisingView.vue')
    },
    {
      path: '/content/editorials',
      component: import('../views/content/ContentEditorialsView.vue')
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/sustainabilitiy',
      component: () => import('../views/SustainabilityView.vue')
    }
  ]
})

export default router
