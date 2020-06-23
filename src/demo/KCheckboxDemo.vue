<template>
  <div class="components">
    <h3>basic</h3>
    <div class="clearfix">
      <k-checkbox :items="items" v-model="value" />
    </div>
  </div>
</template>

<script>
import KCheckbox from '../components/KCheckbox.vue';

export default {
  components: {
    KCheckbox
  },

  data() {
    return {
      items: [
        {
          label: 'Orange',
          value: 'Orange',
          disabled: false
        },
        {
          label: 'Banana',
          value: 'Banana',
          disabled: true
        },
        {
          label: 'Lemon',
          value: 'Lemon',
          disabled: false
        }
      ],
      value: ['Orange', 'Banana']
    };
  },

  methods: {
    onChange(value) {
      this.value = value;
    }
  }
};
</script>
