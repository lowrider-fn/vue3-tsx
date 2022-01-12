
import type { VNode } from 'vue';

declare module 'vue' {
  export type ChangeEvent<E> = E extends HTMLInputElement | HTMLTextAreaElement ?
    E & { target: { value: string } } :
    E & { target: unknown };

  export type DataType<E, D extends Record<keyof E, unknown>> = { [K in keyof E]: D[K] };
  export type SelfDocDataType<D extends Record<keyof D, unknown>> = { [K in keyof D]: D[K] };

  export type PropsWithSlot<P> = P & { slot: { default: () => VNode | string } };
  export type PropsWithClass<P> = P & { className?: string };

}
