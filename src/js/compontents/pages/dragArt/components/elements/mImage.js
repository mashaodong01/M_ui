import logo from "@/static/images/logo.png";
import { mousedown, observerSet } from "../../utils/index"
const template = document.createElement("template");
template.innerHTML = `
   <style>
     .m-image {
        width: 300px;
        height: 200px;
        cursor: pointer;
     }
   </style>
   <img draggable="false" class="m-image" />
`;

export default class MImage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(
            template.content.cloneNode(true)
        );
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
customElements.define("m-image", MImage);