import type {
  AugmentedActionContext,
  Mutation,
  AugmentedStore,
  AugmentedModule,
  Action,
} from 'vuex-types';
import type { RootState } from '../interfaces';

export enum AuthField {
  login = 'login',
  password = 'password',
}
export interface AuthData {
  password: string;
  login: string;
}

export type AuthState = {
  isAuth: boolean;
};

export enum AuthMutation {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}

export type AuthMutations<S = AuthState> = {
  [AuthMutation.LOGIN]: Mutation<S>;
  [AuthMutation.LOGOUT]: Mutation<S>;
};

type AuthActionsContext = AugmentedActionContext<AuthState, RootState, typeof AuthMutation, AuthMutations>;

export enum AuthAction {
  checkLogin = 'checkLogin',
  login = 'login',
  logout = 'logout',
}

export type AuthActions<C extends { commit: unknown }> = {
  [AuthAction.login]: Action<C, AuthData>;
  [AuthAction.checkLogin]: Action<C, undefined, Promise<void>>;
  [AuthAction.logout]: Action<C>;
};

export enum AuthGetter {
  IS_AUTH = 'IS_AUTH',
}

export type AuthGetters = {
  [AuthGetter.IS_AUTH]: (state: AuthState) => boolean;
};

export type AuthStore<S = AuthState> = AugmentedStore<
S,
  typeof AuthMutation, AuthMutations<S>,
  typeof AuthAction, AuthActions<AuthActionsContext>,
  typeof AuthGetter, AuthGetters
>;

export type AuthModule = AugmentedModule<AuthState, RootState, AuthMutations, AuthActions<AuthActionsContext>, AuthGetters>;
