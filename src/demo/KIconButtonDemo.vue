<template>
  <div class="components">
    <h3>basic</h3>
    <div class="box">
      <k-icon-button type="insert" color="blue" />
      <k-icon-button type="remove" color="red" />
      <k-icon-button type="close" color="gray" />
      <k-icon-button type="file" color="green" />
      <k-icon-button type="right" color="gray" />
      <k-icon-button type="left" color="transparent" />
      <k-icon-button type="mdiMagnify" />
    </div>
    <h3>square</h3>
    <div class="box">
      <k-icon-button size="x-small" shape="none" type="insert" color="blue" />
      <k-icon-button size="x-small" shape="none" type="remove" color="red" />
      <k-icon-button size="x-small" shape="none" type="close" color="gray" />
      <k-icon-button size="x-small" shape="none" type="file" color="green" />
      <k-icon-button size="x-small" shape="none" type="right" color="gray" />
      <k-icon-button
        size="x-small"
        shape="none"
        type="left"
        color="transparent"
      />
      <k-icon-button size="x-small" shape="normal" type="mdiMagnify" />
    </div>
    <h3>size</h3>
    <div class="box">
      <k-icon-button size="x-small" type="insert" color="blue" />
      <k-icon-button size="small" type="insert" color="blue" />
      <k-icon-button size="medium" type="insert" color="blue" />
    </div>
  </div>
</template>

<script>
import KIconButton from '../components/KIconButton.vue';

export default {
  components: {
    KIconButton
  }
};
</script>
