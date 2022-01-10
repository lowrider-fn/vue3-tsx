import { NewsMutation } from './interfaces';
import { findById } from './utils';
import json from './data.json';

import type { NewsModule, NewsType } from './interfaces';

export const news: NewsModule = {
  state: { news: [] },
  mutations: {
    SAVE_NEWS: (state, news) => { state.news = news; },
    ADD_NEWS: (state, form) => state.news.push(form),
    DELETE_NEWS: (state, i) => state.news.splice(i, 1),
  },
  actions: {
    getNews: ({ commit }) => {
      const data = localStorage.getItem('news');

      if (data && data.length > 0) {
        commit(NewsMutation.SAVE_NEWS, JSON.parse(data));
      } else {
        commit(NewsMutation.SAVE_NEWS, <Array<NewsType>>json);

        localStorage.setItem('news', JSON.stringify(json));
      }
    },

    deleteNews: (store, form) => {
      const { news } = store.state;

      const call = (i: number) => store.commit(NewsMutation.DELETE_NEWS, i);

      findById(news, call, form.id);

      localStorage.setItem('news', JSON.stringify(news));
    },

    addNews: (store, form) => {
      const { news } = store.state;

      store.commit(NewsMutation.ADD_NEWS, form);

      localStorage.setItem('news', JSON.stringify(news));
    },

    updateNews: (store, form) => {
      const { news } = store.state;

      const call = (i: number) => {
        const arr = news;

        arr.splice(i, 1, form);
        store.commit(NewsMutation.SAVE_NEWS, arr);
      };

      findById(news, call, form.id);

      localStorage.setItem('news', JSON.stringify(news));
    },
  },
  getters: {
    NEWS(state) {
      const toTimeStamp = (date: string) => Date.parse(new Date(date).toString());

      return state.news.sort((a, b) => toTimeStamp(b.date) - toTimeStamp(a.date));
    },
  },
};
