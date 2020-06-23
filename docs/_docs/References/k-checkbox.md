---
title: k-checkbox
category: References
order: 1
demo: k-checkbox
---

> `k-checkbox` コンポーネントはチェックボックスとして使用されます。

## デモ

![]({{ "/images/k-checkbox-basic.png" | relative_url }})

## 使い方

```vue
<template>
  <k-checkbox :items="items" v-model="value" />
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
      value: ['Orange', 'Banana']
    };
  },

  methods: {
    onChange(value) {
      this.value = value;
    }
  }
};
```

## Attribute

| Name     | Description                                                        | Type    | Required |
| -------- | ------------------------------------------------------------------ | ------- | -------- |
| items    | チェックボックスに表示する項目                                      | Array&lt;Object&gt; | Yes       |
| items[x].value | item を識別するための値                                      | String | No       |
| items[x].label | item のラベル                                                | String | No       |
| items[x].disabled | item を無効にするかどうか<br>デフォルト値: false           | Boolean | No       |
| value     | チェックされた item の配列                                         | Array  | No      |
| disabled     | チェックボックスすべてを無効にするかどうか<br>デフォルト値: false | Boolean  | No       |

## Event

| Name  | Description                                            |
| ----- | ------------------------------------------------------ |
| input | チェックボックスをクリックしたときに発生する |
