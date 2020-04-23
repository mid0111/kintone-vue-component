<template>
  <button
    class="k-icon-btn"
    :class="[sizeClass, typeClass, colorClass, shapeClass]"
    @click.stop="onClick"
    :disabled="disabled"
  >
    <svg>
      <path :d="iconData" />
    </svg>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  mdiPlus,
  mdiMinus,
  mdiClose,
  mdiFile,
  mdiChevronRight,
  mdiChevronLeft
} from '@mdi/js';

@Component
export default class KIconButton extends Vue {
  @Prop({ default: 'insert' }) private type?: string;
  @Prop({ default: 'large' }) private size?: string;
  @Prop({ default: 'gray' }) private color?: string;
  @Prop({ default: 'circle' }) private shape?: string;
  @Prop({ default: false }) private disabled?: string;

  get sizeClass(): string {
    const className = this.size === 'small' ? 'small' : 'large';
    return className;
  }

  get typeClass(): string {
    return this.type === 'remove' && this.colorClass === 'gray'
      ? 'hover-danger'
      : '';
  }

  get colorClass(): string {
    const colors = ['gray', 'blue', 'red', 'green', 'transparent'];
    if (!this.color) {
      return 'gray';
    }
    return colors.indexOf(this.color) === -1 ? 'gray' : this.color;
  }

  get shapeClass(): string {
    return this.shape === 'normal' ? 'normal' : 'circle';
  }

  get iconData() {
    let iconData = mdiPlus;
    switch (this.type) {
      case 'insert':
        break;
      case 'remove':
        iconData = mdiMinus;
        break;
      case 'close':
        iconData = mdiClose;
        break;
      case 'file':
        iconData = mdiFile;
        break;
      case 'right':
        iconData = mdiChevronRight;
        break;
      case 'left':
        iconData = mdiChevronLeft;
        break;
    }
    return iconData;
  }

  onClick() {
    this.$emit('click');
  }
}
</script>

<style scoped>
.k-icon-btn {
  display: block;
  border: none;
  background-color: #eeeeee;
  padding: 0;
  cursor: pointer;
  outline: none;
  position: relative;
}
.k-icon-btn svg {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 24px;
  height: 24px;
}
.k-icon-btn svg path {
  fill: #9e9e9e;
}
.k-icon-btn:hover {
  background-color: #2d8dd6;
}
.k-icon-btn:hover svg path {
  fill: #ffffff;
}
.k-icon-btn.hover-danger:hover {
  background-color: #e44235;
}
.k-icon-btn.normal {
  border-radius: 2px;
}
.k-icon-btn.circle {
  border-radius: 50%;
}
.k-icon-btn.large {
  width: 32px;
  height: 32px;
}
.k-icon-btn.small {
  width: 16px;
  height: 16px;
}
.k-icon-btn.small svg {
  width: 24px;
  height: 24px;
  transform: scale(0.5);
  transform-origin: -4px -4px;
}
.k-icon-btn.blue {
  background-color: #2d8dd6;
}
.k-icon-btn.blue:hover {
  background-color: #1a649b;
}
.k-icon-btn.red {
  background-color: #e44234;
}
.k-icon-btn.red:hover {
  background-color: #d03d30;
}
.k-icon-btn.green {
  background-color: #86bb61;
}
.k-icon-btn.green:hover {
  background-color: #5f973a;
}
.k-icon-btn.blue svg path,
.k-icon-btn.red svg path,
.k-icon-btn.green svg path {
  fill: #ffffff;
}
.k-icon-btn.transparent {
  background-color: transparent;
}
.k-icon-btn.transparent:hover {
  color: #2d8dd6;
}
.k-icon-btn.transparent svg path {
  fill: #9e9e9e;
}
.k-icon-btn:disabled,
.k-icon-btn:disabled:hover {
  background-color: #dbdcdd;
  cursor: not-allowed;
  box-shadow: none;
}
.k-icon-btn:disabled svg path,
.k-icon-btn:disabled:hover svg path {
  fill: #bababa;
}
</style>
