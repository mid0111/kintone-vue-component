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
    </div>
    <h3>square</h3>
    <div class="box">
      <k-icon-button shape="normal" type="insert" color="blue" />
      <k-icon-button shape="normal" type="remove" color="red" />
      <k-icon-button shape="normal" type="close" color="gray" />
      <k-icon-button shape="normal" type="file" color="green" />
      <k-icon-button shape="normal" type="right" color="gray" />
      <k-icon-button shape="normal" type="left" color="transparent" />
    </div>
    <h3>small</h3>
    <div class="box">
      <k-icon-button size="small" type="insert" color="blue" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import KIconButton from '../components/KIconButton.vue';

@Component({
  components: {
    KIconButton
  }
})
export default class KIconButtonDemo extends Vue {}
</script>
