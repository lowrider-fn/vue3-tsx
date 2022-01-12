import { Storage } from '@/utils';

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

      commit('LOGIN');
    },

    async checkLogin({ commit }) {
      if (Storage.getData<boolean>('auth')) {
        commit('LOGIN');
      }
    },

    logout: ({ commit }) => {
      Storage.clear();
      commit('LOGOUT');
    }
  },
  getters: { IS_AUTH: state => state.isAuth }
};
