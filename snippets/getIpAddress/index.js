const getIpAddress = () => new Promise((resolve, reject) => {
  require('dns').lookup(
    require('os').hostname(),
    (error, ip) => error ? reject(error) : resolve(ip)
  )
})

module.exports = getIpAddress
