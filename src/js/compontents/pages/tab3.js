const template = document.createElement("template");
template.innerHTML = `
  <style>
    
  </style>
  <div class="tab">
    Tab3
  </div>
`;

export default class Tab3 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(
            template.content.cloneNode(true)
        );
    }
}
customElements.define("page-tab3", Tab3);