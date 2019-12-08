// eslint-disable-next-line no-unused-vars
const groupBy = <T, K extends string> (array: T[], predicate: (context: T) => K): { [key in K]: T[] } => (
  array.reduce((acc, cur) => {
    const group = predicate(cur)
    const target =  group in acc ? acc[group] : []
    acc[group] = [...target, cur]
    return acc
  }, {} as { [key in K]: T[] })
)
