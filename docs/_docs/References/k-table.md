---
title: k-table
category: References
order: 1
demo: k-table
---

> `k-table` コンポーネントはテーブルを表示するために使用されます。

## デモ

![]({{ "/images/k-table.png" | relative_url }})

## 使い方

```vue
<template>
  <div>
    <h3>basic</h3>
    <k-table :headers="headers" :items="items" />
    <h3>slot</h3>
    <k-table :headers="slotHeaders" :items="items">
      <template v-slot:header>
        <th :colspan="slotHeaders.length">
          カスタムヘッダ
        </th>
      </template>
      <template v-slot:default="slotProps">
        <td>{{ "{{ slotProps.item['no'] " }}}}</td>
        <td>{{ "{{ slotProps.item['name'] " }}}}</td>
        <td>{{ "{{ slotProps.item['group'] " }}}}</td>
        <td>
          <k-icon-button type="close" color="blue" size="small" />
        </td>
      </template>
    </k-table>
  </div>
</template>

<script>
export default {
  data() {
    const headers = [
      {
        label: '社員番号',
        name: 'no',
        width: 80
      },
      {
        label: '名前',
        name: 'name'
      },
      {
        label: '所属',
        name: 'group'
      }
    ];
    return {
      headers,
      slotHeaders: headers.concat({}),
      items: [
        {
          name: '田中太郎',
          no: '2012001',
          group: '総務部'
        },
        {
          name: '田中次郎',
          no: '2012002',
          group: 'システム部'
        },
        {
          name: '田中三郎',
          no: '2012003',
          group: '営業部'
        }
      ]
    };
  }
};
</script>
```

## Attreibute

| Name               | Description                                       | Type                | Required |
| ------------------ | ------------------------------------------------- | ------------------- | -------- |
| fixedHeader        | ヘッダを固定するかどうか.<br>デフォルト値: false  | Boolean             | No       |
| headers            | ヘッダ情報の配列                                  | Array<HeaderObject> | No       |
| HeaderObject.label | ヘッダ表示文字列                                  | String              | No       |
| HeaderObject.name  | items 配列の対応するキー名                        | String              | No       |
| HeaderObject.width | 幅                                                | String              | No       |
| height             | テーブルの高さ. ヘッダを固定する場合は必須.       | Number              | No       |
| items              | データの配列                                      | Array<Object>       | No       |
| visible            | テーブルを表示するかどうか.<br>デフォルト値: true | Boolean             | No       |

## Event

なし

## Slot

| Name    | Description |
| ------- | ----------- |
| header  | ヘッダ行    |
| default | データ行    |
