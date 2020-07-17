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

<script>
import * as mdi from '@mdi/js';

export default {
  props: {
    type: {
      type: String,
      default: 'insert',
      required: false
    },
    size: {
      type: String,
      default: 'medium',
      required: false
    },
    color: {
      type: String,
      default: 'gray',
      required: false
    },
    shape: {
      type: String,
      default: 'circle',
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    }
  },

  computed: {
    sizeClass() {
      let className = 'medium';
      if (this.size === 'small' || this.size === 'x-small') {
        className = this.size;
      }
      return className;
    },

    typeClass() {
      return this.type === 'remove' && this.colorClass === 'gray'
        ? 'hover-danger'
        : '';
    },

    colorClass() {
      const colors = ['gray', 'blue', 'red', 'green', 'transparent'];
      if (!this.color) {
        return 'gray';
      }
      return colors.indexOf(this.color) === -1 ? 'gray' : this.color;
    },

    shapeClass() {
      return this.shape === 'normal'
        ? 'normal'
        : this.shape === 'none'
        ? 'shape-none'
        : 'circle';
    },

    iconData() {
      let iconData = mdi.mdiPlus;
      switch (this.type) {
        case 'insert':
          break;
        case 'remove':
          iconData = mdi.mdiMinus;
          break;
        case 'close':
          iconData = mdi.mdiClose;
          break;
        case 'file':
          iconData = mdi.mdiFile;
          break;
        case 'right':
          iconData = mdi.mdiChevronRight;
          break;
        case 'left':
          iconData = mdi.mdiChevronLeft;
          break;
        default:
          iconData = mdi[this.type];
          break;
      }
      return iconData;
    }
  },

  methods: {
    onClick() {
      this.$emit('click');
    }
  }
};
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
.k-icon-btn.medium {
  width: 32px;
  height: 32px;
}
.k-icon-btn.small {
  width: 24px;
  height: 24px;
}
.k-icon-btn.small svg {
  transform: scale(0.75);
  transform-origin: -4px -4px;
}
.k-icon-btn.x-small {
  width: 16px;
  height: 16px;
}
.k-icon-btn.x-small svg {
  width: 24px;
  height: 24px;
  transform: scale(0.5);
  transform-origin: -4px -4px;
}
.k-icon-btn.shape-none {
  background-color: transparent !important;
}
.k-icon-btn.shape-none svg path {
  fill: #9e9e9e;
}
.k-icon-btn.shape-none:hover svg path {
  fill: #8f8f8f;
}
.k-icon-btn.shape-none.blue svg path {
  fill: #2d8dd6;
}
.k-icon-btn.shape-none.blue:hover svg path {
  fill: #1a649b;
}
.k-icon-btn.shape-none.red svg path {
  fill: #e44234;
}
.k-icon-btn.shape-none.red:hover svg path {
  fill: #d03d30;
}
.k-icon-btn.shape-none.green svg path {
  fill: #86bb61;
}
.k-icon-btn.shape-none.green:hover svg path {
  fill: #5f973a;
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
