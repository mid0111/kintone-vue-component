<template>
  <div class="components">
    <k-alert :text="text" :type="type" :visible="visible" @close="onClose" />
    <h3>success</h3>
    <k-button text="success アラート表示" @click="showSuccess" />
    <h3>error</h3>
    <k-button text="error アラート表示" @click="showError" />
  </div>
</template>

<script>
import KAlert from '../components/KAlert.vue';
import KButton from '../components/KButton.vue';

export default {
  components: {
    KAlert,
    KButton
  },

  data() {
    return {
      text: 'success アラート',
      type: 'success',
      visible: false
    };
  },

  methods: {
    showSuccess() {
      this.text = 'success アラート';
      this.type = 'success';
      this.visible = true;
    },

    showError() {
      this.text = 'error アラート';
      this.type = 'error';
      this.visible = true;
    },

    onClose() {
      this.visible = false;
    }
  }
};
</script>
