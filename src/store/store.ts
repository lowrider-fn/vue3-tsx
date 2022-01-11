import { createStore, createLogger } from 'vuex';

import { auth } from './auth';
import { news } from './news';

import type { Store } from './interfaces';

const plugins = process.env.NODE_ENV !== 'production' ? [createLogger({})] : [];

export const store = createStore({
  plugins,
  modules: {
    auth,
    news
  }
});

export const useStore = () => store as Store;
