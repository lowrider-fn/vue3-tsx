import { AuthField } from '@/store';

import type { DataType } from 'vue';
import type { AuthData } from '@/store';

export const DEFAULT_FORM: DataType<typeof AuthField, AuthData> = {
  [AuthField.login]: '',
  [AuthField.password]: ''
};
