---
title: k-alert
category: References
order: 1
demo: k-alert
---

> `k-alert` コンポーネントはアラートとして使用されます。

## デモ

![]({{ "/images/k-alert-success.png" | relative_url }})
![]({{ "/images/k-alert-error.png" | relative_url }})

## 使い方

```vue
<template>
  <div class="components">
    <k-alert text="アラート" type="error" :visible="visible" @close="onClose" />
    <k-button text="error アラート表示" @click="showError" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },

  methods: {
    showError() {
      this.visible = true;
    },

    onClose() {
      this.visible = false;
    }
  }
};
</script>
```

## Attribute

| Name     | Description                                                        | Type    | Required |
| -------- | ------------------------------------------------------------------ | ------- | -------- |
| text     | アラートとして表示する文字列.<br>デフォルト値: ''                   | String  | Yes      |
| type     | アラートのタイプ.<br>・success<br>・error <br>デフォルト値: 'error' | String  | No       |
| visible  | アラートを表示するかどうか.<br>デフォルト値: true                  | Boolean  | No       |

## Event

| Name  | Description                                            |
| ----- | ------------------------------------------------------ |
| close | ユーザーの操作によって閉じるボタンが押されたときに発生する。 |
