const template = document.createElement("template");
template.innerHTML = `
  <style>
    
  </style>
  <div class="tab">
    Tab4
  </div>
`;

export default class Tab4 extends HTMLElement {
    constructor() {
        super();
        this.path = null;
        this.attachShadow({ mode: "open" }).appendChild(
            template.content.cloneNode(true)
        );
    }
}

customElements.define("router-tab4", Tab4);