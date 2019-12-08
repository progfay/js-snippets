/* global fetch AudioContext webkitAudioContext */

const decodeAudioData = (arrayBuffer) => (
  new Promise((resolve, reject) => {
    new (AudioContext || webkitAudioContext)()
      .decodeAudioData(arrayBuffer, resolve, reject)
  })
)

const createAudioBuffer = url => (
  new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.arrayBuffer())
      .then(decodeAudioData)
      .then(resolve)
      .catch(reject)
  })
)

module.exports = createAudioBuffer
