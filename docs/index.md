---
title: Quick Start
---

Kintone のデザインに合わせた Vue コンポーネントです。  
[kintone/kintone-ui-component](https://github.com/kintone/kintone-ui-component) を元に作成した非公式ライブラリです。

### インストール

```bash
npm i kintone-vue-component
```

### 使い方

`main.js` で以下のようにインポートして利用します。

```js
import Vue from 'vue';

import KintoneVueComponent from 'kintone-vue-component';
import 'kintone-vue-component/dist/kintone-vue-component.css';
Vue.use(KintoneVueComponent);
```
