---
title: k-field-group
category: References
order: 1
demo: k-field-group
---

> `k-field-group` コンポーネントはフィールドをグループ化するのに使用されます。

## デモ

![]({{ "/images/k-field-group-open.png" | relative_url }})
![]({{ "/images/k-field-group-close.png" | relative_url }})

## 使い方

```vue
<template>
  <k-field-group name="Group" v-model="toggle">
    <k-label text="ラベル" />
    <k-text v-model="text" />
  </k-field-group>
</template>
<script>
export default {
  data() {
    return {
      toggle: false,
      text: ''
    };
  }
};
</script>
```

## Attribute

| Name  | Description                                                  | Type    | Required |
| ----- | ------------------------------------------------------------ | ------- | -------- |
| name  | フィールドグループの名前.<br>デフォルト値:''                 | String  | No       |
| value | フィールドグループを表示するかどうか.<br>デフォルト値: false | Boolean | No       |

## Event

| Name  | Description                                                |
| ----- | ---------------------------------------------------------- |
| input | ユーザーの操作によって開閉ボタンが押されたときに発生する。 |
