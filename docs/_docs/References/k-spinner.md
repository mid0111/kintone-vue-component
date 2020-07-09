---
title: k-spinner
category: References
order: 1
demo: k-spinner
---

> `k-spinner` コンポーネントはローディング中にユーザーが画面を触れないようにするために使用されます。

## デモ

![]({{ "/images/k-spinner-normal.png" | relative_url }})
![]({{ "/images/k-spinner-ring.png" | relative_url }})

## 使い方

```vue
<template>
  <k-spinner :visible="true" />
</template>
```

## Attribute

| Name    | Description                                                           | Type    | Required |
| ------- | --------------------------------------------------------------------- | ------- | -------- |
| type    | スピナーの種類を指定.<br>・normal<br>・ring<br>デフォルト値: 'normal' | String  | No       |
| visible | スピナーを表示するかどうか.<br>デフォルト値: true                     | Boolean | No       |

## Event

なし
