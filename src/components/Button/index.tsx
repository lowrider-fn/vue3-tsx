import { Text } from '../Text';

import c from './styles.scss';

import type { ButtonProps } from './interfaces';

export const Button = ({
  mode = 'info',
  type = 'button',
  text,
  onClick
}: ButtonProps) => (
  <button
    class={c[mode]}
    type={type}
    onClick={onClick}
  >
    <Text
      type='small'
      weight="bold"
      value={text}
    />
  </button>
);

