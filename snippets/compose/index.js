// eslint-disable-next-line no-unused-vars
const compose = (...funcs) => funcs.reduce((a, b) => (...args) => a(b(...args)), arg => arg)
