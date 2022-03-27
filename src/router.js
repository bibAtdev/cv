import { createWebHistory, createRouter } from "vue-router";
import Resume from '@/views/Resume.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Resume,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;