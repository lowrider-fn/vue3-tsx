import type { FormProps } from '@/components/Form/interfaces';
import type { NewsType, NewsField } from '@/store';

export interface NewsFormProps extends Pick<FormProps, 'onSend'> {
  title?: string;
  isEdit: boolean;
  form: NewsType;
  onClose: () => void;
  onChange: (value: string, name: NewsField) => void;
}
