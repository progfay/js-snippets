# `crateAudioBuffer(url: string): Promise<AudioBuffer>`

## Usage

```js
const audioContext = new (AudioContext || webkitAudioContext)()

createAudioBuffer('./audio.wav')
  .then(audioBuffer => {
    const source = audioContext.createBufferSource()
    source.buffer = audioBuffer
    source.connect(audioContext.destination)
    source.start()
  })
```
