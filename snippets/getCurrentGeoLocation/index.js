const getCurrentGeoLocation = ({ enableHighAccuracy = false } = {}) => (
  new Promise((resolve, reject) => {
    if (!navigator.geolocation) return reject(new Error('navigator.geolocation is not defined.'))

    return navigator.geolocation.getCurrentPosition(
      resolve, reject, { enableHighAccuracy }
    )
  })
)

module.exports = getCurrentGeoLocation
