import { useEffect, useRef } from "react";

  function setIntervalImmediately(func, interval) {
    func();
    return setInterval(func, interval);
  };
  
  function useInterval(callback, delay, countdownTime) {
    const savedCallback = useRef();
  
    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== undefined && countdownTime > new Date().getTime()) {
        let timer = setIntervalImmediately(tick, delay);
        return () => clearInterval(timer);
      }
    }, [delay, countdownTime]);
  };

export default useInterval;