export const paramTransformer = (name: string, value: any): string => {
  const paramValue = typeof value === 'function' ? value() : value
  return paramValue === undefined ? name : paramValue
}
