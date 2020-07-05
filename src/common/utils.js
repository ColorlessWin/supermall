export function px(value) { return value + 'px' }

export function debounce(func, _this, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() =>{
      func.apply(_this, args)
    }, delay)
  }
}
