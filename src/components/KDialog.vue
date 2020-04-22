<template>
  <div class="k-dialog-container" :class="{ hidden: hidden }">
    <div class="k-dialog-wrapper">
      <div class="k-dialog-header">
        <slot name="header"></slot>
        <span class="k-dialog-close-button">
          <k-icon-button type="close" @click="onClose" />
        </span>
      </div>
      <div class="k-dialog-body">
        <slot></slot>
      </div>
      <div class="k-dialog-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import KIconButton from './KIconButton.vue';

@Component({
  components: {
    KIconButton
  }
})
export default class KDialog extends Vue {
  @Prop({ default: true }) private visible?: boolean;

  private get hidden(): boolean {
    return this.visible === false;
  }

  private onClose() {
    this.$emit('close');
  }
}
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
