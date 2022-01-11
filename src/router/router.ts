import { createRouter, createWebHashHistory } from 'vue-router';

import { useStore } from '@/store';

import { RoutePath } from './interfaces';
import { routes } from './constants';

export const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
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
