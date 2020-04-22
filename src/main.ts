import { Vue as _Vue } from 'vue-property-decorator';
import KButton from './components/KButton.vue';
import KDialog from './components/KDialog.vue';
import KDropDown from './components/KDropDown.vue';
import KIconButton from './components/KIconButton.vue';
import KItem from './components/KItem.vue';
import KLabel from './components/KLabel.vue';
import KText from './components/KText.vue';
import KTextButton from './components/KTextButton.vue';

interface Components {
  [key: string]: Record<string, any>;
}
const components: Components = {
  KButton,
  KDialog,
  KDropDown,
  KIconButton,
  KItem,
  KLabel,
  KText,
  KTextButton
};

export default {
  install(Vue: typeof _Vue, options?: any): void {
    Object.keys(components).forEach(name => {
      Vue.component(name, components[name]);
    });
  }
};
