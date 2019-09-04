# `getIpAddress(): Promise<string>`

## Usage

```js
const main = async () => {
  const server = require('http').createServer()
  const ipAddress = await getIpAddress()
  server.listen(8080, () => { console.log(`Listening on http://${ipAddress}:8080`) })
}

main()
```
