import type { PropsWithSlot } from 'vue';

export type FormProps = PropsWithSlot<{
  hasStyles?: boolean;
  onSend: () => void;
}>;
