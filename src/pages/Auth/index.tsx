import { useRoute, useRouter } from 'vue-router';
import { defineComponent } from 'vue';

import { Button } from '@/components/Button';
import { Field } from '@/components/Field';
import { AuthAction, useStore, AuthField } from '@/store';
import { RoutePath } from '@/router';
import { Text } from '@/components/Text';
import { Form } from '@/components/Form';
import { useForm } from '@/hooks';

import c from './styles.module.scss';
import { DEFAULT_FORM } from './constants';

import type { AuthData } from '@/store';

const Auth = defineComponent(() => {
  const { dispatch } = useStore();

  const { meta } = useRoute();
  const { push } = useRouter();
  const { form, setFormField } = useForm<typeof AuthField, AuthData>(DEFAULT_FORM);

  const handleSubmit = () => {
    dispatch(AuthAction.login, form.value);

    push({ path: RoutePath.NewsEditing });
  };

  return () => (
    <div class={c.auth}>
      <Text
        tag="h1"
        type='h1'
        value={meta.title}
        margin='0 0 2rem'
      />

      <Form
        hasStyles
        onSubmit={handleSubmit}
        slot={{
          default: () => (
            <>
              <Field
                name={AuthField.login}
                label='Логин'
                value={form.value.login}
                placeholder='Введите логин'
                onChange={setFormField}
              />
              <Field
                name={AuthField.password}
                label='Пароль'
                type='password'
                value={form.value.password}
                placeholder="Введите пароль"
                onChange={setFormField}
              />

              <div class={c.controls}>
                <Button
                  type='submit'
                  mode="info"
                  text='Войти'
                />
              </div>
            </>
          ),
        }}
      />
    </div>
  );
});

export default Auth;
