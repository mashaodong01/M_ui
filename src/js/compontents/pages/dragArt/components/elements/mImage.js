import logo from "@/static/images/logo.png";
import { mousedown, observerSet, updateStyle } from "../../utils/index";
import observer from "../../utils/observer.js";

const template = document.createElement("template");
template.innerHTML = `
   <style>
     .m-image {
        width: 300px;
        height: 200px;
        cursor: pointer;
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
        <img draggable="false" class="m-image" />
   </div>
`;

export default class MImage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(
            template.content.cloneNode(true)
        );
        this.obox = this.shadowRoot.querySelector(".box-ele");
        this.mElement = this.shadowRoot.querySelector(".m-image");
        this.mElement.src = logo;
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
customElements.define("m-image", MImage);