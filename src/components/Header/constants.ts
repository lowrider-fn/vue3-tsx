import { RoutePath } from '@/router/interfaces';

export const LINKS = [
  {
    path: RoutePath.Main,
    text: 'Что нового',
  },
  {
    path: RoutePath.NewsEditing,
    text: 'Редактировать',
    auth: true,
  },
  {
    path: RoutePath.Auth,
    text: 'Авторизоваться',
    guest: true,
  },
  {
    text: 'Выйти',
    auth: true,
  },
];
