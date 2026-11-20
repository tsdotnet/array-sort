<a name="banner"><img src="https://cdn.jsdelivr.net/gh/tsdotnet/array-sort@master/assets/banner.svg" alt="@tsdotnet/array-sort: Sort primitives in place. Insertion, merge and quick sort."></a>

[![npm version](https://img.shields.io/npm/v/@tsdotnet/array-sort.svg?style=flat-square)](https://www.npmjs.com/package/@tsdotnet/array-sort)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/tsdotnet/array-sort/blob/master/LICENSE)

In-place sorting for arrays of strings, numbers or booleans: insertion, merge and quick sort.

## Install

```sh
npm install @tsdotnet/array-sort
```

## Usage

```ts
import { mergeSort } from '@tsdotnet/array-sort';

const scores = [70, 110, 40, 90, 60];

mergeSort(scores); // [40, 60, 70, 90, 110]
scores;            // the same array, now sorted
```

`insertionSort` and `quickSort` work the same way. Items must be strings, numbers or booleans.

## Use it from

ESM (`import { mergeSort } from '@tsdotnet/array-sort';`) or CommonJS (`const { mergeSort } = require('@tsdotnet/array-sort');`).

<details><summary>In a browser, without a bundler</summary>

```html
<script src="https://cdn.jsdelivr.net/npm/@tsdotnet/array-init@1/dist/umd/array-init.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tsdotnet/exceptions@1/dist/umd/exceptions.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tsdotnet/array-sort@1/dist/umd/array-sort.min.js"></script>
<script>
  const { mergeSort } = tsdotnet.arraySort;
</script>
```

</details>

## Docs

[tsdotnet.github.io/array-sort](https://tsdotnet.github.io/array-sort/)
