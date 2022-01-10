export enum FieldType {
  password = 'password',
  text = 'text'
}
export enum FieldTag {
  input = 'input',
  textarea = 'textarea'
}

export interface FieldProps<T> {
  type?: keyof typeof FieldType;
  tag?: keyof typeof FieldTag;
  value: number | string;
  name: T;
  placeholder: string;
  label: number | string;
  onChange: (value: string, name: T) => void;
}
