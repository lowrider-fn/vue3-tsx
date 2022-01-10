import type { NewsType, NewsField } from '@/store';

export interface NewsFormProps {
  title?: string;
  isEdit: boolean;
  form: NewsType;
  onClose: () => void;
  onChange: (value: string, name: NewsField) => void;
  onSubmit: () => void;
}
