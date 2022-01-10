import { computed } from 'vue';

import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import { Link } from '@/components/Link';

import c from './styles.module.scss';

import type { NewsItemProps } from './interfaces';

export const NewsItem = ({
  hasAuthRoute,
  news,
  onDelete,
  onEdit,
}: NewsItemProps) => {
  const monthToString = (val: number) => {
    const mounths = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа',
      'Сентября', 'Октября', 'Ноября', 'Декабря'];
    let mounth;
    mounths.forEach((el, i) => {
      if (val === i) mounth = el;
    });
    return mounth;
  };

  const formatedDate = computed(() => {
    if (news.date) {
      const [date, time] = news.date.split('T');

      const [yyyy, mm, dd] = date.split('-');
      const [hh, min] = time.split(':');
      return `${dd} ${monthToString(Number(mm) - 1)} ${yyyy} ${hh}:${min}`;
    }
    return '';
  });

  return (
    <div class={c.item}>
      <Text
        tag="h2"
        type='h2'
        value={news.title}
        margin='0 0 1.2rem'
      />

      <div class={c.date}>
        <Text type='small' value={formatedDate.value} />
      </div>

      <div class={c.description}>
        <Text value={news.description} margin='0 0 1.5rem' />

        <Link to={news.url} text={`Читать подробнее ${news.name}`} />

      </div>

      <img
        class={c.img}
        src={news.urlToImage}
        alt={news.name}
      />

      {
        hasAuthRoute && (
          <div class={c.controls}>
            <Button
              text='Редактировать'
              mode="link-warn"
              onClick={() => onEdit(news)}
            />

            <Button
              text='Удалить'
              mode="link-danger"
              onClick={() => onDelete(news)}
            />
          </div>
        )
      }

    </div>
  );
};
