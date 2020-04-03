import { addParams } from './add-params'
import { addQuery } from './add-query'
import { RutyConfig } from './ruty'

type ValuesOrReturnTypes<T> = T extends (...args: any) => any ? ReturnType<T> : T

export const route = <
  Path extends string = string,
  GlobalParams = any,
  GlobalQuery = any,
  GlobalParamsAndQuery = {
    [key in keyof (GlobalParams & GlobalQuery)]: ValuesOrReturnTypes<
      (GlobalParams & GlobalQuery)[key]
    >
  }
>(
  path: Path,
  config: RutyConfig<GlobalParams, GlobalQuery> = {}
) => {
  const build = <ParamsAndQuery extends { [key: string]: any }>() => {
    const routeBuilder = (
      paramsAndQuery?: ParamsAndQuery | (ParamsAndQuery & Partial<GlobalParamsAndQuery>)
    ) => {
      const pathWithParams = addParams(config, path, paramsAndQuery)
      const pathWithParamsAndQuery = addQuery(config, pathWithParams, paramsAndQuery)
      return pathWithParamsAndQuery
    }
    routeBuilder.path = path
    return routeBuilder
  }
  return { build }
}
