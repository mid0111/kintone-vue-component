---
title: k-icon-button
category: References
order: 1
demo: k-icon-button
---

> `k-icon-button` コンポーネントはボタンとして使用されます。

## デモ

![]({{ "/images/k-icon-button.png" | relative_url }})

## 使い方

```vue
<template>
  <k-icon-button type="insert" color="blue" />
  <k-icon-button type="remove" color="red" />
  <k-icon-button type="close" color="gray" />
  <k-icon-button type="file" color="green" />
  <k-icon-button type="right" color="gray" />
  <k-icon-button type="left" color="gray" />
</template>
```

## Attribute

| Name     | Description                                                                                               | Type    | Required |
| -------- | --------------------------------------------------------------------------------------------------------- | ------- | -------- |
| color    | ボタンの色.<br>・gray<br>・blue<br>・red<br>・green<br>・transparent<br>デフォルト値: 'gray'              | String  | No       |
| disabled | disabled にするかどうか.<br>デフォルト値: false                                                           | Boolean | No       |
| shape    | ボタンの形.<br>・circle<br>・normal<br>・none<br>デフォルト値: 'circle'                                             | String  | No       |
| size     | ボタンのサイズ.<br>・medium<br>・small<br>・x-small<br>デフォルト値: 'medium'                             | String  | No       |
| type     | ボタンの種類.<br>・insert<br>・remove<br>・close<br>・file<br>・right<br>・left<br>・<a href="https://materialdesignicons.com/">マテリアルアイコン</a>のプロパティ名 | String  | No       |

## Event

| Name  | Description                                            |
| ----- | ------------------------------------------------------ |
| click | ユーザーの操作によってボタンが押されたときに発生する。 |
