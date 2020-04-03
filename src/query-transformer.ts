export const queryTransformer = (name: string, value: any) => {
  if (value !== undefined) {
    return `${name}=${value}`
  }
  return name
}
