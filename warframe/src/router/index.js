import { createRouter, createWebHistory } from 'vue-router'
import NewsView from '../views/NewsViews.vue'
import FeedbackView from '../views/FeedbackViews.vue'

const routes = [
  {
    path: '/',
    name: 'News',
    component: NewsView,
  },
  {
    path: '/feedback/new',
    name: 'Formulaire',
    component: feedbackViews,
  },
  {
    path: '/feedback',
    name: 'Avis',
    component: FeedbackView,
  },
  {
    path: 'about',
    name: 'A propos',
    component: ,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
})

export default router
