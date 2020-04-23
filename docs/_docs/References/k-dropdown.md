---
title: k-dropdown
category: References
order: 1
demo: k-dropdown
---

> `k-dropdown` コンポーネントはドロップダウンの表示に使用されます。

## デモ

![]({{ "/images/k-dropdown.png" | relative_url }})

## 使い方

```vue
<template>
  <div class="components">
    <h3>basic</h3>
    <k-dropdown :items="items" v-model="selectedValue"></k-dropdown>
  </div>
</template>

<script>
export default {
  components: {
    KDropdown
  },

  data() {
    return {
      items: [
        {
          label: '---',
          value: null
        },
        {
          label: 'アイテム1',
          value: 'アイテム1'
        },
        {
          label: 'アイテム2',
          value: 'アイテム2'
        },
        {
          label: 'アイテム3',
          value: 'アイテム3'
        }
      ],
      selectedValue: null
    };
  }
};
</script>
```

## Attribute

| Name     | Description                                                                             | Type                     | Required |
| -------- | --------------------------------------------------------------------------------------- | ------------------------ | -------- |
| disabled | ドロップダウンを disabled にするかどうか.<br>デフォルト値: false                        | Boolean                  | No       |
| items    | ドロップダウンに表示するアイテム.<br>・label: 表示名<br>・value: 値<br>デフォルト値: [] | Array\<Object\>          | Yes      |
| value    | 選択中のアイテムの value.<br>デフォルト値: null                                         | String \| Number \| null | No       |

## Event

| Name  | Description                                    |
| ----- | ---------------------------------------------- |
| input | ドロップダウンの値が選択されたときに発生する。 |
