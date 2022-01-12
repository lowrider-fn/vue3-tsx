import { h } from 'vue';
import { v4 } from 'uuid';

import { Text } from '../Text';

import c from './styles.scss';

import type { FieldProps } from './interfaces';
import type { ChangeEvent } from 'vue';

export const Field = <T,>({
  type = 'text',
  tag = 'input',
  value,
  name,
  placeholder,
  label,
  onChange
}: FieldProps<T>) => {
  const id = v4();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value, name);

  return (
    <div class={c.field}>
      <label class={c.label} for={id}>
        <Text type='small' value={label} />

      </label>

      {
        h(tag, {
          id,
          placeholder,
          value,
          type,
          class: c[tag],
          onChange: handleChange
        })
      }
    </div>
  );
};
