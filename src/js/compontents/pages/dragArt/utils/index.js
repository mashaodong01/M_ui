import observer from "./observer.js";
import { styleOptionType } from "../components/elementsData.js";

export function mousedown(offsetY, offsetX) {
    const maxLeft = this.parent.offsetWidth - this.mElement.offsetWidth;
    const maxTop = this.parent.offsetHeight - this.mElement.offsetHeight;
    const move = (en) => {
        const top = en.offsetY - offsetY - 70;
        const left = en.offsetX - offsetX - 200;
        if (top >= 0 && top <= maxTop && left >= 0 && left <= maxLeft) {
            this.style.top = top + "px";
            this.style.left = left + "px";
        }
    };
    const up = () => {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", up);
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
}
export function observerSet(key, componentId) {
    observer.setData(key, componentId);
}
export function removeChild(dom) {
    while (dom.firstElementChild) {
        dom.removeChild(dom.firstElementChild)
    }
}
export function debounce(fn, wait, flag) {
    let timer = null;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, wait)
    }
}
export function updateStyle(key, value) {
    if (styleOptionType.addPixelUnit.includes(key)) {
        this.mElement.style[key] = value + "px";
    }
    if (styleOptionType.notOperation.includes(key)) {
        this.mElement.style[key] = value;
    }
    if (key === "propValue") {
        this.mElement.innerText = value;
    }
    if (key === "srcImg") {
        this.mElement.src = value;
    }
}