const template = document.createElement("template");
template.innerHTML = `
  <style>
    
  </style>
  <div class="tab">
    Tab2
  </div>
`;

export default class Tab2 extends HTMLElement {
  constructor() {
    super();
    this.path = null;
    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );
  }
}
customElements.define("tab2-div", Tab2);
