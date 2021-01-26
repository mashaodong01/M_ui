export function debounce(fn, wait, flag) {
  let timer = null;
  return function(...args) {
    if (flag && timer == null) {
      fn.apply(this, args)
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}