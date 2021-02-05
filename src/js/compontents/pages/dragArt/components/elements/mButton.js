import { mousedown, observerSet } from "../../utils/index.js";
import observer from "../../utils/observer.js";

const template = document.createElement("template");
template.innerHTML = `
    <style>
        .m-button {
            position: relative;
            width: 100px;
            height: 34px;
            color: #fff;
            background-color: #409eff;
            border: none;
            border-color: #409eff;
            border-radius: 4px;
            font-size: 14px;
            line-height: 34px;
            outline: none;
            cursor: pointer;
        }
        .m-button:hover {
            background: #66b1ff;
            border-color: #66b1ff;
        }
        .box-ele {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1px;
        }
        .box-ele.active {
            background: transparent;
            border: 1px solid #59c7f9;
        }
   </style>
   <div class="box-ele">
        <button class="m-button">按钮</button>
   </div>
`;

export default class MButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(
            template.content.cloneNode(true)
        );
        this.obox = this.shadowRoot.querySelector(".box-ele");
        this.mElement = this.shadowRoot.querySelector(".m-button");
        this.componentId = null;
    }
    connectedCallback() {
        this.bindEvent();
        this.parent = this.parentElement;
    }
    bindEvent() {
        this.mElement.addEventListener(
            "mousedown",
            this.handleMousedown.bind(this),
            false
        );
        this.mElement.addEventListener(
            "click",
            this.handleClick.bind(this),
            false
        );
        observer.subscribe(this.updateEle.bind(this), "componentStyle");
    }
    handleMousedown(e) {
        mousedown.apply(this, [e.offsetY, e.offsetX]);
    }
    handleClick() {
        observerSet("currentComponentId", this.componentId);
    }
    updateEle({ componentId, key, value }) {
        if (this.componentId == componentId) {
            this.mElement.style[key] = value + "px";
        }
    }
    static get observedAttributes() {
        return ["componentid", "isactive"];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "componentid") {
            this.componentId = newValue;
        } else if (name === "isactive") {
            this.obox.classList.remove("active");
            newValue && this.obox.classList.add(newValue);
        }
    }
}
customElements.define("m-button", MButton);