// eslint-disable-next-line no-unused-vars
const throttle = (func, wait = 0) => {
  let timestamp = Date.now() - wait
  let cache = null
  return (...args) => {
    const now = Date.now()
    if (now - timestamp >= wait) {
      timestamp = now
      cache = func(...args)
    }
    return cache
  }
}
