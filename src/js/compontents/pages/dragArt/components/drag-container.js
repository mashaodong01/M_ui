import elementsData from "./elementsData";
import "./elements/mButton.js";

const template = document.createElement("template");
template.innerHTML = `
   <style>
      .drag-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden
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
    );
    this.dragContainer = this.shadowRoot.querySelector(".drag-container");
  }
  connectedCallback() {
    this.bindEvent();
  }
  bindEvent() {
    this.dragContainer.addEventListener(
      "drop",
      this.handleDrog.bind(this),
      false
    );
    this.dragContainer.addEventListener(
      "dragover",
      this.handleDragover.bind(this),
      false
    );
  }
  handleDrog(e) {
    e.preventDefault();
    e.stopPropagation();
    const eleParam = JSON.parse(e.dataTransfer.getData("param"));
    const mbtn = document.createElement("m-button");
    mbtn.style.top = e.offsetY - eleParam.offsetY + "px";
    mbtn.style.left = e.offsetX - eleParam.offsetX + "px";
    mbtn.style.position = "absolute";
    this.dragContainer.appendChild(mbtn);
  }
  handleDragover(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  }
}

customElements.define("drag-container", DragContainer);
