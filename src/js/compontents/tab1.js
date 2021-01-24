const template = document.createElement("template");
template.innerHTML = `
  <style>
    
  </style>
  <div class="tab">
    Tab1
  </div>
`;

export default class Tab1 extends HTMLElement {
  constructor() {
    super();
    this.path = null;
    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );
  }
}
customElements.define("tab1-div", Tab1);
