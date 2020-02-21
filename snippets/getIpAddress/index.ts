import * as dns from 'dns'
import * as os from 'os'

const getIpAddress = () => new Promise<string>((resolve, reject) => {
  dns.lookup(
    os.hostname(),
    (error, ip) => error ? reject(error) : resolve(ip)
  )
})

module.exports = getIpAddress
