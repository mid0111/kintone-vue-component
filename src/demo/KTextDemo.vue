<template>
  <div class="components">
    <h3>basic</h3>
    <k-text v-model="value" placeholder="テキストを入力" @change="onChange" />
    <h3>disabled</h3>
    <k-text v-model="value" placeholder="テキストを入力" :disabled="true" />
    <h3>width</h3>
    <k-text v-model="value" placeholder="テキストを入力" :width="200" />
  </div>
</template>

<script>
import KText from '../components/KText.vue';

export default {
  components: {
    KText
  },

  data() {
    return {
      value: ''
    };
  },

  methods: {
    onChange(value) {
      alert('テキスト change: ', value);
    }
  }
};
</script>
