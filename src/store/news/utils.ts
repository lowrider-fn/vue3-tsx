import type { NewsType } from './interfaces';

export const findById = (
  arr: Array<NewsType>,
  call: (i: number) => void,
  id: string
) => {
  arr.forEach((el, i) => {
    if (el.id === id) {
      call(i);
    }
  });
};
