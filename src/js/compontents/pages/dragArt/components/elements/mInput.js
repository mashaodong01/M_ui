const template = document.createElement("template");
import { mousedown, observerSet, updateStyle } from "../../utils/index";
import observer from "../../utils/observer.js";

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
        outline: none;
        cursor: pointer;
        letter-spacing: 0px;
        color: #000;
        box-sizing: border-box
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
        <input class="m-input" type="text" />
   </div>
`;

export default class MInput extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(
            template.content.cloneNode(true)
        );
        this.obox = this.shadowRoot.querySelector(".box-ele");
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
        );
        observer.subscribe(this.updateEle.bind(this), "componentStyle");
    }
    updateEle({ componentId, key, value }) {
        if (this.componentId == componentId) {
            updateStyle.call(this, key, value);
        }
    }
    handleMousedown(e) {
        mousedown.apply(this, [e.offsetY, e.offsetX])
    }
    handleClick() {
        observerSet("currentComponentId", this.componentId);
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
customElements.define("m-input", MInput);