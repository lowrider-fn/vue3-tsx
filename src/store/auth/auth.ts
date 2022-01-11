import { Storage } from '@/utils';

import { AuthMutation } from './interfaces';

import type { AuthModule } from './interfaces';

export const auth: AuthModule = {
  state: { isAuth: false },
  mutations: {
    LOGIN: state => {
      state.isAuth = true;
    },
    LOGOUT: state => {
      state.isAuth = false;
    }
  },
  actions: {
    login: ({ commit }, data) => {
      Storage.setData('auth', data);
      commit(AuthMutation.LOGIN);
    },

    async checkLogin({ commit }) {
      if (Storage.getData<boolean>('auth')) {
        await commit(AuthMutation.LOGIN);
      }
    },

    logout: ({ commit }) => {
      Storage.clear();
      commit(AuthMutation.LOGOUT);
    }
  },
  getters: { IS_AUTH: state => state.isAuth }
};
