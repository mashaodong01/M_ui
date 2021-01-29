const template = document.createElement("template");

template.innerHTML = `
  <style>
    .indicator-item {
        display: block;
        height: 6px;
        width: 6px;
        border: 1px solid #ffffff;
        border-radius: 50%;
        margin-right: 10px;
        cursor: pointer;
    }
    
    .active {
        background-color: #ffffff;
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
    } 
  </style>
  <i class="indicator-item">
  </i>
`

export default class IndicatorItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(
            template.content.cloneNode(true)
        )
        this.oi = this.shadowRoot.querySelector(".indicator-item");
    }
    connectedCallback() {

    }
    setClass(val) {
        this.oi.className = `indicator-item ${val}`
    }
    static get observedAttributes() {
        return ["class-active"]
    }
    attributeChangedCallback(name, oVal, nVal) {
        switch (name) {
            case "class-active":
                this.setClass(nVal);
                break;
            default:
                break;
        }
    }
}

customElements.define("indicator-item", IndicatorItem);