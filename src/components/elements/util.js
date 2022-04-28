export function _try(func, fallbackValue) {
    try {
      var value = func();
      return (value === null || value === undefined) ? fallbackValue : value;
    } catch (e) {
      return fallbackValue;
    }
  }