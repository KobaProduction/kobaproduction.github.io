import type {RouteRecordRaw} from 'vue-router';
import { EmptyLayout } from '@/app/ui/layouts'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('pages/index')
  },
  {
    path: '/fp-info',
    name: 'fp-info',
    component: () => import('pages/FingerprintsPage.vue'),
  },
  {
    path: '/tg-webapp-info',
    name: 'tg-webapp-info',
    component: () => import('pages/TelegramWebAppView.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/not-found'),
    meta: {
      layout: EmptyLayout
    }
  },
];

export default routes;
