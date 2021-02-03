import PrestrainImage from "./prestrain.js";
import _style from "./style.js";
import _template from "./template.js";
import img01 from "@/static/images/lazyImgs/01.jpg";

const template = document.createElement("template");
template.innerHTML = `
    ${_style}
    ${_template}
`;

export default class PrestrainComponent extends HTMLElement {
  constructor() {
    super();
    this.template = template.content.cloneNode(true);
    this.attachShadow({ mode: "open" }).appendChild(this.template);
  }
  connectedCallback() {
    this.createImg();
  }
  createImg() {
    new PrestrainImage({
      el: "#prestrainImg",
      doc: this.shadowRoot,
      data: img01,
    });
  }
}
customElements.define("page-prestrain", PrestrainComponent);
