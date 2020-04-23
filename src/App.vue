<template>
  <div id="app">
    <h1>Demo</h1>
    <navigation :components="components" />

    <div class="main-container">
      <component-title title="k-button" />
      <k-button-demo />

      <component-title title="k-dialog" />
      <k-dialog-demo />

      <component-title title="k-text" />
      <k-text-demo />
    </div>
  </div>
</template>

<script>
import Navigation from './demo/Navigation.vue';
import ComponentTitle from './demo/ComponentTitle.vue';
import KButtonDemo from './demo/KButtonDemo.vue';
import KDialogDemo from './demo/KDialogDemo.vue';
import KTextDemo from './demo/KTextDemo.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    ComponentTitle,
    KButtonDemo,
    KDialogDemo,
    KTextDemo
  },

  data() {
    return {
      components: ['k-button', 'k-dialog', 'k-text']
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
  text-align: start;
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

.mr-2 {
  margin-right: 4px;
}
</style>
