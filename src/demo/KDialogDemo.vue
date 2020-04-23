<template>
  <div class="components">
    <h3>basic</h3>
    <k-button text="ダイアログを開く" @click="toggleDialogOpen" />
    <k-dialog :visible="showDialog" @close="toggleDialogOpen">
      <template v-slot:header>
        <h3 class="title">ダイアログタイトル</h3>
      </template>
      <div>コンテンツ</div>
      <template v-slot:footer>
        <k-button text="閉じる" @click="toggleDialogOpen" />
      </template>
    </k-dialog>
  </div>
</template>

<script>
import KButton from '../components/KButton.vue';
import KDialog from '../components/KDialog.vue';

export default {
  components: {
    KButton,
    KDialog
  },

  data() {
    return {
      showDialog: false
    };
  },

  methods: {
    toggleDialogOpen() {
      this.showDialog = !this.showDialog;
    }
  }
};
</script>
<style scoped>
.title {
  margin: 8px 0;
}
</style>
