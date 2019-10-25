import { useState, useEffect } from 'react';

type Func<T> = () => Promise<T>;

export const usePromise = <T>(
  promiseOrFunction: Promise<T> | Func<T>,
  defaultValue: T
) => {
  const [state, setState] = useState({
    value: defaultValue,
    errorInPromise: null,
    isLoading: true
  });

  useEffect(() => {
    const promise =
      typeof promiseOrFunction === 'function'
        ? promiseOrFunction()
        : promiseOrFunction;
    let isSubscribed = true;

    promise
      .then(value =>
        isSubscribed
          ? setState({ value, errorInPromise: null, isLoading: false })
          : null
      )
      .catch(error =>
        isSubscribed
          ? setState({
              value: defaultValue,
              errorInPromise: error,
              isLoading: false
            })
          : null
      );

    return () => {
      isSubscribed = false;
    };
  }, [promiseOrFunction, defaultValue]);

  return state;
};
