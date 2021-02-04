const template = document.createElement("template");
import { mousedown, observerSet } from "../../utils/index"
template.innerHTML = `
   <style>
     .m-input {
        width: 200px;
        height: 33px;
        padding: 0 12px;
        background-color: #fff;
        border: 1px solid #DCDFE6;
        border-radius: 3px;
        font-size: 14px;
        font-weight: 500;
        line-height: 34px;
        outline: none;
        cursor: pointer;
        letter-spacing: 0px;
        color: #000;
     }
   </style>
   <input class="m-input" type="text" />
`;

export default class MInput extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(
            template.content.cloneNode(true)
        );
        this.mElement = this.shadowRoot.querySelector(".m-input");
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
customElements.define("m-input", MInput);