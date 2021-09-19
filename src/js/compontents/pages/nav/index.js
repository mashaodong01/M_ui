import _template from './template.js';
import _style from './style.js';
import Nav from './nav.js';

const template = document.createElement('template');
template.innerHTML = `
    ${_style}
    ${_template}
`;

export default class PageNav extends HTMLElement {
    constructor() {
        super();
        this.template = template.content.cloneNode(true);
        console.log(this.template)
        this.attachShadow({ mode: "open" }).appendChild(this.template);
    }
    connectedCallback() {
        new Nav({
            el: 'page-nav',
            doc: this.shadowRoot,
        }); 
    }
}
customElements.define("page-nav", PageNav);
