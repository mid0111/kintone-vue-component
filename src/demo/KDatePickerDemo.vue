<template>
  <div class="components">
    <h3>basic</h3>
    <k-date-picker
      v-model="date"
      dateFormat="YYYY/MM/dd"
      @change="onChangeDate"
    />
  </div>
</template>

<script>
import KDatePicker from '../components/DateTime/KDatePicker.vue';

export default {
  components: {
    KDatePicker
  },

  data() {
    return {
      date: null
    };
  },

  methods: {
    onChangeDate(value) {
      alert(`Date change !! [${value}]`);
    }
  }
};
</script>
