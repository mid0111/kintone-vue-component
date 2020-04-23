<template>
  <div class="components">
    <h3>basic</h3>
    <k-label text="ラベル" />
    <h3>required</h3>
    <k-label text="必須ラベル" required />
    <h3>color</h3>
    <k-label text="ラベル" textColor="red" />
    <k-label text="ラベル" textColor="#fff" backgroundColor="#888" />
  </div>
</template>

<script>
import KLabel from '../components/KLabel.vue';

export default {
  components: {
    KLabel
  }
};
</script>
