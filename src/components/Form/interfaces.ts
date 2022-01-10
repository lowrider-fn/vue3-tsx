import type { PropsWithSlot } from 'vue';

export type FormProps = PropsWithSlot<{
  hasStyles?: boolean;
  onSubmit: () => void;
}>;
