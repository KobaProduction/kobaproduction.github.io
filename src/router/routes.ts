import type {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/', component: () => import('pages/IndexPage.vue')
      },
      {
        path: 'fp-info',
        name: 'Fingerprints Info',
        component: () => import('pages/FingerprintsPage.vue'),
      },
      {
        path: 'tg-webapp-info',
        name: 'Telegram WebApp',
        component: () => import('pages/TelegramWebAppView.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
