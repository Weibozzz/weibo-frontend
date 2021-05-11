/**
 * @param  {Function} fn     要实现函数防抖的原函数
 * @param  {Number}   wait  延迟时间
 * @param  {Boolean}   now   是否第一次立即调用后启用防抖 默认true
 * @return {Function}        添加防抖功能的包装函数
 */
// 最后一次调用总是会被执行
export function debounce (fn, wait = 800, now = true) {
  let __timer = null
  let isFirst = now
  return function (...args) {
    if (__timer) clearTimeout(__timer)
    if (isFirst) {
      fn.apply(this, args)
      isFirst = false
    } else {
      __timer = setTimeout(() => {
        fn.apply(this, args)
      }, wait)
    }
  }
}
