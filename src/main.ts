import { Vue as _Vue } from 'vue-property-decorator';
import KText from './components/KText.vue';

interface Components {
  [key: string]: Record<string, any>;
}
const components: Components = { KText };

export default {
  install(Vue: typeof _Vue, options?: any): void {
    Object.keys(components).forEach(name => {
      Vue.component(name, components[name]);
    });
  }
};
