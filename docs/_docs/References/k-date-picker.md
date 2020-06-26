---
title: k-date-picker
category: References
order: 1
demo: k-date-picker
---

> `k-date-picker` コンポーネントは日付選択として使用されます。

## デモ

![]({{ "/images/k-date-picker-basic.png" | relative_url }})

## 使い方

```vue
<template>
  <k-date-picker
    v-model="date"
    dateFormat="YYYY/MM/dd"
    @change="onChangeDate"
  />
</template>
<script>
export default {
  data() {
    return {
      date: null
    };
  },
  methods: {
    onChangeDate(value) {
      console.log(`Date change !! [${value}]`);
    }
  }
};
</script>
```

## Attribute

| Name       | Description                                             | Type    | Required |
| ---------- | ------------------------------------------------------- | ------- | -------- |
| dateFormat | 日付のフォーマット.<br>デフォルト値: 'MM/dd/YYYY'       | String  | Yes      |
| disabled   | disabled にするかどうか.<br>デフォルト値: 'false'       | Boolean | No       |
| locale     | ロケール.<br>・ja<br>・en<br>・zh<br>デフォルト値: 'ja' | String  | Yes      |
| value      | 選択状態にする日付.<br>デフォルト値:null                | Date    | No       |

## Event

| Name   | Description                                                                                          |
| ------ | ---------------------------------------------------------------------------------------------------- |
| input  | ユーザーの操作によって日付が選択されたときに発生する。日付は Date 型で渡される。                     |
| change | ユーザーの操作によって日付が選択されたときに発生する。日付は指定したフォーマットの文字列で渡される。 |
