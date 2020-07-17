<template>
  <div
    role="none"
    class="k-alert"
    :class="{
      'bg-success': type === 'success',
      'bg-danger': type !== 'success',
      show: visible
    }"
  >
    <div class="float-right">
      <k-icon-button type="close" color="gray" size="small" @click="onClose" />
    </div>
    {{ text }}
  </div>
</template>

<script>
import KIconButton from './KIconButton.vue';

export default {
  props: {
    text: {
      type: String,
      default: '',
      required: true
    },
    type: {
      type: String,
      default: 'error',
      required: false
    },
    visible: {
      type: Boolean,
      default: true,
      required: false
    }
  },

  components: {
    KIconButton
  },

  methods: {
    onClose() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.k-alert {
  position: fixed;
  margin: 0 10px auto;
  top: -200px;
  left: 0;
  right: 0;
  z-index: 1000;

  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12) !important;

  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);

  display: block;
  padding: 16px;
  background: #e74c3c;
  color: #f6f6f6;
}
.k-alert.show {
  top: 20px;
}
.k-alert.bg-danger {
  background: #e74c3c;
}
.k-alert.bg-success {
  background: #91c36c;
}
</style>
