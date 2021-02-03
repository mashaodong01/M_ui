const template = document.createElement("template");
template.innerHTML = `
   <style>
      .drag-container {
          width: 100%;
          height: 100%;
      }
   </style>
   <div class="drag-container">
   </div>
`;

export default class DragContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(
            template.content.cloneNode(true)
        )
        this.dragContainer = this.shadowRoot.querySelector(".drag-container");
    }
    connectedCallback() {
        this.bindEvent();
    }
    bindEvent() {
        this.dragContainer.addEventListener("drop", this.handleDrog.bind(this), false);
        this.dragContainer.addEventListener("dragover", this.handleDragover.bind(this), false)
    }
    handleDrog(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log(e.dataTransfer.getData('index'))
    }
    handleDragover(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy";
    }
}

customElements.define("drag-container", DragContainer)