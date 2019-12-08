const groupBy = (array, predicate) => (
  array.reduce((acc, cur) => {
    const group = predicate(cur)
    const target = acc[group] || []
    return {
      ...acc,
      [group]: [...target, cur]
    }
  }, {})
)

module.exports = groupBy
