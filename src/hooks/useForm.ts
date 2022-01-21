import { useState } from './useState';

import type { DataType } from 'vue';

export const useForm = <E, T extends DataType<E, T>, >(data: T) => {
  const [form, setForm] = useState(data);

  const setFormField = <T>(value: T, name: keyof E) => {
    setForm({ ...form.value, ...{ [name]: value } });
  };

  return {
    form,
    setForm,
    setFormField
  };
};

