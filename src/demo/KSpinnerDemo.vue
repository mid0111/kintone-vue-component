<template>
  <div class="components">
    <h3>basic</h3>
    <div class="box">
      <k-button text="normal" @click="show" />
      <k-button text="ring" @click="showRing" />
    </div>
    <k-spinner :visible="normalLoading" />
    <k-spinner type="ring" :visible="ringLoading" />
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
      normalLoading: false,
      ringLoading: false
    };
  },

  methods: {
    show() {
      this.normalLoading = true;
      document.addEventListener('click', () => (this.normalLoading = false));
    },
    showRing() {
      this.ringLoading = true;
      document.addEventListener('click', () => (this.ringLoading = false));
    }
  }
};
</script>
