/**
 * 防抖函数
 * @param {function} fn 要执行的函数
 * @param {number} wait 延迟时间
 * @param {boolean} flag 是否立即执行一次
 */
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

/**
 * 清空子节点
 * @param {HTMLElement} dom 要被清空的节点
 */
export function removeAllChild(dom) {
    while (dom.hasChildNodes()) {
        dom.removeChild(dom.firstChild)
    }
}