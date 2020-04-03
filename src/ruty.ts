import { route } from './route'
import { paramTransformer } from './param-transformer'
import { queryTransformer } from './query-transformer'

export type RutyConfig<
  GlobalParams = {
    [key: string]: any | (() => any)
  },
  GlobalQuery = {
    [key: string]: any | (() => any)
  }
> = {
  prefix?: string
  paramTransformer?: (name: string, value: any) => string
  queryTransformer?: (name: string, value: any) => string
  params?: GlobalParams
  query?: GlobalQuery
}

const defaultConfig: RutyConfig<any, any> = {
  paramTransformer,
  queryTransformer,
}

export const Ruty = {
  configure: <GlobalParams, GlobalQuery>(
    config: RutyConfig<GlobalParams, GlobalQuery> = defaultConfig
  ) => {
    return {
      route: (path: string) => route(path, config),
    }
  },
}
