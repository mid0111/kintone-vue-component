<template>
  <div class="components">
    <h3>basic</h3>
    <div class="kvc-clearfix">
      <k-button
        class="kvc-float-left mr-2"
        text="保存"
        type="submit"
        @click="onClick"
      />
      <k-button text="キャンセル" />
    </div>
    <h3>disabled</h3>
    <k-button text="保存" type="submit" disabled />
    <h3>dense</h3>
    <k-button text="選択" dense />
  </div>
</template>

<script>
import KButton from '../components/KButton.vue';

export default {
  components: {
    KButton
  },

  methods: {
    onClick() {
      alert('クリック');
    }
  }
};
</script>
