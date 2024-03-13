<h1 align="center">X Surely-Vue-Table</h1>

<div align="center">

[![NPM Version](https://img.shields.io/npm/v/@skit/x.surely-vue-table.svg?sanitize=true)](https://www.npmjs.com/package/@skit/x.surely-vue-table)
[![NPM Download](https://img.shields.io/npm/dm/@skit/x.surely-vue-table.svg?sanitize=true)](https://www.npmjs.com/package/@skit/x.surely-vue-table)
[![License](https://img.shields.io/github/license/fudiwei/x.surely-vue-table)](http://unlicense.org/)

</div>

---

## 简介

破解 [@surely-vue/table](https://github.com/surely-vue/surely-table) 的授权限制，完美去除水印、去除控制台警告。

> [!CAUTION]
> 🤫 仅供个人非盈利项目使用，商业用途请支持正版。

---

## 用法

### 1. 安装依赖：

```shell
> npm install @surely-vue/table # 需要你自行安装 @surely-vue/table
> npm install @skit/x.surely-vue-table
```

### 2. 破解授权：

```js
import { hackLicenseKey } from '@skit/x.surely-vue-table';

hackLicenseKey({ domain: 'your-domain.com' });
```
