export const isString = (str: string) => typeof str === 'string'
export const checkAction = (type: string[]) => type.length === 2 && type.every(isString)
export const parseToUppercase = (str: string) => str.replace(/([A-Z])/g, '_$1').toUpperCase()
export const removeNamespace = (str: string, NAMESPACE: string) => str.replace(`${NAMESPACE}_`, '')
export const toAsyncTypes = (type: string) => [`${type}_REQUEST`, `${type}_RESPONSE`]
