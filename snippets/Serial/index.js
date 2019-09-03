const SerialPort = require('serialport')
const BAUD_RATE = 115200

// eslint-disable-next-line no-unused-vars
class Serial {
  constructor ({ VENDOR_ID, PRODUCT_ID, verbose = false, baudRate = BAUD_RATE }) {
    if (!VENDOR_ID && !PRODUCT_ID) {
      throw new Error('required either or both of VENDOR_ID or PRODUCT_ID')
    }

    this.VENDOR_ID = VENDOR_ID
    this.PRODUCT_ID = PRODUCT_ID
    this.verbose = verbose
    this.baudRate = baudRate
    this.port = { isOpen: false }
    this.line = ''
    this.data = ''
    this.comName = ''
  }

  async connect () {
    const { VENDOR_ID, PRODUCT_ID } = this

    const { comName } = await SerialPort.list()
      .then(ports => ports.find(({ vendorId, productId }) =>
        (!VENDOR_ID || vendorId === VENDOR_ID) && (!PRODUCT_ID || productId === PRODUCT_ID)
      ) || {})
      .catch(() => { throw new Error('Error on Serialport.list') })

    if (!comName) throw new Error(`Cannot find port`, this.PORT_ID)

    this.comName = comName
    this.port = new SerialPort(comName, { baudRate: this.baudRate })
    console.log(`Connected to ${comName}`)

    if (!this.verbose) return

    this.port.on('open', () => { console.log(`${this.comName}: opened`) })
    this.port.on('data', (data) => {
      this.data += data.toString('utf-8', 0, data.length)
      if (this.data.endsWith('\n')) {
        console.log(`${this.comName} >> ${this.data.trim()}`)
        this.data = ''
      }
    })
    this.port.on('close', () => { console.log(`${this.comName}: closed`) })
    this.port.on('error', error => { console.error(`${this.comName}: ${error}`) })
    this.port.on('drain', () => { console.warn(`${this.comName}: drain`) })
  }

  async disconnect () {
    if (!this.port.isOpen) return
    await this.port.close()
    this.port = { isOpen: false }
  }

  async write (data) {
    if (!this.port.isOpen) throw new Error('No-connection yet.')

    return new Promise((resolve, reject) => {
      this.port.write(Buffer.from(data), (error, results) => {
        if (error) {
          reject(error)
        } else {
          if (this.verbose) console.log(`${this.comName} << ${data}`)
          resolve(results)
        }
      })
    })
  }

  readline () {
    if (this.line.endsWith('\n')) {
      const line = this.line.trim()
      this.line = ''
      return line
    }
    return new Promise(
      (resolve, reject) => {
        this.port.once('readable', async () => {
          const buffer = this.port.read()
          this.line += buffer.toString('utf-8', 0, buffer.length)
          resolve(await this.readline())
        })
      }
    )
  }
}
