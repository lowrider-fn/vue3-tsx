import { Text } from '../Text';

import c from './styles.scss';

import type { LinkProps } from './interfaces';

export const Link = ({ to, text }: LinkProps) => (
  <a class={ c.link } href={ to } target='_blank'>
    <Text type='small' weight="bold" value={ text } />
  </a>
);

