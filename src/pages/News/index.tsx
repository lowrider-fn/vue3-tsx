import { defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { Button } from '@/components/Button';
import { NewsAction, NewsGetter, useStore } from '@/store';
import { Text } from '@/components/Text';
import { useToggle, useForm } from '@/hooks';

import c from './styles.scss';
import { DEFAULT_FORM } from './constants';
import { NewsItem } from './components/NewsItem';
import { NewsConfirm } from './components/NewsConfirm';
import { NewsForm } from './components/NewsForm';

import type { NewsType, NewsField } from '@/store';

export const News = defineComponent(() => {
  const { getters, dispatch } = useStore();
  const { meta } = useRoute();

  const { form, setForm, setFormField } = useForm<typeof NewsField, NewsType>(DEFAULT_FORM);

  const { isShow: isShowConfirm, toggleShowing: toggleShowingConfirm } = useToggle();
  const { isShow: isShowForm, toggleShowing: toggleShowingForm } = useToggle();
  const { isShow: isEdit, setIsShow: setIsEdit } = useToggle();

  onMounted(() => {
    dispatch(NewsAction.getNews);
  });

  const handleEdit = (news?: NewsType) => {
    const hasNews = Boolean(news?.id);

    setIsEdit(hasNews);
    setForm((hasNews && news) || DEFAULT_FORM);
    toggleShowingForm();
  };

  const handleConfirm = () => {
    dispatch(NewsAction.deleteNews, form.value);
    toggleShowingConfirm();
  };

  const handleDelete = (news: NewsType) => {
    setForm(news);
    toggleShowingConfirm();
  };

  const handleSend = () => {
    dispatch((isEdit.value && NewsAction.updateNews) || NewsAction.addNews, form.value);
    toggleShowingForm();
  };

  return () => (
    <div class={c.news}>
      <div class={c.control}>
        <Text
          tag="h1"
          type='h1'
          value={meta.title}
        />

        {meta.auth && (
          <Button
            mode="success"
            text='Создать'
            onClick={handleEdit}
          />
        )}
      </div>

      {
        getters[NewsGetter.NEWS].map((news, i) => (
          <NewsItem
            key={i}
            news={news}
            hasAuthRoute={meta.auth}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))
      }

      {
        meta.auth && (
          (
            isShowConfirm.value && (
              <NewsConfirm
                onClose={toggleShowingConfirm}
                onConfirm={handleConfirm}
              />
            )
          )
          || (
            isShowForm.value && (
              <NewsForm
                isEdit={isEdit.value}
                form={form.value}
                onClose={toggleShowingForm}
                onSend={handleSend}
                onChange={setFormField}
              />
            )
          )
        )}
    </div>
  );
});

