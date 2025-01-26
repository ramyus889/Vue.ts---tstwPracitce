import './css/style.css';

import { MotionPlugin } from '@vueuse/motion';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';

import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './router/routes.ts';

const app = createApp(App);

const pinia = createPinia();

const router = createRouter({
  history: createWebHistory(),
  routes
});

app.use(MotionPlugin);
app.use(router);
app.use(pinia);
app.mount('#app');
