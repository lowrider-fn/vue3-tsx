
import { v4 } from 'uuid';

import { Button } from '@/components/Button';
import { Field } from '@/components/Field';
import { Form } from '@/components/Form';
import { Modal } from '@/components/Modal';
import { NewsField } from '@/store';
import { dayjs } from '@/utils/';

import c from './styles.scss';

import type { NewsFormProps } from './interfaces';

export const NewsForm = ({
  isEdit,
  form,
  onSend,
  onClose,
  onChange
}: NewsFormProps) => {
  const handleSend = () => {
    onChange(dayjs().toISOString(), NewsField.date);

    if (!isEdit) {
      onChange(v4(), NewsField.id);
    }

    onSend();
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
                    value={form.name}
                    placeholder='Введите источник'
                    onChange={onChange}
                  />

                  <Field
                    name={NewsField.title}
                    tag='textarea'
                    label='Введите заголовок'
                    value={form.title}
                    placeholder='Введите заголовок'
                    onChange={onChange}
                  />

                  <Field
                    name={NewsField.description}
                    tag='textarea'
                    label='Описание'
                    value={form.description}
                    placeholder='Введите описание'
                    onChange={onChange}
                  />

                  <Field
                    name={NewsField.url}
                    label='Ссылка на новость'
                    value={form.url}
                    placeholder='Ввыедите ссылку '
                    onChange={onChange}
                  />

                  <Field
                    name={NewsField.urlToImage}
                    label='Путь до картинки'
                    value={form.urlToImage}
                    placeholder='Введите путь'
                    onChange={onChange}
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
