---
title: k-text-button
category: References
order: 1
demo: k-text-button
---

> `k-text-button` コンポーネントはテキスト表示のみのボタンとして使用されます。

## デモ

![]({{ "/images/k-text-button.png" | relative_url }})

## 使い方

```vue
<template>
  <k-text-button text="クリア" @click="onClick" />
</template>
<script>
export default {
  methods: {
    onClick() {
      alert('クリック');
    }
  }
};
</script>
```

## Attribute

| Name | Description                       | Type   | Required |
| ---- | --------------------------------- | ------ | -------- |
| text | ボタン文字列.<br>デフォルト値: '' | String | No       |

## Event

| Name  | Description                                            |
| ----- | ------------------------------------------------------ |
| click | ユーザーの操作によってボタンが押されたときに発生する。 |
