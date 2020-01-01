const { PassThrough } = require('stream')

export default class CombinedStream extends PassThrough {
  constructor (opt, ...streams) {
    super({ ...opt, objectMode: true })

    this.stream = streams.reduce(
      (source, destination) => source.pipe(destination),
      this
    )

    this.pipe = (destination, options) => (
      this.stream.pipe(destination, options)
    )
  }
}
