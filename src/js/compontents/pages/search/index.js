import Search from "./search.js";
import _style from "./style.js";
import _template from "./template.js";

const template = document.createElement("template");
template.innerHTML = `
  ${_style}
  ${_template}
`;

export default class SearchModule extends HTMLElement {
  constructor() {
    super();
    this.template = template.content.cloneNode(true);
    this.attachShadow({ mode: "open" }).appendChild(this.template);
  }
  connectedCallback() {
    this.createSearch();
  }
  createSearch() {
    new Search({
      el: "#search-container",
      doc: this.shadowRoot,
    })
  }
}

customElements.define("page-search", SearchModule)
