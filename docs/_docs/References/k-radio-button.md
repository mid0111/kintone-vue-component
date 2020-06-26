---
title: k-radio-button
category: References
order: 1
demo: k-radio-button
---

> `k-radio-button` コンポーネントはラジオボタンとして使用されます。

## デモ

![]({{ "/images/k-radio-button-basic.png" | relative_url }})

## 使い方

```vue
<template>
  <k-radio-button :items="items" v-model="value" />
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: 'Orange',
          value: 'Orange',
          disabled: false
        },
        {
          label: 'Banana',
          value: 'Banana',
          disabled: true
        },
        {
          label: 'Lemon',
          value: 'Lemon',
          disabled: false
        }
      ],
      value: 'Lemon'
    };
  }
};
```

## Attribute

| Name              | Description                                                   | Type                | Required |
| ----------------- | ------------------------------------------------------------- | ------------------- | -------- |
| items             | ラジオボタンに表示する項目                                    | Array&lt;Object&gt; | Yes      |
| items[x].value    | item を識別するための値                                       | String              | No       |
| items[x].label    | item のラベル                                                 | String              | No       |
| items[x].disabled | item を無効にするかどうか<br>デフォルト値: false              | Boolean             | No       |
| value             | チェックされた item の値                                      | String              | No       |
| disabled          | ラジオボタンすべてを無効にするかどうか<br>デフォルト値: false | Boolean             | No       |

## Event

| Name   | Description                              |
| ------ | ---------------------------------------- |
| input  | ラジオボタンをクリックしたときに発生する |
| change | ラジオボタンをクリックしたときに発生する |
