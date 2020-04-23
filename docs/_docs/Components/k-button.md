---
title: k-button
category: Components
order: 1
demo: k-button
---

> `k-button` コンポーネントはボタンとして使用されます。

## デモ

![]({{ "/images/k-button-basic.png" | relative_url }})

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
| disabled | disabled にするかどうか.<br>デフォルト値: 'false'                  | Boolean | No       |
| text     | ボタンの名前.<br>デフォルト値: ''                                  | String  | Yes      |
| type     | ボタンのタイプ.<br>・normal<br>・submit <br>デフォルト値: 'normal' | String  | No       |

## Event

| Name  | Description                                            |
| ----- | ------------------------------------------------------ |
| click | ユーザーの操作によってボタンが押されたときに発生する。 |
