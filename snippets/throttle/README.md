# `throttle<T extends Function>(func: T, wait: number = 0): T`

## Usage

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const main = async () => {
  const func = throttle(console.log, 1000)

  func(0) // output: 0
  func(1) // pass
  func(2) // pass

  await sleep(1000)

  func(3) // output: 3
  await sleep(100)
  func(4) // pass
  await sleep(200)
  func(5) // pass
  await sleep(300)
  func(5) // pass
  await sleep(450)
  func(6) // output: 6
  func(7) // pass
}

main()
```
