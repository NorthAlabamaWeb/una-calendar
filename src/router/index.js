import { createRouter, createWebHistory } from 'vue-router';
import AnnouncmentForm from '../components/AnnouncmentForm.vue';
import AnnouncementListing from '../components/AnnouncementListing.vue';

const routes = [
  { path: '/', component: AnnouncmentForm },
  { path: '/listings', component: AnnouncementListing }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;