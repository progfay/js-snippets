# `debounce <F extends Function> (func: F, wait = 0): (...args: Arguments<F>) => void`

## Usage

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const main = async () => {
  const func = debounce(console.log, 1000)

  func(0)
  func(1)
  func(2)
  // 1 sec later, output: 2

  await sleep(1500)

  func(3)
  await sleep(700)
  func(4)
  await sleep(900)
  func(5)
  await sleep(1100)
  func(6)
  // 1sec later, output: 5 and 6
}

main()
```
