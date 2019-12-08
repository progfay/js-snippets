// eslint-disable-next-line no-unused-vars
const throttle = <F extends (...args: any[]) => any> (func: F, wait = 0) => {
  let timestamp = Date.now() - wait
  let cache: ReturnType<F>
  return (...args: Parameters<typeof func>): ReturnType<F> => {
    const now = Date.now()
    if (!cache || now - timestamp >= wait) {
      timestamp = now
      cache = func(...args)
    }
    return cache
  }
}
