import type { PropsWithClass } from 'vue';

export enum TextType {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  regular = 'regular',
  small = 'small'
}

export enum TextWeight {
  bold = 'bold',
  light = 'light',
  medium = 'medium'
}

export enum TextTag {
  figcaption = 'figcaption',
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  p = 'p',
  span = 'span'
}

export type TextProps = PropsWithClass<{
  type?: keyof typeof TextType;
  tag?: keyof typeof TextTag;
  weight?: keyof typeof TextWeight;
  value: number | string;
  ellipsis?: boolean;
  margin?: string;
}>;
