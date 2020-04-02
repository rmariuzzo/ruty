const formatPath = (path: string, params: { [key: string]: string } = {}) => {
  return path.replace(/:(\w+)/g, (token, key) => params[key] || token);
};

export const route = <Path extends string = string>(path: Path) => {
  const build = <
    Params extends { [key: string]: any } = {},
    Queries extends { [key: string]: any } = {}
  >() => {
    const routeBuilder = (params?: Params | Queries) => {
      return formatPath(path, params);
    };
    routeBuilder.path = path;
    return routeBuilder;
  };
  return { build };
};
