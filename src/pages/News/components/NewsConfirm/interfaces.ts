import type { ModalProps } from '@/components/Modal';

export interface NewsConfirmProps extends Pick<ModalProps, 'onClose'> {
  onConfirm: () => void;
}
