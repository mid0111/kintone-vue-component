<template>
  <div class="k-label">
    <span :style="style">{{ text }}</span>
    <span v-if="required" class="k-require">*</span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
      required: true
    },
    textColor: {
      type: String,
      default: '',
      required: false
    },
    backgroundColor: {
      type: String,
      default: '',
      required: false
    },
    required: {
      type: Boolean,
      default: false,
      required: false
    }
  },

  computed: {
    style() {
      return {
        color: '' || this.textColor,
        backgroundColor: '' || this.backgroundColor
      };
    }
  }
};
</script>

<style lang="css" scoped>
.k-label {
  display: block;
  padding: 4px 8px;
  color: #333;
  font-size: 14px;
  margin: 0;
  white-space: nowrap;
}
.k-label .k-require {
  margin-left: 4px;
  color: #e74c3c;
  vertical-align: middle;
  font-size: 15px;
  line-height: 1;
}
</style>
