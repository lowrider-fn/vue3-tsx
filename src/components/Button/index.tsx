import { Text } from '../Text';

import c from './styles.scss';
import { ButtonMode, ButtonType } from './interfaces';

import type { ButtonProps } from './interfaces';

export const Button = ({
  mode = ButtonMode.info,
  type = ButtonType.button,
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

