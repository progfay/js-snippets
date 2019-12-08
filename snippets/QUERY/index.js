const QUERY = {
  stringify: value => (
    Object.entries(value)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&')
  ),

  parse: text => (
    text.split('&')
      .map(query => query.split('='))
      .map(([key, ...rest]) => [key, rest.join('=')])
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
  )
}

module.exports = QUERY
