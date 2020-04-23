<template>
  <div class="components">
    <h3>basic</h3>
    <k-text-button text="クリア" @click="onClick" />
  </div>
</template>

<script>
import KTextButton from '../components/KTextButton.vue';

export default {
  components: {
    KTextButton
  },

  methods: {
    onClick() {
      alert('クリック');
    }
  }
};
</script>
