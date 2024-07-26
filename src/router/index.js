import { createRouter, createWebHistory } from 'vue-router';
import AnnouncmentForm from '../components/AnnouncementForm.vue';
import AnnouncementListing from '../components/AnnouncementListing.vue';
import AnnouncementCalendar from '../components/AnnouncementCalendar.vue';

const routes = [
  { path: '/', component: AnnouncmentForm },
  { path: '/listings', component: AnnouncementListing },
  { path: '/calendar', component: AnnouncementCalendar }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;