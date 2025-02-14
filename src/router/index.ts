import HomeView from '@/views/HomeView.vue'
import { h } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects.index',
      component: () => import('@/views/ProjectsView.vue'),
    },
    {
      path: '/projects/:id',
      name: 'projects.show',
      component: () => import('@/views/ProjectsShowView.vue'),
    },
    {
      path: '/:catchAll(.*)*',
      name: 'not-found',
      component: h('p', { style: 'color: red;' }, 'Page not found'),
    },
  ],
})

export default router
