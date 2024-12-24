import type {RouteRecordRaw} from 'vue-router';
import { EmptyLayout } from '../../shared/ui/layouts'

const routes: RouteRecordRaw[] = [
  {
    path: '/', component: () => import('pages/index')
  },
  {
    path: '/fp-info',
    name: 'Fingerprints Info',
    component: () => import('pages/FingerprintsPage.vue'),
  },
  {
    path: '/tg-webapp-info',
    name: 'Telegram WebApp',
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
