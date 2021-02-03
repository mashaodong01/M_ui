import "./components/elements";
import "./components/drag-container";
import _template from "./template.js";
import _style from "./style.js";

const template = document.createElement("template");
template.innerHTML = `
    ${_style}
    ${_template}
`;

export default class DragArt extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(
            template.content.cloneNode(true)
        )
    }
    connectedCallback() {

    }
}

customElements.define("page-drag-art", DragArt)