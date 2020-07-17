import KAlert from './KAlert.vue';
import KButton from './KButton.vue';
import KCheckbox from './KCheckbox.vue';
import KDatePicker from './DateTime/KDatePicker.vue';
import KDialog from './KDialog.vue';
import KDropdown from './KDropdown.vue';
import KFieldGroup from './KFieldGroup.vue';
import KIconButton from './KIconButton.vue';
import KItem from './KItem.vue';
import KLabel from './KLabel.vue';
import KRadioButton from './KRadioButton.vue';
import KSpinner from './KSpinner.vue';
import KTable from './KTable.vue';
import KText from './KText.vue';
import KTextButton from './KTextButton.vue';

import './common.scss';

const components = {
  KAlert,
  KButton,
  KCheckbox,
  KDatePicker,
  KDialog,
  KDropdown,
  KFieldGroup,
  KIconButton,
  KItem,
  KLabel,
  KRadioButton,
  KSpinner,
  KTable,
  KText,
  KTextButton
};

export default {
  install(Vue) {
    Object.keys(components).forEach((name) => {
      Vue.component(name, components[name]);
    });
  }
};
