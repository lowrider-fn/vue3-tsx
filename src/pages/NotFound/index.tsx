import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

import { Text } from '@/components/Text';

import c from './styles.module.scss';

export const NotFound = defineComponent(() => {
  const { meta } = useRoute();

  return () => (
    <div class={c.page}>
      <Text
        tag="h1"
        type='h1'
        value={meta.title}
        margin='0 0 1.5rem'
      />
    </div>
  );
});

export default NotFound;
