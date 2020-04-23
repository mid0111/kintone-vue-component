<template>
  <nav>
    <ul>
      <li v-for="(component, index) in components" :key="index">
        <a class="nav-link" :href="`#${component}`">{{ component }}</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class KButton extends Vue {
  @Prop() private components!: Array<string>;
}
</script>

<style lang="css">
nav {
  border: 1px solid #ddd;
  background: #fafafa;
  padding: 12px;
}

li {
  margin: 8px 0;
}
</style>
