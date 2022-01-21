import dayjs from 'dayjs';

import { Storage } from '@/utils';

import { findById } from './utils';
import json from './data.json';

import type { NewsModule, NewsType } from './interfaces';

export const news: NewsModule = {
  state    : { news: [] },
  mutations: {
    SAVE_NEWS(state, news) {
      state.news = news;
    }
  },
  actions: {
    getNews: ({ commit }) => {
      const data = Storage.getData<Array<NewsType>>('news');

      commit('SAVE_NEWS', data || <Array<NewsType>>json);

      if (!data) {
        Storage.setData('news', json);
      }
    },

    deleteNews: (store, form) => {
      const { news } = store.state;

      const call = (i: number) => {
        news.splice(i, 1);
        Storage.setData('news', news);
      };

      findById(news, call, form.id);

      store.dispatch('getNews');
    },

    addNews: (store, form) => {
      const { news } = store.state;

      news.push(form);

      Storage.setData('news', news);
    },

    updateNews: (store, form) => {
      const { news } = store.state;

      const call = (i: number) => {
        news.splice(i, 1, form);

        Storage.setData('news', news);
      };

      findById(news, call, form.id);

      store.dispatch('getNews');
    }
  },
  getters: {
    NEWS(state) {
      return state.news.sort((a, b) => dayjs(b.date).valueOf() - dayjs(a.date).valueOf());
    }
  }
};
