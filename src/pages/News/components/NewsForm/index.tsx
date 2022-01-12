
import { v4 } from 'uuid';

import { Button } from '@/components/Button';
import { Field } from '@/components/Field';
import { Form } from '@/components/Form';
import { Modal } from '@/components/Modal';
import { NewsField } from '@/store';
import { dayjs } from '@/utils/';
import { useForm } from '@/hooks';

import c from './styles.scss';

import type { NewsType } from '@/store';
import type { NewsFormProps } from './interfaces';

export const NewsForm = ({
  isEdit,
  data,
  onSend,
  onClose
}: NewsFormProps) => {
  const { form, setFormField } = useForm<typeof NewsField, NewsType>(data);

  const handleSend = () => {
    setFormField(dayjs().toISOString(), NewsField.date);

    if (!isEdit) {
      setFormField(v4(), NewsField.id);
    }

    onSend(form.value);
  };

  return (
    <Modal
      title={(isEdit && 'Редактирование новости') || 'Создание новости'}
      onClose={onClose}
      slot={{
        default: () => (
          <Form
            onSend={handleSend}
            slot={{
              default: () => (
                <>
                  <Field
                    name={NewsField.name}
                    label="Введите источник"
                    value={form.value.name}
                    placeholder='Введите источник'
                    onChange={setFormField}
                  />

                  <Field
                    name={NewsField.title}
                    tag='textarea'
                    label='Введите заголовок'
                    value={form.value.title}
                    placeholder='Введите заголовок'
                    onChange={setFormField}
                  />

                  <Field
                    name={NewsField.description}
                    tag='textarea'
                    label='Описание'
                    value={form.value.description}
                    placeholder='Введите описание'
                    onChange={setFormField}
                  />

                  <Field
                    name={NewsField.url}
                    label='Ссылка на новость'
                    value={form.value.url}
                    placeholder='Ввыедите ссылку '
                    onChange={setFormField}
                  />

                  <Field
                    name={NewsField.urlToImage}
                    label='Путь до картинки'
                    value={form.value.urlToImage}
                    placeholder='Введите путь'
                    onChange={setFormField}
                  />

                  <div class={c.controls}>
                    <Button
                      mode="info"
                      type="submit"
                      text='Сохранить'
                    />

                    <Button
                      mode="danger"
                      text='Отмена'
                      onClick={onClose}
                    />
                  </div>
                </>
              )
            }}
          />
        )
      }}
    />
  );
};
