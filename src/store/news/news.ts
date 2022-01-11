import dayjs from 'dayjs';

import { Storage } from '@/utils';

import { NewsMutation } from './interfaces';
import { findById } from './utils';
import json from './data.json';

import type { NewsModule, NewsType } from './interfaces';

export const news: NewsModule = {
  state: { news: [] },
  mutations: {
    SAVE_NEWS: (state, news) => { state.news = news; },
    ADD_NEWS: (state, form) => state.news.push(form),
    DELETE_NEWS: (state, i) => state.news.splice(i, 1)
  },
  actions: {
    getNews: ({ commit }) => {
      const data = Storage.getData<Array<NewsType>>('news');

      if (data) {
        commit(NewsMutation.SAVE_NEWS, data);
      } else {
        commit(NewsMutation.SAVE_NEWS, <Array<NewsType>>json);

        Storage.setData('news', json);
      }
    },

    deleteNews: (store, form) => {
      const { news } = store.state;

      const call = (i: number) => store.commit(NewsMutation.DELETE_NEWS, i);

      findById(news, call, form.id);

      Storage.setData('news', news);
    },

    addNews: (store, form) => {
      const { news } = store.state;

      store.commit(NewsMutation.ADD_NEWS, form);

      Storage.setData('news', news);
    },

    updateNews: (store, form) => {
      const { news } = store.state;

      const call = (i: number) => {
        const arr = news;

        arr.splice(i, 1, form);
        store.commit(NewsMutation.SAVE_NEWS, arr);
      };

      findById(news, call, form.id);

      Storage.setData('news', news);
    }
  },
  getters: {
    NEWS(state) {
      return state.news.sort((a, b) => dayjs(b.date).valueOf() - dayjs(a.date).valueOf());
    }
  }
};
