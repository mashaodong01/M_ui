import { mousedown, observerSet } from "../../utils/index.js";

const template = document.createElement("template");
template.innerHTML = `
   <style>
     .m-button {
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
   </style>
   <button class="m-button">按钮</button>
`;

export default class MButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(
            template.content.cloneNode(true)
        );
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
        )
    }
    handleMousedown(e) {
        mousedown.apply(this, [e.offsetY, e.offsetX])
    }
    handleClick() {
        observerSet("currentComponentId", this.componentId);
    }
    static get observedAttributes() {
        return ["componentid"];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "componentid") {
            this.componentId = newValue;
        }
    }
}
customElements.define("m-button", MButton);