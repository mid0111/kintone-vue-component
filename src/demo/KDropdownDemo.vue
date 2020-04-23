<template>
  <div class="components">
    <h3>basic</h3>
    <k-dropdown :items="items" v-model="selectedValue"></k-dropdown>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import KDropdown from '../components/KDropdown.vue';

@Component({
  components: {
    KDropdown
  }
})
export default class KDropdownDemo extends Vue {
  items: Array<object> = [
    {
      label: '---',
      value: null
    },
    {
      label: 'アイテム1',
      value: 'アイテム1'
    },
    {
      label: 'アイテム2',
      value: 'アイテム2'
    },
    {
      label: 'アイテム3',
      value: 'アイテム3'
    }
  ];
  selectedValue = null;
}
</script>
