const template = document.createElement("template");
template.innerHTML = `
   <style>
     .ele-button {
        width: 100px;
        height: 40px;
     }
   </style>
   <button class="ele-button" draggable="true">按钮</button>
`;

export default class DragElements extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );
    this.eleButton = this.shadowRoot.querySelector(".ele-button");
  }
  connectedCallback() {
    this.bindEvent();
  }
  bindEvent() {
    this.eleButton.addEventListener(
      "dragstart",
      this.handleDragStart.bind(this),
      false
    );
  }
  handleDragStart(e) {
    e.dataTransfer.setData(
      "param",
      JSON.stringify({
        index: 1,
        offsetX: e.offsetX,
        offsetY: e.offsetY,
      })
    );
  }
}

customElements.define("drag-elements", DragElements);
