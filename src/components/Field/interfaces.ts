export enum FieldType {
  password = 'password',
  text = 'text'
}

export interface FieldProps<T> {
  type?: keyof typeof FieldType;
  tag?: 'input' | 'textarea';
  value: number | string;
  name: T;
  placeholder: string;
  label: number | string;
  onChange: (value: string, name: T) => void;
}
