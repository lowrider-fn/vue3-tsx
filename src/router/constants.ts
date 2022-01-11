import { News } from '@/pages/News';

import { RoutePath } from './interfaces';

import type { RouteRecordRaw } from 'vue-router';

const NotFound = () => import('@/pages/NotFound');
const Auth = () => import('@/pages/Auth');

export const routes: Array<RouteRecordRaw> = [
  {
    path: RoutePath.Main,
    component: News,
    meta: { title: 'Новости' }
  },
  {
    path: RoutePath.Auth,
    component: Auth,
    meta: {
      guest: true,
      title: 'Авторизация'
    }
  },
  {
    path: RoutePath.NewsEditing,
    component: News,
    meta: {
      auth: true,
      title: 'Редактирование'
    }
  },
  {
    path: RoutePath.NotFound,
    component: NotFound,
    meta: { title: 'Страница не найдена' }
  }
];
