<template>
  <div class="components">
    <h3>basic</h3>
    <k-button text="表示" @click="show" />
    <k-spinner :visible="loading" />
  </div>
</template>

<script>
import KButton from '../components/KButton.vue';
import KSpinner from '../components/KSpinner.vue';

export default {
  components: {
    KButton,
    KSpinner
  },

  data() {
    return {
      loading: false
    };
  },

  methods: {
    show() {
      this.loading = true;
      document.addEventListener('click', () => (this.loading = false));
    }
  }
};
</script>
