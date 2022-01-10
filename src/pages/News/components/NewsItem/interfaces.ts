import type { NewsType } from '@/store';

export interface NewsItemProps {
  hasAuthRoute?: boolean;
  news: NewsType;
  onEdit: (data: NewsType) => void;
  onDelete: (data: NewsType) => void;
}
