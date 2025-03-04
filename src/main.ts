import './css/style.css';

import { MotionPlugin } from '@vueuse/motion';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';

import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './router/routes.ts';

const app = createApp(App);

const pinia = createPinia();

const router = createRouter({
  history: createWebHistory(),
  routes
});

const options = {};

app.use(Toast, options);
app.use(MotionPlugin);
app.use(router);
app.use(pinia);
app.mount('#app');
