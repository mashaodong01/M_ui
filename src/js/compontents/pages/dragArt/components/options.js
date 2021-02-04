import observer from "../utils/observer.js";
import "./options/optionInput.js"
import store from "../store/index.js";
import {optionStyle} from "./elementsData.js";
import {removeChild} from "../utils/index.js";


const template = document.createElement("template");
template.innerHTML = `
   <style>
    
   </style>
   <div class="options">
   </div>
`;

export default class DragOptions extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(
            template.content.cloneNode(true)
        );
        this.optionsBox = this.shadowRoot.querySelector(".options");
        this.currentDomData = null;
    }
    connectedCallback() {
        observer.subscribe(this.currentDomChange.bind(this), "currentComponentId");
    }
    currentDomChange(componentId) {
        const data = store.get("components");
        this.currentDomData = data.find(ele => ele.componentId == componentId);
        removeChild(this.optionsBox);
        this.createDom(this.currentDomData.style);
    }
    createDom(styleData) {
        const fragment = new DocumentFragment();
        for (let key in styleData) {
            if (optionStyle[key]) {
                const { type, label, defaultval } = optionStyle[key];
                const optionEle = document.createElement("option-input");
                optionEle.setAttribute("type", type);
                optionEle.setAttribute("label", label);
                optionEle.setAttribute("defaultval", defaultval);
                fragment.appendChild(optionEle);
            }
        }
        this.optionsBox.appendChild(fragment);
    }
    bindEvent(dom) {

    }
}
customElements.define("drag-options", DragOptions);