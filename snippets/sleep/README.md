# `sleep(ms: number): Promise`

## Usage

```js
const main = async () => {
  console.time()
  await sleep(1000)
  console.timeEnd()
}

main()  // near 1000ms
```
