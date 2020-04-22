<template>
  <div id="app">
    <h1>Demo</h1>
    <div class="main-container">
      <h2>k-button</h2>
      <div class="components">
        <h3>basic</h3>
        <div class="clearfix">
          <k-button
            class="float-left mr-2"
            text="保存"
            type="submit"
            @click="onEvent"
          />
          <k-button text="キャンセル" />
        </div>
        <h3>disabled</h3>
        <k-button text="保存" type="submit" disabled />
      </div>

      <h2>k-text</h2>
      <div class="components">
        <h3>basic</h3>
        <k-text
          v-model="value"
          placeholder="テキストを入力"
          @change="onEvent"
        />
        <h3>disabled</h3>
        <k-text v-model="value" placeholder="テキストを入力" :disabled="true" />
        <h3>width</h3>
        <k-text v-model="value" placeholder="テキストを入力" :width="200" />
      </div>
    </div>
  </div>
</template>

<script>
import KButton from './components/KButton.vue';
import KText from './components/KText.vue';

export default {
  name: 'App',
  components: {
    KButton,
    KText
  },

  data() {
    return {
      value: ''
    };
  },

  methods: {
    onEvent(value) {
      console.log(value);
    }
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
