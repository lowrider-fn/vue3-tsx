import type { AuthState, AuthStore } from './auth';
import type { NewsState, NewsStore } from './news';

export type RootState = {
  auth: AuthState;
  news: NewsState;
};

export type Store = AuthStore<Pick<RootState, 'auth'>> & NewsStore<Pick<RootState, 'news'>>;
