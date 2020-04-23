---
title: k-label
category: References
order: 1
demo: k-label
---

> `k-label` コンポーネントはラベルとして使用されます。

## デモ

![]({{ "/images/k-label.png" | relative_url }})

## 使い方

```vue
<template>
  <k-label text="必須ラベル" required />
</template>
```

## Attreibute

| Name            | Description                                                      | Type    | Required |
| --------------- | ---------------------------------------------------------------- | ------- | -------- |
| required        | ラベルに required マークをつけるかどうか.<br>デフォルト値: false | Boolean | No       |
| text            | ラベル文字列.<br>デフォルト値: ''                                | String  | No       |
| textColor       | ラベル文字列の色.<br>デフォルト値: ''                            | String  | No       |
| backgroundColor | ラベル文字列の背景色.<br>デフォルト値: ''                        | String  | No       |

## Event

なし
