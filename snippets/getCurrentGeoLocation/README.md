# `getCurrentGeoLocation({ enableHighAccuracy: boolean = false }): Promise<Position>`

https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition

## Usage

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const main = async () => {
  while (true) {
    const { timestamp, coords } = await getCurrentGeoLocation({ enableHighAccuracy: true })
    const { latitude, longitude } = coords
    console.log(`${timestamp}: ${latitude}, ${longitude}`)
    await sleep(1000)
  }
}

main()
```
