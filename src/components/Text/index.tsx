import { defineComponent, h } from 'vue';

import { TextTag, TextType } from './interfaces';
import c from './styles.module.scss';

import type { PropType } from 'vue';
import type { TextWeight } from './interfaces';

export const Text = defineComponent({
  name: 'Text',
  props: {
    type: {
      type: String as PropType<keyof typeof TextType>,
      default: TextType.regular,
    },
    tag: {
      type: String as PropType<keyof typeof TextTag>,
      default: TextTag.p,
    },
    weight: String as PropType<keyof typeof TextWeight>,
    value: {
      type: [Number, String],
      requred: true,
      default: '',
    },
    class: {
      type: String,
      default: '',
    },
    ellipsis: Boolean,

    margin: String,
  },
  setup(props) {
    return () => (
      h(props.tag, {
        class: `${c[props.type]} ${(props.ellipsis && c.ellipsis) || ''} ${(props.weight && c[props.weight]) || ''} ${props.class}`,
        style: { margin: props.margin },
      }, props.value)

    );
  },
});
