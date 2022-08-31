import { useState, useEffect } from 'react';

/**
 *
 * @param value : input value
 * @param delay : 몇초뒤 API요청을 할 지
 * @example
 * ```ts
 * import useDebounced from "@hooks";
 * const debounceSearchTerm = useDebounced(inputValue, 500);
 *  ...
 *  useEffect(()=>{
 *      callApi(debounceSearchTerm)
 *  },[debounceSearchTerm])
 * ```
 * @returns
 */

function useDebounced(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounced;
