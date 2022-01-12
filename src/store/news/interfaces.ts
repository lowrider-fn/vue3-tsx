import type {
  AugmentedActionContext,
  Mutation,
  AugmentedStore,
  AugmentedModule,
  Action
} from 'vuex-types';
import type { RootState } from '../interfaces';

export enum NewsField {
  date = 'date',
  description = 'description',
  id = 'id',
  name = 'name',
  title = 'title',
  url = 'url',
  urlToImage = 'urlToImage'
}

export type NewsType = {
  id: string;
  name: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  date: string;
};

export type NewsState = {
  news: Array<NewsType>;
};

export type NewsMutations<S = NewsState> = {
  SAVE_NEWS: Mutation<S, Array<NewsType>>;
};

export type NewsActions<C = unknown> = {
  getNews: Action<C>;
  deleteNews: Action<C, NewsType>;
  updateNews: Action<C, NewsType>;
  addNews: Action<C, NewsType>;
};

type NewsActionsContext = AugmentedActionContext<NewsState, RootState, NewsMutations, NewsActions>;

export type NewsGetters = {
  NEWS: (state: NewsState) => Array<NewsType>;
};

export type NewsStore<S = NewsState> = AugmentedStore<S, NewsMutations<S>, NewsActions<NewsActionsContext>, NewsGetters>;

export type NewsModule = AugmentedModule<NewsState, RootState, NewsMutations, NewsActions<NewsActionsContext>, NewsGetters>;
