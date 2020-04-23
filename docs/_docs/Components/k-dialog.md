---
title: k-dialog
category: Components
order: 1
demo: k-dialog
---

> `k-dialog` コンポーネントはダイアログボックスの表示に使用されます。

## デモ

![]({{ "/images/k-dialog-basic.png" | relative_url }})

## 使い方

```vue
<template>
  <k-button text="ダイアログを開く" @click="toggleDialogOpen" />
  <k-dialog :visible="showDialog" @close="toggleDialogOpen">
    <template v-slot:header>ダイアログタイトル</template>
    <div>コンテンツ</div>
    <template v-slot:footer>
      <k-button text="閉じる" @click="toggleDialogOpen" />
    </template>
  </k-dialog>
</template>
<script>
export default {
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
```

## Attribute

| Name    | Description                                             | Type    | Required |
| ------- | ------------------------------------------------------- | ------- | -------- |
| visible | ダイロアログを表示するかどうか.<br>デフォルト値: 'true' | Boolean | No       |

## Event

| Name  | Description                                                    |
| ----- | -------------------------------------------------------------- |
| close | ユーザーの操作によってクローズボタンが押されたときに発生する。 |
