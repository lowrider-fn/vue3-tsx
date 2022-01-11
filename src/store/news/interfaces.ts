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

export enum NewsMutation {
  ADD_NEWS = 'ADD_NEWS',
  DELETE_NEWS = 'DELETE_NEWS',
  SAVE_NEWS = 'SAVE_NEWS'
}

export type NewsMutations<S = NewsState> = {
  [NewsMutation.SAVE_NEWS]: Mutation<S, Array<NewsType>>;
  [NewsMutation.ADD_NEWS]: Mutation<S, NewsType>;
  [NewsMutation.DELETE_NEWS]: Mutation<S, number>;
};

type NewsActionsContext = AugmentedActionContext<NewsState, RootState, typeof NewsMutation, NewsMutations>;

export enum NewsAction {
  addNews = 'addNews',
  deleteNews = 'deleteNews',
  getNews = 'getNews',
  updateNews = 'updateNews'
}

export type NewsActions<C extends { commit: unknown }> = {
  [NewsAction.getNews]: Action<C>;
  [NewsAction.deleteNews]: Action<C, NewsType>;
  [NewsAction.updateNews]: Action<C, NewsType>;
  [NewsAction.addNews]: Action<C, NewsType>;
};

export enum NewsGetter {
  NEWS = 'NEWS'
}

export type NewsGetters = {
  [NewsGetter.NEWS]: (state: NewsState) => Array<NewsType>;
};

export type NewsStore<S = NewsState> = AugmentedStore<
S,
	typeof NewsMutation, NewsMutations<S>,
	typeof NewsAction, NewsActions<NewsActionsContext>,
	typeof NewsGetter, NewsGetters
>;

export type NewsModule = AugmentedModule<NewsState, RootState, NewsMutations, NewsActions<NewsActionsContext>, NewsGetters>;
