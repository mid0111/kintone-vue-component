<template>
  <button class="k-text-button" type="button" @click.stop="onClick">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class KTextButton extends Vue {
  @Prop({ default: '' }) text?: string;

  private onClick() {
    this.$emit('click');
  }
}
</script>

<style lang="css" scoped>
.k-text-button {
  background-color: transparent;
  color: #3498db;
  font-size: 14px;
  height: 40px;
  box-sizing: border-box;
  padding: 0 8px;
  border: 1px solid transparent;
}
.k-text-button:focus {
  outline: none;
}
</style>
