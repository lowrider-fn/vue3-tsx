import type {
  AugmentedActionContext,
  Mutation,
  AugmentedStore,
  AugmentedModule,
  Action
} from 'vuex-types';
import type { RootState } from '../interfaces';

export enum AuthField {
  login = 'login',
  password = 'password'
}
export interface AuthData {
  password: string;
  login: string;
}

export type AuthState = {
  isAuth: boolean;
};

export type AuthMutations<S = AuthState> = {
  LOGIN: Mutation<S>;
  LOGOUT: Mutation<S>;
};

export type AuthActions<C = unknown> = {
  login: Action<C, AuthData>;
  checkLogin: Action<C, undefined, Promise<void>>;
  logout: Action<C>;
};

type AuthActionsContext = AugmentedActionContext<AuthState, RootState, AuthMutations, AuthActions>;

export type AuthGetters = {
  IS_AUTH: (state: AuthState) => boolean;
};

export type AuthStore<S = AuthState> = AugmentedStore<S, AuthMutations<S>, AuthActions<AuthActionsContext>, AuthGetters>;

export type AuthModule = AugmentedModule<AuthState, RootState, AuthMutations, AuthActions<AuthActionsContext>, AuthGetters>;
