export const debounce = (func, wait) => {
  let timeout;
  let timestamp;

  return function(arg) {
    arg.persist();

    timestamp = new Date();

    const later = () => {
      const last = (new Date()) - timestamp;

      if (last < wait) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        func(arg);
      }
    };

    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
  }
};
