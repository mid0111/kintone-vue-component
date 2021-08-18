# kintone-vue-component

[![npm version](https://badge.fury.io/js/kintone-vue-component.svg)](https://badge.fury.io/js/kintone-vue-component)

> Kintone のデザインに合わせた Vue コンポーネントです。  
> [kintone/kintone-ui-component](https://github.com/kintone/kintone-ui-component) を元に作成した非公式ライブラリです。

## 使い方

main.js で以下のようにインポートして利用します。

```js
import Vue from 'vue';

import KintoneVueComponent from 'kintone-vue-component';
import 'kintone-vue-component/dist/kintone-vue-component.css';
Vue.use(KintoneVueComponent);
```

## ドキュメント

https://mid0111.github.io/kintone-vue-component/

## 開発

### ビルド

```bash
npm run build
```

### デモ起動

```bash
npm run demo
```

### ドキュメントサーバ起動

```bash
cd docs
bundle exec jekyll serve
```
