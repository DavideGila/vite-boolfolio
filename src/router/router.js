import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '../views/AppHome.vue'
import AppProjects from '../views/AppProjects.vue'
import SingleProject from '../views/SingleProject.vue'
import AppContact from '../views/AppContact.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
    {
      path: '/projects',
      name: 'projects',
      component: AppProjects
    },
    {
      path: '/projects/:slug',
      name: 'single-project',
      component: SingleProject
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: AppContact
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
