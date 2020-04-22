<template>
  <button
    @click.stop="onClick"
    class="k-btn"
    :class="[typeClass]"
    :disabled="disabled"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class KButton extends Vue {
  @Prop({ default: '' }) private text!: string;
  @Prop({ default: 'normal' }) type?: string;
  @Prop({ default: false }) disabled?: boolean;

  private get typeClass(): string {
    return this.type === 'submit' ? 'submit' : 'normal';
  }

  private onClick() {
    this.$emit('click');
  }
}
</script>

<style scoped>
.k-btn.normal,
.k-btn.submit {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 16px;
  white-space: nowrap;
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
  padding: 0 16px;
  min-width: 163px;
  height: 48px;
  outline: none;
  border: 1px solid #e3e7e8;
  background-color: #f7f9fa;
  box-shadow: 1px 1px 1px #fff inset;
  color: #3498db;
  text-align: center;
  line-height: 48px;
}
.k-btn.normal:hover {
  background-color: #c8d6dd;
  box-shadow: none;
  cursor: pointer;
}

.k-btn.submit {
  display: block;
  box-sizing: border-box;
  padding: 0 16px;
  min-width: 163px;
  height: 48px;
  outline: none;
  border: 1px solid #e3e7e8;
  background-color: #3498db;
  box-shadow: 1px 1px 1px #8ccbee inset;
  color: #fff;
  text-align: center;
  line-height: 48px;
}
.k-btn.submit:hover {
  background-color: #1d6fa5;
  cursor: pointer;
}
</style>
