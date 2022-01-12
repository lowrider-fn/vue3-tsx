
export enum ButtonMode {
  button = 'button',
  danger = 'danger',
  info = 'info',
  'link-danger' = 'link-danger',
  'link-info' = 'link-info',
  'link-success' = 'link-success',
  'link-warn' = 'link-warn',
  success = 'success'
}

export interface ButtonProps {
  text: string;
  type?: 'button' | 'submit';
  mode?: keyof typeof ButtonMode;
  onClick?: () => void;
}
