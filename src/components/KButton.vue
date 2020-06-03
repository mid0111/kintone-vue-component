<template>
  <button
    @click.stop="onClick"
    class="k-btn"
    :class="[typeClass, denseClass]"
    :disabled="disabled"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
      required: true
    },
    type: {
      type: String,
      default: 'normal',
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    dense: {
      type: Boolean,
      default: false,
      required: false
    }
  },

  computed: {
    typeClass() {
      return this.type === 'submit' ? 'submit' : 'normal';
    },
    denseClass() {
      return this.dense ? 'dense' : undefined;
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
.k-btn {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 16px;
  white-space: nowrap;
  padding: 0 16px;
  min-width: 163px;
  height: 48px;
  line-height: 48px;
}
.k-btn.dense {
  padding: 0 8px;
  min-width: 80px;
  height: 36px;
  line-height: 36px;
}
.k-btn.normal:disabled,
.k-btn.submit:disabled,
.k-btn.normal:disabled:hover,
.k-btn.submit:disabled:hover {
  color: #bababa;
  border: 1px solid #e3e7e8;
  background-color: #dbdcdd;
  cursor: not-allowed;
  box-shadow: none;
}
.k-btn.normal {
  display: block;
  box-sizing: border-box;
  outline: none;
  border: 1px solid #e3e7e8;
  background-color: #f7f9fa;
  box-shadow: 1px 1px 1px #fff inset;
  color: #3498db;
  text-align: center;
}
.k-btn.normal:hover {
  background-color: #c8d6dd;
  box-shadow: none;
  cursor: pointer;
}

.k-btn.submit {
  display: block;
  box-sizing: border-box;
  outline: none;
  border: 1px solid #e3e7e8;
  background-color: #3498db;
  box-shadow: 1px 1px 1px #8ccbee inset;
  color: #fff;
  text-align: center;
}
.k-btn.submit:hover {
  background-color: #1d6fa5;
  cursor: pointer;
}
</style>
