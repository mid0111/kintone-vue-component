import { Vue as _Vue } from 'vue-property-decorator';
import KButton from './KButton.vue';
import KDialog from './KDialog.vue';
import KDropdown from './KDropdown.vue';
import KIconButton from './KIconButton.vue';
import KItem from './KItem.vue';
import KLabel from './KLabel.vue';
import KText from './KText.vue';
import KTextButton from './KTextButton.vue';

interface Components {
  [key: string]: Record<string, any>;
}
const components: Components = {
  KButton,
  KDialog,
  KDropdown,
  KIconButton,
  KItem,
  KLabel,
  KText,
  KTextButton
};

export default {
  install(Vue: typeof _Vue): void {
    Object.keys(components).forEach(name => {
      Vue.component(name, components[name]);
    });
  }
};
