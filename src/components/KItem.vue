<template>
  <div
    @click="onClick"
    class="k-list-item"
    :class="{ 'k-list-item-selected': selected }"
  >
    <span class="k-icon-check">
      <svg>
        <path :d="mdiCheckBold" />
      </svg>
    </span>
    <span class="k-list-item-label">{{ label }}</span>
  </div>
</template>

<script>
import { mdiCheckBold } from '@mdi/js';

export default {
  props: {
    value: {
      type: String,
      default: null,
      required: false
    },
    label: {
      type: String,
      default: null,
      required: false
    },
    selected: {
      type: Boolean,
      default: false,
      required: false
    }
  },

  data() {
    return { mdiCheckBold };
  },

  methods: {
    onClick() {
      this.$emit('click', this.value);
    }
  }
};
</script>

<style scoped>
.k-list-item {
  position: relative;
  font-size: 14px;
  padding: 6px 16px 8px 10px;
  line-height: 1;
  cursor: pointer;
}
.k-list-item:hover,
.k-list-item:active {
  background-color: #e2f2fe;
}
.k-list-item-selected {
  background: none;
}
.k-list-item .k-icon-check {
  display: none;
}
.k-list-item .k-list-item-label {
  font-size: 13px;
  word-wrap: normal;
}
.k-list-item-selected span {
  color: #3498db;
}
.k-list-item-disable span {
  color: #888888;
}
.k-list-item-disable.k-list-item-selected .k-list-item-label,
.k-list-item-selected .k-list-item-label {
  margin-left: 16px;
}
.k-list-item-disable.k-list-item-selected .k-icon-check,
.k-list-item-selected .k-icon-check {
  display: block;
  font-size: 13px;
  line-height: 1.5;
  position: absolute;
}
.k-list-item-selected .k-icon-check svg {
  width: 24px;
  height: 24px;
  transform: scale(0.6);
  transform-origin: 0px 0px;
}
.k-list-item-selected .k-icon-check svg path {
  fill: #3498db;
}
.k-list-item-disable .k-icon-check svg path {
  fill: #888888;
}
</style>
