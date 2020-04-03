export const paramTransformer = (name: string, value: any) => {
  return value === undefined ? name : value
}
