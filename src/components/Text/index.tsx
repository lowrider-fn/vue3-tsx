import { h } from 'vue';

import { classes } from '@/utils';

import c from './styles.scss';

import type { TextProps } from './interfaces';

export const Text = ({
  type = 'regular',
  tag = 'p',
  weight,
  value,
  ellipsis,
  margin,
  className
}: TextProps) => (
  h(tag, {
    class: classes(c[type], {
      [c.ellipsis]: Boolean(ellipsis),
      [c[String(weight)]]: Boolean(weight)
    }, className),
    style: { margin }
  }, value)
);

