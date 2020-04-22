---
title: k-button
category: Components
order: 1
---

> `k-button` コンポーネントはボタンとして使用されます。

## デモ

![](/images/k-button-basic.png)

## 使い方

```vue
<template>
  <k-button text="保存" type="submit" @click="onSave" />
</template>
<script>
export default {
  methods: {
    onSave() {
      alert('保存がクリックされました。');
    };
  }
};
</script>
```

## Attribute

| Name     | Description                                                        | Type    | Required |
| -------- | ------------------------------------------------------------------ | ------- | -------- |
| text     | ボタンの名前.<br>デフォルト値: ''                                  | String  | Yes      |
| type     | ボタンのタイプ.<br>・normal<br>・submit <br>デフォルト値: 'normal' | String  | No       |
| disabled | disabled にするかどうか.<br>デフォルト値: 'false'                  | Boolean | No       |

## Event

| Name  | Description                                            |
| ----- | ------------------------------------------------------ |
| click | ユーザーの操作によってボタンが押されたときに発生する。 |
