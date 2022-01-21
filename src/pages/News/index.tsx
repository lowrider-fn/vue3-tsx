import { defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { Button } from '@/components/Button';
import { useStore } from '@/store';
import { Text } from '@/components/Text';
import { useToggle } from '@/hooks';
import { useState } from '@/hooks/useState';

import c from './styles.scss';
import { DEFAULT_FORM } from './constants';
import { NewsItem } from './components/NewsItem';
import { NewsConfirm } from './components/NewsConfirm';
import { NewsForm } from './components/NewsForm';

import type { NewsType } from '@/store';

export const News = defineComponent(() => {
  const { getters, dispatch } = useStore();
  const { meta } = useRoute();

  const [form, setForm] = useState(DEFAULT_FORM);

  const { isShow: isShowConfirm, toggleShowing: toggleShowingConfirm } = useToggle();
  const { isShow: isShowForm, toggleShowing: toggleShowingForm } = useToggle();
  const { isShow: isEdit, setIsShow: setIsEdit } = useToggle();

  onMounted(() => {
    dispatch('getNews');
  });

  const handleEdit = (news?: NewsType) => {
    const hasNews = Boolean(news?.id);

    setIsEdit(hasNews);
    setForm((hasNews && news) || DEFAULT_FORM);
    toggleShowingForm();
  };

  const handleConfirm = () => {
    dispatch('deleteNews', form.value);
    toggleShowingConfirm();
  };

  const handleDelete = (news: NewsType) => {
    setForm(news);
    toggleShowingConfirm();
  };

  const handleSend = (news: NewsType) => {
    dispatch((isEdit.value && 'updateNews') || 'addNews', news);
    toggleShowingForm();
  };

  return () => (
    <div class={ c.news }>
      <div class={ c.control }>
        <Text
          tag="h1"
          type='h1'
          value={ meta.title }
        />

        { meta.auth && (
          <Button
            mode="success"
            text='Создать'
            onClick={ handleEdit }
          />
        ) }
      </div>

      {
        getters.NEWS.map((news, i) => (
          <NewsItem
            key={ i }
            news={ news }
            hasAuthRoute={ meta.auth }
            onDelete={ handleDelete }
            onEdit={ handleEdit }
          />
        ))
      }

      {
        meta.auth && (
          (
            isShowConfirm.value && (
              <NewsConfirm
                onClose={ toggleShowingConfirm }
                onConfirm={ handleConfirm }
              />
            )
          )
          || (
            isShowForm.value && (
              <NewsForm
                isEdit={ isEdit.value }
                data={ form.value }
                onClose={ toggleShowingForm }
                onSend={ handleSend }
              />
            )
          )
        ) }
    </div>
  );
});

