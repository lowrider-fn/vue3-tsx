declare module 'vuex-types' {
  import { createStore, createLogger } from 'vuex';

  import type {
    ActionContext as ActionContextBase,
    CommitOptions, DispatchOptions,
    Store as StoreBase,
    Module as BaseModule,
    MutationTree,
    ActionTree,
    GetterTree,
  } from 'vuex';
  import type { DataType } from 'vue';

  export { createStore, createLogger };

  // Mutation
  export type Mutation<S, P = undefined> = (state: S, payload: P) => void;

  type Commit<E, M extends DataType<E, M>> = {
    commit<K extends keyof M, P extends Parameters<M[K]>[1]>(
      key: K,
      payload: P,
      options?: CommitOptions
    ): ReturnType<M[K]>;

  };

  // Actions
  export type AugmentedActionContext<S, R, E, M extends DataType<E, M>> = {
    commit: <K extends keyof M> (key: K, payload?: Parameters<M[K]>[1]) => ReturnType<M[K]>;
  } & Omit<ActionContextBase<S, R>, 'commit'>;

  export type Action<C extends { commit: unknown }, D = undefined, R = void> = ({ commit }: C, data: D) => R;

  type Dispatch<E, A extends DataType<E, A>> = {
    dispatch<K extends keyof A>(
      key: K,
      payload?: Parameters<A[K]>[1],
      options?: DispatchOptions
    ): ReturnType<A[K]>;
  };

  // Getter
  type Getter = (state: any) => any;

  type Getters<E, G extends DataType<E, G>> = {
    getters: {
      [K in keyof G]: ReturnType<G[K]>
    };
  };

  // Main
  export type AugmentedStore<
    S,
    EM, M extends DataType<EM, Mutation<S>>,
    EA, A extends DataType<EA, any>,
    EG, G extends DataType<EG, Getter>
  > = Omit<StoreBase<S>, 'getters' | 'commit' | 'dispatch'>
  & Commit<EM, M>
  & Dispatch<EA, A>
  & Getters<EG, G>;

  export type AugmentedModule<S, R, M, A, G> = BaseModule<S, R> & {
    state?: S;
    mutations?: MutationTree<S> & M;
    actions?: ActionTree<S, R> & A;
    getters?: GetterTree<S, R> & G;
  };

}
