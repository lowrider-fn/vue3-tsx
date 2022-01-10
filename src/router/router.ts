import { createRouter, createWebHashHistory } from 'vue-router';

import { useStore } from '@/store';
import { News } from '@/pages/News';

import { RoutePath } from './interfaces';

import type { RouteRecordRaw } from 'vue-router';

const NotFound = () => import('@/pages/NotFound');
const Auth = () => import('@/pages/Auth');

const routes: Array<RouteRecordRaw> = [
  {
    path: RoutePath.Main,
    component: News,
    meta: { title: 'Новости' },
  },
  {
    path: RoutePath.Auth,
    component: Auth,
    meta: {
      guest: true,
      title: 'Авторизация',
    },
  },
  {
    path: RoutePath.NewsEditing,
    component: News,
    meta: {
      auth: true,
      title: 'Редактирование новостей',
    },
  },
  {
    path: RoutePath.NotFound,
    component: NotFound,
    meta: { title: 'Страница не найдена' },
  },
];

export const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(({ matched }, from, next) => {
  const isAuth = useStore().getters.IS_AUTH;

  if (!isAuth && matched.some(({ meta }) => meta.auth)) {
    next(RoutePath.Auth);
  } else if (isAuth && matched.some(({ meta }) => meta.guest)) {
    next(RoutePath.NewsEditing);
  } else {
    next();
  }
});

router.afterEach(to => {
  document.title = to.meta.title;
});
