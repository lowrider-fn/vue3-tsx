import { ref } from 'vue';

import type { DataType } from 'vue';

export const useForm = <E, F extends Record<keyof E, unknown>>(data: DataType<E, F>) => {
  const form = ref<DataType<E, F>>({ ...data });

  const setForm = (data: DataType<E, F>) => {
    form.value = { ...data };
  };

  const setFormField = <T,>(value: T, name: keyof E) => {
    form.value = { ...form.value, ...{ [name]: value } };
  };

  return {
    form,
    setForm,
    setFormField,
  };
};
