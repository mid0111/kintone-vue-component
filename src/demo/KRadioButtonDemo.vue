<template>
  <div class="components">
    <h3>basic</h3>
    <div class="clearfix">
      <k-radio-button :items="items" v-model="value" />
    </div>
  </div>
</template>

<script>
import KRadioButton from '../components/KRadioButton.vue';

export default {
  components: {
    KRadioButton
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
      value: 'Lemon'
    };
  }
};
</script>
