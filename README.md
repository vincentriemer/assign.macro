# assign.macro [![Babel Macro](https://img.shields.io/badge/babel--macro-%F0%9F%8E%A3-f5da55.svg)](https://github.com/kentcdodds/babel-plugin-macros)

A [babel-macro](https://github.com/kentcdodds/babel-plugin-macros) to transpile `Object.assign`-style expressions to direct assignments for [maximum performance](https://jsperf.com/assign-vs-equals).

## Installation

This module is distributed in the npm registry under `assign.macro` which should be installed to your project's `devDependencies`:

```sh
npm install --save-dev assign.macro

# or if you use yarn
yarn add --dev assign.macro
```

## Usage

After you have [configured `babel-macros`](https://github.com/kentcdodds/babel-plugin-macros/blob/master/other/docs/user.md) you can import `assign.macro` and utilize it like so:

```js
import assign from "assign.macro";

const test = {};
assign(test, {
  babel: "macros",
  are: "dope"
});
```

...which will be transpiled to the following:

```js
const test = {};
test.babel = "macros";
test.are = "dope";
```