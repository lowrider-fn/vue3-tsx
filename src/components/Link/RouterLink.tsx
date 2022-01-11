import { RouterLink as RouterLinkBase } from 'vue-router';

import { Text } from '../Text';

import c from './styles.scss';

import type { LinkProps } from './interfaces';

export const RouterLink = ({ to, text }: LinkProps) => (
  <RouterLinkBase class={c.routerLink} to={to}>
    <Text type='small' weight="bold" value={text} />
  </RouterLinkBase>
);

