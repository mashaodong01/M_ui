import "./tools/clearEle.js"
const template = document.createElement("template");
template.innerHTML = `
   <style>
     .tools {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 0 20px;
        box-sizing: border-box;
     }
   </style>
   <div class="tools">
     <tools-clear />
   </div>
`;

export default class DragTools extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );
    this.tools = this.shadowRoot.querySelector(".tools");
  }
  connectedCallback() {
  }
}
customElements.define("drag-tools", DragTools);
