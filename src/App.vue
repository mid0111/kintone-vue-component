<template>
  <div id="app">
    <h1>Demo</h1>
    <navigation :components="components" />

    <div class="main-container">
      <component-title title="k-alert" />
      <k-alert-demo />

      <component-title title="k-button" />
      <k-button-demo />

      <component-title title="k-checkbox" />
      <k-checkbox-demo />

      <component-title title="k-date-picker" />
      <k-date-picker-demo />

      <component-title title="k-dialog" />
      <k-dialog-demo />

      <component-title title="k-dropdown" />
      <k-dropdown-demo />

      <component-title title="k-field-group" />
      <k-field-group-demo />

      <component-title title="k-icon-button" />
      <k-icon-button-demo />

      <component-title title="k-label" />
      <k-label-demo />

      <component-title title="k-radio-button" />
      <k-radio-button-demo />

      <component-title title="k-spinner" />
      <k-spinner-demo />

      <component-title title="k-table" />
      <k-table-demo />

      <component-title title="k-text-button" />
      <k-text-button-demo />

      <component-title title="k-text" />
      <k-text-demo />
    </div>
  </div>
</template>

<script>
import './components';

import Navigation from './demo/Navigation.vue';
import ComponentTitle from './demo/ComponentTitle.vue';
import KAlertDemo from './demo/KAlertDemo.vue';
import KButtonDemo from './demo/KButtonDemo.vue';
import KCheckboxDemo from './demo/KCheckboxDemo.vue';
import KDatePickerDemo from './demo/KDatePickerDemo.vue';
import KDialogDemo from './demo/KDialogDemo.vue';
import KDropdownDemo from './demo/KDropdownDemo.vue';
import KFieldGroupDemo from './demo/KFieldGroupDemo.vue';
import KIconButtonDemo from './demo/KIconButtonDemo.vue';
import KLabelDemo from './demo/KLabelDemo.vue';
import KRadioButtonDemo from './demo/KRadioButtonDemo.vue';
import KSpinnerDemo from './demo/KSpinnerDemo.vue';
import KTableDemo from './demo/KTableDemo.vue';
import KTextDemo from './demo/KTextDemo.vue';
import KTextButtonDemo from './demo/KTextButtonDemo.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    ComponentTitle,
    KAlertDemo,
    KButtonDemo,
    KCheckboxDemo,
    KDatePickerDemo,
    KDialogDemo,
    KDropdownDemo,
    KFieldGroupDemo,
    KIconButtonDemo,
    KLabelDemo,
    KRadioButtonDemo,
    KSpinnerDemo,
    KTableDemo,
    KTextButtonDemo,
    KTextDemo
  },

  data() {
    return {
      components: [
        'k-alert',
        'k-button',
        'k-checkbox',
        'k-date-picker',
        'k-dialog',
        'k-dropdown',
        'k-field-group',
        'k-icon-button',
        'k-label',
        'k-radio-button',
        'k-spinner',
        'k-table',
        'k-text-button',
        'k-text'
      ]
    };
  }
};
</script>

<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 40px 60px;
}
@media screen and (max-width: 480px) {
  #app {
    margin: 40px 4px;
  }
}
nav,
.main-container {
  text-align: left;
}
</style>
<style>
a {
  color: #03a9f4;
  text-decoration: none;
}
.components {
  margin: 20px;
}

.float-left {
  float: left;
}

.clearfix::after {
  content: '';
  display: block;
  clear: both;
}

.box {
  display: flex;
}
.box > * {
  margin-left: 8px;
}

.mr-2 {
  margin-right: 4px;
}
</style>
