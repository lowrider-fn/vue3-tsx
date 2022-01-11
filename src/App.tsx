import { defineComponent, onMounted } from 'vue';
import { RouterView, useRouter, useRoute } from 'vue-router';

import { Header } from '@/components/Header';
import { useStore, AuthAction, AuthGetter } from '@/store';

import { RoutePath } from './router';
import c from './styles.scss';

export const App = defineComponent(() => {
  const { getters, dispatch } = useStore();
  const { push } = useRouter();
  const route = useRoute();

  const handleLogout = () => {
    dispatch(AuthAction.logout);
    push({ path: RoutePath.Auth });
  };

  onMounted(() => {
    dispatch(AuthAction.checkLogin);
  });

  return () => (
    <div id="app">
      <Header isAuth={getters[AuthGetter.IS_AUTH]} onLogout={handleLogout} />
      <main class={c.main}>
        <RouterView key={route.fullPath} />
      </main>
    </div>
  );
});
