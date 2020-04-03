import { RutyConfig } from './ruty'
import { queryTransformer } from './query-transformer'

export const addQuery = (
  config: RutyConfig<any, any> = {},
  path: string,
  query: { [key: string]: any } = {}
) => {
  return path.replace(/[?&](\w+)/g, (token, key) => {
    return queryTransformer(token, query[key] || config.query?.[key] || undefined)
  })
}
