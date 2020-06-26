<template>
  <div class="components">
    <h3>basic</h3>
    <k-field-group name="Group" v-model="toggle">
      <k-label text="ラベル" />
      <k-text v-model="text" />
    </k-field-group>
  </div>
</template>

<script>
import KFieldGroup from '../components/KFieldGroup.vue';
import KLabel from '../components/KLabel.vue';
import KText from '../components/KText.vue';

export default {
  components: {
    KFieldGroup,
    KLabel,
    KText
  },

  data() {
    return {
      toggle: false,
      text: ''
    };
  }
};
</script>
