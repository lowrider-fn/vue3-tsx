import { readonly, shallowRef } from 'vue';

import type { Ref } from 'vue';

export function useState<T>(initialState: T): [Readonly<Ref<T>>, (val: T) => void] {
  const state = shallowRef(initialState);

  const setState = (newState: T) => {
    state.value = newState;
  };

  return [
    readonly(state) as Readonly<Ref<T>>,
    setState
  ];
}
