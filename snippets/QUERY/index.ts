type Query = {
  [key: string]: string
}

class QUERY {
  static stringify = (query: Query): string => (
    Object.entries(query)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&')
  )

  static parse = (text: string): Query => (
    text.split('&')
      .map(query => query.split('='))
      .map(([key, ...rest]) => [key, rest.join('=')])
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
  )
}

module.exports = QUERY
