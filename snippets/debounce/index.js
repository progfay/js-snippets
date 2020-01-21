const debounce = (func, wait = 0) => {
  let timeout = null
  return (...args) => {
    if (!timeout) clearTimeout(timeout)
    timeout = setTimeout(() => { func(args) }, wait)
  }
}

module.exports = debounce
