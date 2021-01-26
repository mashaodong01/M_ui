import _style from "./style.js";
import _template from "./template.js";
import _Carousel from "./imagesSlide";
import img01 from "@/static/images/carousel/01.jpg"
import img02 from "@/static/images/carousel/02.jpg"
import img03 from "@/static/images/carousel/03.jpg"
import img04 from "@/static/images/carousel/04.jpg"
import img05 from "@/static/images/carousel/05.jpg"
import img06 from "@/static/images/carousel/06.jpg"

const carouselPages = [
    img01,
    img02,
    img03,
    img04,
    img05,
    img06,
]

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
    connectedCallback() { this.init() }
    init() {
        this.createCarousel()
    }
    createCarousel() {
        new _Carousel({
            el: '.box',
            doc: this.shadowRoot,
            pages: carouselPages,
            speed: 2000
        })
    }
}
customElements.define("page-carousel", Carousel)