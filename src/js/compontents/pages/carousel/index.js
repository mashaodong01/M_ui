import _style from "./style.js";
import _template from "./template.js";

const template = document.createElement("template");
template.innerHTML = `
  ${_style}
  ${_template}
`;

export default class Carousel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );
  }
}
customElements.define("page-carousel", Carousel)
