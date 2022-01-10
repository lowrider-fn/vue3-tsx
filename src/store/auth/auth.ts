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
    },
  },
  actions: {
    login: ({ commit }, data) => {
      localStorage.setItem('auth', JSON.stringify(data));
      commit(AuthMutation.LOGIN);
    },

    async checkLogin({ commit }) {
      if (JSON.parse(localStorage.getItem('auth') || '')) {
        await commit(AuthMutation.LOGIN);
      }
    },

    logout: ({ commit }) => {
      localStorage.removeItem('auth');
      commit(AuthMutation.LOGOUT);
    },
  },
  getters: { IS_AUTH: state => state.isAuth },
};
