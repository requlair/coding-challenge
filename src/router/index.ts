import { createRouter, createWebHistory } from 'vue-router'
import OverviewPage from '../pages/OverviewPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      redirect: '/overview'
    },
    {
      path: '/overview',
      name: 'overview',
      component: OverviewPage,
      meta: {
        title: 'Overview',
      },    
    },
    {
      path: '/overview/details/:id',
      name: 'details',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/DetailsPage.vue'),
      props: route => ({ id: route.params.id}),
      meta: {
        title: 'Details',
      },
    
    }
  ]
})

export default router
