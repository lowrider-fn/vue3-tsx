
import { ref } from 'vue';

import { Text } from '../Text';

import c from './styles.module.scss';

import type { ModalProps } from './interfaces';
import type { ChangeEvent } from 'vue';

export const Modal = ({
  title,
  onClose,
  slot,
}: ModalProps) => {
  const modalRef = ref<HTMLDivElement | null>(null);

  const handleClose = (e: ChangeEvent<Event>) => {
    if (modalRef?.value === e.target) {
      onClose();
    }
  };

  return (
    <div ref={modalRef} class={c.mask} onClick={handleClose}>
      <div class={c.modal}>
        <Text
          tag="h3"
          type="h3"
          value={title}
          margin='0 0 2rem'
        />
        {slot.default()}
      </div>
    </div>

  );
};
