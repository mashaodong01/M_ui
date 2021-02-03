const template = document.createElement("template");
template.innerHTML = `
   <button class="ele-button" draggable="true">按钮</button>
`;

export default class DragElements extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(
            template.content.cloneNode(true)
        )
        this.eleButton = this.shadowRoot.querySelector(".ele-button");
    }
    connectedCallback() {
        this.bindEvent();
    }
    bindEvent() {
        this.eleButton.addEventListener("dragstart", this.handleDragStart.bind(this), false);
    }
    handleDragStart(e) {
        e.dataTransfer.setData("index", 0)
    }
}

customElements.define("drag-elements", DragElements)