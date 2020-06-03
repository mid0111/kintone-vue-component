<template>
  <div class="k-dialog-container" :class="{ hidden: hidden }">
    <div class="k-dialog-wrapper">
      <div class="k-dialog-header">
        <slot name="header"></slot>
        <span class="k-dialog-close-button">
          <k-icon-button type="close" @click="onClose" />
        </span>
      </div>
      <div class="k-dialog-body" :style="{ height: bodyHeightValue + 'px' }">
        <slot></slot>
      </div>
      <div class="k-dialog-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import KIconButton from './KIconButton.vue';

const headerHeight = 70;
const fotterHeight = 78;
const bodyPadding = 30;
const margin = 25;

export default {
  components: {
    KIconButton
  },

  props: {
    visible: {
      type: Boolean,
      default: true,
      required: false
    },

    height: {
      type: Number,
      default: undefined,
      required: false
    }
  },

  computed: {
    hidden() {
      return this.visible === false;
    },

    bodyHeightValue() {
      return this.height
        ? this.height - (headerHeight + fotterHeight)
        : this.calcBodyHeight;
    }
  },

  data() {
    return {
      calcBodyHeight: 200
    };
  },

  methods: {
    onClose() {
      this.$emit('close');
    }
  },

  watch: {
    visible(current) {
      if (current) {
        this.calcBodyHeight =
          document.documentElement.clientHeight -
          (headerHeight + fotterHeight + bodyPadding + margin);
      }
    }
  }
};
</script>

<style scoped>
.k-dialog-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
}

.k-dialog-wrapper {
  min-width: 90vw;
  background-color: #fff;
}

.k-dialog-header {
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 90vw;
}

.k-dialog-body {
  border-bottom: #e3e7e8 solid 1px;
  border-top: #e3e7e8 solid 1px;
  background-color: #f7f9fa;
  padding: 15px 20px;
  overflow-y: auto;
  max-height: 70vh;
  max-width: 90vw;
}

.k-dialog-footer {
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 15px 20px;
  max-width: 90vw;
}

.hidden {
  display: none;
}
</style>
