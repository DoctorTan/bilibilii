import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/index'

    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/Home/Index.vue')
    },
    {
      path: '/video/:id',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Video/Index.vue')
    }
  ]
})

export default router
