# `Serial`

## Prepare

```sh
$ npm install serialport
```

## Usage

```js
const main = async () => {
  const serial = new Serial({
    VENDOR_ID: '0000',
    PRODUCT_ID: '0000',
    verbose: true, // logging serial communication (default: false)
    baudRate: 115200, // default: 115200
  })

  await serial.connect()
  await serial.write('Hello, world!')
  const line = await serial.readline()
  console.log(line)
  await serial.disconnect()
}

main()
```
