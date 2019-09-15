# `compose: ((any) => any)[]: (any) => any`

## Usage

```js
const double = x => x * 2
const square = x => x * x

const result = compose(double, square, double)(5)
console.log(result) // output: 200
```
