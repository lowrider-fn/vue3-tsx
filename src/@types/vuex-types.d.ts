declare module 'vuex-types' {
  import type {
    ActionContext as ActionContextBase,
    CommitOptions, DispatchOptions,
    Store as StoreBase,
    Module as BaseModule,
    MutationTree,
    ActionTree,
    GetterTree
  } from 'vuex';
  import type { SelfDocDataType } from 'vue';

  // Mutation
  export type Mutation<S, P = undefined> = (state: S, payload: P) => void;

  export type Commit<M extends SelfDocDataType<M>> = {
    commit<K extends keyof M, P extends Parameters<M[K]>[1]>(
      key: K,
      payload?: P,
      options?: CommitOptions
    ): ReturnType<M[K]>;
  };

  // Actions
  export type Action<C, D = undefined, R = void> = (context: C, data: D) => R;

  type Dispatch<A extends SelfDocDataType<A>> = {
    dispatch<K extends keyof A>(
      key: K,
      payload?: Parameters<A[K]>[1],
      options?: DispatchOptions
    ): ReturnType<A[K]>;
  };

  export type AugmentedActionContext<S, R, M, A> = Commit<M> & Dispatch<A> & Omit<ActionContextBase<S, R>, 'commit' | 'dispatch'>;

  // Getter
  type Getter = (state: any) => any;

  type Getters<G extends SelfDocDataType<G>> = {
    getters: {
      [K in keyof G]: ReturnType<G[K]>
    };
  };

  // Main
  export type AugmentedStore<S, M, A, G> = Omit<StoreBase<S>, 'getters' | 'commit' | 'dispatch'> & Commit<M> & Dispatch<A> & Getters<G>;

  export type AugmentedModule<S, R, M, A, G> = BaseModule<S, R> & {
    state?: S;
    mutations?: MutationTree<S> & M;
    actions?: ActionTree<S, R> & A;
    getters?: GetterTree<S, R> & G;
  };

}
