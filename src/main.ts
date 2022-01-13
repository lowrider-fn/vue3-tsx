import { createApp } from 'vue';

import { App } from './App';
import { router } from './router/router';
import { store } from './store';
import './assets/fonts/styles.css';
import './assets/styles/_normalize.scss';

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
