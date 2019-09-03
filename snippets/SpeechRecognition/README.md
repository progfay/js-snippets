# `SpeechRecognition`

https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition

## Usage

```js
navigator.mediaDevices.getUserMedia({ audio: true })
  .then(async () => {
    const speechRecognizer = new SpeechRecognizer()
    await speechRecognizer.start()
    await sleep(1000)
    const result = await speechRecognizer.stop()
    console.log(result) // text what you say
  })


```

