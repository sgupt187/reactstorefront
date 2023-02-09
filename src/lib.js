export const move = (router, route, params, fn) =>
  router[fn]({
    ...route,
    params,
  });

export const getValue = (observable) => observable;

export const memoize = (fn) => {
  let lastArgs = [];
  let lastReturn;
  return (...args) => {
    if (
      args.every((arg, index) => arg === lastArgs[index])
    ) {
      return lastReturn;
    }
    lastArgs = args;
    lastReturn = fn(...args);
    return lastReturn;
  };
};
