import elementsData from "./elementsData";
import observer from "../utils/observer.js";
import store from "../store/index"

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
        // this.createDom();
    }
    currentDomChange(componentId) {
        const data = store.get("components");
        this.currentDomData = data.find(ele => ele.componentId == componentId);
        console.log(this.currentDomData)
    }
    createDom() {
        const fragment = new DocumentFragment();
        elementsData.forEach((ele, index) => {
            const dom = document.createElement("button");
            dom.classList.add(ele.class);
            dom.setAttribute("draggable", true);
            dom.setAttribute("data-index", index);
            dom.innerHTML = ele.icon + ele.label;
            this.bindEvent(dom);
            fragment.appendChild(dom);
        });
        this.optionsBox.appendChild(fragment);
    }
    bindEvent(dom) {

    }
}
customElements.define("drag-options", DragOptions);