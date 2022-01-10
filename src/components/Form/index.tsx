import c from './styles.module.scss';

import type { FormProps } from './interfaces';

export const Form = ({ hasStyles, slot, onSubmit }: FormProps) => {
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} class={(hasStyles && c.style) || c.form}>
      {slot.default()}
    </form>
  );
};
