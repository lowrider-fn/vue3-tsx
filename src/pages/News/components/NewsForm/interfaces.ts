import type { NewsType } from '@/store';

export interface NewsFormProps {
  title?: string;
  isEdit: boolean;
  data: NewsType;
  onClose: () => void;
  onSend: (data: NewsType) => void;
}
