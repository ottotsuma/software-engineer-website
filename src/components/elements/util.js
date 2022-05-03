import Empty from "./../../assets/empty.gif";

export function _try(func, fallbackValue) {
    try {
      var value = func();
      return (value === null || value === undefined) ? fallbackValue : value;
    } catch (e) {
      return fallbackValue;
    }
  }

  export function imageError(ev) {
    ev.target.src = Empty
  }