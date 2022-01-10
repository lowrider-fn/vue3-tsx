import { NewsField } from '@/store';

import type { DataType } from 'vue';
import type { NewsType } from '@/store';

export const DEFAULT_FORM: DataType<typeof NewsField, NewsType> = {
  [NewsField.name]: '',
  [NewsField.id]: '',
  [NewsField.title]: '',
  [NewsField.description]: '',
  [NewsField.url]: '',
  [NewsField.urlToImage]: '',
  [NewsField.date]: '',
};
