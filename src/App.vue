<template>
  <div id="app">
    <h1>Demo</h1>
    <div class="main-container">
      <h2>k-text</h2>
      <div class="components">
        <h3>basic</h3>
        <k-text v-model="value" placeholder="テキストを入力" />
        <h3>disabled</h3>
        <k-text v-model="value" placeholder="テキストを入力" :disabled="true" />
        <h3>width</h3>
        <k-text v-model="value" placeholder="テキストを入力" :width="200" />
      </div>
    </div>
  </div>
</template>

<script>
import KText from './components/KText.vue';

export default {
  name: 'App',
  components: {
    KText
  },

  data() {
    return {
      value: ''
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

.main-container {
  text-align: start;
}

.components {
  margin: 20px;
}
</style>
