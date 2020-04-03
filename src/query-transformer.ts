export const queryTransformer = (name: string, value: any): string => {
  const queryValue = typeof value === 'function' ? value() : value
  if (queryValue !== undefined) {
    return `${name}=${queryValue}`
  }
  return name
}
