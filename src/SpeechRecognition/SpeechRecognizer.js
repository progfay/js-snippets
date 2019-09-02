/* global webkitSpeechRecognition SpeechRecognition */

export default class SpeechRecognizer {
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
        reject(new Error('cannot call SpeechRecognizer.start() when status is not inactive'))
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
        reject(new Error('cannot call SpeechRecognizer.stop() when status is not recording'))
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
