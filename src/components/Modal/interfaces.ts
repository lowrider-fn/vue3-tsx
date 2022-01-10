import type { PropsWithSlot } from 'vue';

export type ModalProps = PropsWithSlot<{
  title: string;
  onClose: () => void;
}>;
