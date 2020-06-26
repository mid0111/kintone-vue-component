<template>
  <div class="k-input-outer">
    <input
      type="text"
      :value="value"
      :placeholder="placeholder"
      class="k-input-text"
      @change="onChange"
      @input="onInput"
      :disabled="disabled"
      :style="{ width: width + 'px' }"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
      required: true
    },
    placeholder: {
      type: String,
      default: '',
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    width: {
      type: Number,
      default: 120,
      required: false
    }
  },

  methods: {
    onChange(event) {
      this.$emit('change', event.target.value);
    },

    onInput(event) {
      this.$emit('input', event.target.value);
    }
  }
};
</script>

<style lang="css" scoped>
.k-input-outer {
  padding: 4px 8px;
}
.k-input-text {
  display: block;
  box-sizing: border-box;
  margin: 0;
  padding: 0 8px;
  height: 40px;
  outline: none;
  border: 1px solid #e3e7e8;
  background-color: #fff;
  box-shadow: 4px 4px 12px #f5f5f5 inset, -4px -4px 12px #f5f5f5 inset;
  font-size: 14px;
}
.k-input-text:disabled {
  cursor: not-allowed;
  background-color: #e7e6e6;
  color: #888888;
  box-shadow: none;
}
.k-input-text:focus {
  border-color: #3498db;
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  border: 1px solid #3498db;
  background-color: #fff;
  color: #333;
}
</style>
