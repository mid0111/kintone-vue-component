---
title: k-text
category: References
order: 1
demo: k-text
---

> `k-text` コンポーネントはユーザーがテキストを入力するためのテキストフィールドとして使用されます。

## デモ

![]({{ "/images/k-text-basic.png" | relative_url }})

## 使い方

```vue
<template>
  <k-text v-model="value" placeholder="テキストを入力" />
</template>
<script>
export default {
  data() {
    return {
      value: ''
    };
  }
};
</script>
```

## Attreibute

| Name        | Description                                                          | Type    | Required |
| ----------- | -------------------------------------------------------------------- | ------- | -------- |
| disabled    | テキストフィールドを disabled にするかどうか.<br>デフォルト値: false | Boolean | No       |
| placeholder | テキストフィールドのプレースホルダー.<br>デフォルト値: ''            | String  | No       |
| value       | テキストフィールドの入力値。                                         | String  | Yes      |
| width       | テキストフィールドの幅（ピクセル）.                                  | Number  | No       |

## Event

| Name   | Description                                          |
| ------ | ---------------------------------------------------- |
| change | ユーザーの操作によって値が変更されたときに発生する。 |
