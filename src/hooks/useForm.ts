import { ref } from 'vue';

import type { DataType } from 'vue';

export const useForm = <E, T extends DataType<E, T>,>(data: T) => {
  const form = ref<T>({ ...data });

  const setForm = (data: T) => {
    form.value = { ...data };
  };

  const setFormField = <T>(value: T, name: keyof E) => {
    form.value = { ...form.value, ...{ [name]: value } };
  };

  return {
    form,
    setForm,
    setFormField
  };
};

