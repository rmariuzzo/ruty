import { RutyConfig } from './ruty'
import { paramTransformer } from './param-transformer'

export const addParams = (
  config: RutyConfig<any, any> = {},
  path: string,
  params: { [key: string]: any } = {}
) => {
  return path.replace(/:(\w+)/g, (token, key) => {
    return paramTransformer(token, params[key] || config.params?.[key] || token)
  })
}
