<template>
  <div class="components">
    <h3>basic</h3>
    <k-dropdown :items="items" v-model="selectedValue"></k-dropdown>
  </div>
</template>
<script>
import KDropdown from '../components/KDropdown.vue';

export default {
  components: {
    KDropdown
  },

  data() {
    return {
      items: [
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
      ],
      selectedValue: null
    };
  }
};
</script>
