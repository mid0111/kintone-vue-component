<template>
  <div class="title-container">
    <a :href="`#${title}`" class="title-link">
      <h2 :id="title">{{ title }}</h2>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class KButton extends Vue {
  @Prop() private title!: string;
}
</script>

<style>
.title-container {
  border-bottom: 1px solid #ddd;
  border-left: 4px solid #3498db;
  padding: 8px 10px;
  margin-bottom: 40px;
  margin-top: 80px;
}

.title-link h2 {
  margin: 0;
}
</style>
