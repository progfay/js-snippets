const debounce = <F extends (...args: any[]) => any> (func: F, wait = 0) => {
  let timeout: ReturnType<typeof setTimeout> | null = null
  return (...args: Parameters<typeof func>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => { func(args) }, wait)
  }
}

module.exports = debounce
