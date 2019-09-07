# `groupBy<T>(array: T[], predicate: T => any): { [any]: T }`

## Usage

```js
const array = ['Louis', 'Jason', 'Leslie', 'James', 'Timothy']
const predicate = name => name.substring(0, 1)

const group = groupBy(array, predicate)
console.log(group) // output: { L: [ 'Louis', 'Leslie' ], J: [ 'Jason', 'James' ], T: [ 'Timothy' ] }
```
