import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';

import c from './styles.module.scss';

import type { NewsConfirmProps } from './interfaces';

export const NewsConfirm = ({
  onClose,
  onConfirm,
}: NewsConfirmProps) => (
  <Modal
    title='Вы уверенны в удалении?'
    onClose={onClose}
    slot={{
      default: () => (
        <div class={c.buttons}>
          <Button
            mode='danger'
            text='Удалить'
            onClick={onConfirm}
          />

          <Button
            mode='success'
            text='Отмена'
            onClick={onClose}
          />
        </div>
      ),
    }}
  />
);

