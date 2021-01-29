const template = document.createElement("template");

template.innerHTML = `
  <style>
    .itemImg {
        float: left;
    }
    .itemImg.active {
        opacity: 1;
        z-index: 1;
    }
    .itemImg.active.opacity {
        animation: fade-in;
        animation-duration: 0.5s
    }
    .itemImg.other.opacity {
        animation: fade-out;
        animation-duration: 0.5s
    }
    .itemImg,
    .itemImg img {
        height: 100%;
        width: 600px;
    }
  </style>
  <div class="itemImg">
    <img />
  </div>
`

export default class SlideItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(
            template.content.cloneNode(true)
        )
        this.obox = this.shadowRoot.querySelector(".itemImg");
        this.oimg = this.obox.querySelector("img")
    }
    connectedCallback() {

    }
    setClass(val) {
        this.obox.classList.add(val);
    }
    setImgSrc(val) {
        this.oimg.src = val;
    }
    static get observedAttributes() {
        return ["class-active", "img-src"]
    }
    attributeChangedCallback(name, oVal, nVal) {
        switch (name) {
            case "class-active":
                this.setClass(nVal);
                break;
            case "img-src":
                this.setImgSrc(nVal);
                break;
            default:
                break;
        }
    }
}

customElements.define("slide-item", SlideItem);