<template>
  <div>
    <div class="title-container">
      <a :href="`#${title}`" class="title-link">
        <h2 :id="title">{{ title }}</h2>
      </a>
    </div>
    <a class="demo-link" :href="sourceLink" target="_blank">コードを見る</a>
  </div>
</template>

<script lang="ts">
import { upperFirst, camelCase } from 'lodash';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class KButton extends Vue {
  @Prop() private title!: string;

  get sourceLink(): string {
    const pascalCaseTitle = upperFirst(camelCase(this.title));
    return `https://github.com/mid0111/kintone-vue-component/blob/master/src/demo/${pascalCaseTitle}Demo.vue`;
  }
}
</script>

<style>
.title-container {
  border-bottom: 1px solid #ddd;
  border-left: 4px solid #3498db;
  padding: 8px 10px;
  margin-bottom: 20px;
  margin-top: 80px;
}

.title-link h2 {
  margin: 0;
}

.demo-link {
  padding-left: 20px;
}
</style>
