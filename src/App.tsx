import { defineComponent, onMounted } from 'vue';
import { RouterView, useRouter, useRoute } from 'vue-router';

import { Header } from '@/components/Header';
import { useStore } from '@/store';

import { RoutePath } from './router';
import c from './styles.scss';

export const App = defineComponent(() => {
  const { getters, dispatch } = useStore();
  const { push } = useRouter();
  const route = useRoute();

  const handleLogout = () => {
    dispatch('logout');
    push({ path: RoutePath.Auth });
  };

  onMounted(() => {
    dispatch('checkLogin');
  });

  return () => (
    <div id="app">
      <Header isAuth={getters.IS_AUTH} onLogout={handleLogout} />
      <main class={c.main}>
        <RouterView key={route.fullPath} />
      </main>
    </div>
  );
});
