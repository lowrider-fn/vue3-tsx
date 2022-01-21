import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import { Link } from '@/components/Link';
import { dayjs, DDMMMMYYYYhhmm } from '@/utils';

import c from './styles.scss';

import type { NewsItemProps } from './interfaces';

export const NewsItem = ({
  hasAuthRoute,
  news,
  onDelete,
  onEdit
}: NewsItemProps) => (
  <div class={ c.item }>
    <Text
      tag="h2"
      type='h2'
      value={ news.title }
      margin='0 0 1.2rem'
    />

    <Text
      className={ c.date }
      type='small'
      value={ dayjs(news.date).format(DDMMMMYYYYhhmm) }
    />

    <div class={ c.description }>
      <Text value={ news.description } margin='0 0 1.5rem' />

      <Link to={ news.url } text={ `Читать подробнее ${news.name}` } />

    </div>

    <img
      class={ c.img }
      src={ news.urlToImage }
      alt={ news.name }
    />

    {
      hasAuthRoute && (
        <div class={ c.controls }>
          <Button
            text='Редактировать'
            mode="link-warn"
            onClick={ () => onEdit(news) }
          />

          <Button
            text='Удалить'
            mode="link-danger"
            onClick={ () => onDelete(news) }
          />
        </div>
      )
    }

  </div>
);
