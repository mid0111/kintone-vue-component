<template>
  <div class="k-fieldgroup">
    <div class="k-fieldgroup-container">
      <span
        role="button"
        :class="className"
        @click="handleToggleClick"
        @keyup="handleToggleClick"
      >
        <span :class="arrowClassName" />
        <span>{{ name }}</span>
      </span>
      <div class="k-fieldgroup-contents">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    value: Boolean
  },

  computed: {
    className() {
      return ['k-fieldgroup-label', 'label', this.value ? 'expand' : 'collapse']
        .join(' ')
        .trim();
    },

    arrowClassName() {
      return ['k-arrow', this.value ? 'down' : 'right'].join(' ').trim();
    }
  },

  methods: {
    handleToggleClick() {
      const toggleState = !this.value;
      this.$emit('input', toggleState);
    }
  }
};
</script>
<style scoped>
.k-fieldgroup-container {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-color: #e3e7e8;
  border-width: 1px;
  border-style: solid;
  display: inline-block;
  max-width: 98%;
  min-width: 517px;
  margin: 4px 10px 4px 8px;
  padding: 0px 8px;
}

.k-fieldgroup-label {
  display: inline-block;
  margin: 12px 0 8px 8px;
  padding: 4px 8px 4px 20px;
  color: #333;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid transparent;
  width: calc(100% - 20px);
}

.k-fieldgroup-label:focus {
  outline: 0;
  border: 1px solid #3498db;
}

.k-fieldgroup-contents {
  margin: 0 8px 12px 8px;
  white-space: nowrap;
  word-wrap: normal;
  overflow-x: auto;
}

.k-fieldgroup-label.collapse + .k-fieldgroup-contents {
  display: none;
}
</style>
