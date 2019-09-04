# `QUERY`

## Usage

```js
const queryString = QUERY.stringify({
  hoge: 'hoge',
  fuga: 100
})
console.log(queryString) // output: "hoge=hoge&fuga=100"
```

```js
const query = QUERY.parse('hoge=hoge&fuga=100')
console.log(query) // output: { hoge: 'hoge', fuga: 100 }
```
