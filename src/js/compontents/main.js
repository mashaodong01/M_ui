const template = document.createElement("template");
template.innerHTML = `
  <style>
  </style>
`;

export default class Main extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
    this.classList.add("m-container");
  }
  connectedCallback() {}
}

customElements.define("m-container", Main);
