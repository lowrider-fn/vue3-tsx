import c from './styles.scss';

import type { FormProps } from './interfaces';

export const Form = ({ hasStyles, slot, onSend }: FormProps) => {
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    onSend();
  };

  return (
    <form onSubmit={ handleSubmit } class={ (hasStyles && c.style) || c.form }>
      { slot.default() }
    </form>
  );
};
