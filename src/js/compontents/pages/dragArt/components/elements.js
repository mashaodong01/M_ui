import elementsData from "./elementsData";
const template = document.createElement("template");
template.innerHTML = `
   <style>
     .ele-button,
     .ele-img,
     .ele-input {
        width: 80px;
        height: 34px;
        cursor: pointer;
     }
   </style>
`;

export default class DragElements extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );
  }
  connectedCallback() {
    this.createDom();
    this.bindEvent();
  }
  createDom() {
    const fragment = new DocumentFragment();
    elementsData.forEach((ele, index) => {
      const dom = document.createElement("button");
      dom.classList.add(ele.class);
      dom.setAttribute("draggable", true);
      dom.setAttribute("data-index", index);
      dom.innerText = ele.label;
      fragment.appendChild(dom);
    });
    this.shadowRoot.appendChild(fragment);
  }
  bindEvent() {
    this.addEventListener("dragstart", this.handleDragStart.bind(this), false);
  }
  handleDragStart(e) {
    e.dataTransfer.setData(
      "param",
      JSON.stringify({
        index: e.path[0].dataset.index,
        offsetX: e.offsetX,
        offsetY: e.offsetY,
      })
    );
  }
}

customElements.define("drag-elements", DragElements);
