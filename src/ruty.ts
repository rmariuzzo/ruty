const addParams = (path: string, params: { [key: string]: string } = {}) => {
  return path.replace(/:(\w+)/g, (token, key) => params[key] || token);
};

const addQueries = (path: string, queries: { [key: string]: string } = {}) => {
  return path.replace(/[?&](\w+)/g, (token, key) =>
    queries[key] === undefined ? token : `${token}=${queries[key]}`
  );
};

export const route = <Path extends string = string>(path: Path) => {
  const build = <ParamsAndQueries extends { [key: string]: any } = {}>() => {
    const routeBuilder = (paramsAndQueries?: ParamsAndQueries) => {
      return addQueries(addParams(path, paramsAndQueries), paramsAndQueries);
    };
    routeBuilder.path = path;
    return routeBuilder;
  };
  return { build };
};
