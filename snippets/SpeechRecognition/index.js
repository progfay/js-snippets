/* global webkitSpeechRecognition SpeechRecognition */

class SpeechRecognizer {
  constructor () {
    this.speechRecognition = new (webkitSpeechRecognition || SpeechRecognition)()
    this.speechRecognition.continuous = true
    this.speechRecognition.interimResults = false
    this.speechRecognition.lang = 'ja-JP'
    this.status = 'inactive'
  }

  start () {
    return new Promise((resolve, reject) => {
      if (this.status !== 'inactive') {
        reject(new Error('SpeechRecognizer already start recording'))
        return
      }

      this.speechRecognition.onstart = () => {
        this.status = 'recording'
        resolve()
      }
      this.speechRecognition.start()
    })
  }

  stop () {
    return new Promise((resolve, reject) => {
      if (this.status !== 'recording') {
        reject(new Error('SpeechRecognizer already stop recording'))
        return
      }

      this.speechRecognition.onresult = ({ results }) => {
        this.status = 'inactive'
        resolve(results[0][0].transcript)
      }
      this.speechRecognition.stop()
    })
  }
}

module.exports = SpeechRecognizer
