class QUERY {
  static stringify (query) {
    return Object.entries(query)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&')
  }

  static parse (text) {
    return text.split('&')
      .map(query => query.split('='))
      .map(([key, ...rest]) => [key, rest.join('=')])
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
  }
}

module.exports = QUERY
