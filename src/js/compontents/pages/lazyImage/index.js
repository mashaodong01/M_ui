import LazyImage from "./lazyImage.js";
import _style from "./style.js";
import _template from "./template.js";
import img01 from "@/static/images/lazyImgs/01.jpg";
import img02 from "@/static/images/lazyImgs/02.jpg";
import img03 from "@/static/images/lazyImgs/03.jpg";
import img04 from "@/static/images/lazyImgs/04.jpg";
import img05 from "@/static/images/lazyImgs/05.jpg";
import img06 from "@/static/images/lazyImgs/06.jpg";
import img07 from "@/static/images/lazyImgs/07.jpg";
import img08 from "@/static/images/lazyImgs/08.jpg";
import img09 from "@/static/images/lazyImgs/09.jpg";
import img10 from "@/static/images/lazyImgs/10.jpg";
import img11 from "@/static/images/lazyImgs/11.jpg";
import img12 from "@/static/images/lazyImgs/12.jpg";
import img13 from "@/static/images/lazyImgs/13.jpg";

const template = document.createElement("template");
template.innerHTML = `
    ${_style}
    ${_template}
`;

export default class LazyImgComponent extends HTMLElement {
  constructor() {
    super();
    this.template = template.content.cloneNode(true);
    this.attachShadow({ mode: "open" }).appendChild(this.template);
  }
  connectedCallback() {
    this.createLazyImg();
  }
  createLazyImg() {
    new LazyImage({
      el: "#lazyImg",
      doc: this.shadowRoot,
      data: [
        img01,
        img02,
        img03,
        img04,
        img05,
        img06,
        img07,
        img08,
        img09,
        img10,
        img11,
        img12,
        img13,
      ],
    });
  }
}
customElements.define("page-lazy", LazyImgComponent);
