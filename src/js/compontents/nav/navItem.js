import router from "@/js/router/index.js";
const template = document.createElement("template");
template.innerHTML = `
  <style>
    .nav-item {
      padding: 10px 25px;
      margin-top: 15px;
      font-size: 18px;
      color: #304455;
      cursor: pointer;
      border-bottom: 2px solid transparent;
    }
    .nav-item:hover {
      color: #42b983;
    }
    .nav-item.current {
      color: #42b983;
      background-color: rgb(225, 243, 216);
      border-right: 3px solid #42b983;
    }
  </style>
  <div class="nav-item">
    <span class="title"></span>
  </div>
`;

export default class NavItem extends HTMLElement {
  constructor() {
    super();
    this.path = null;
    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );
    this.oTitle = this.shadowRoot.querySelector(".nav-item");
  }
  connectedCallback() {
    this.init();
  }
  init() {
    this.eventBind();
    this.setStyle();
  }
  setStyle() {
    if (this.path === location.hash.slice(1)) {
      this.oTitle.classList.add("current");
    } else {
      this.oTitle.classList.remove("current");
    }
  }
  eventBind() {
    this.oTitle.addEventListener("click", this.handleClick.bind(this), false);
    window.addEventListener("hashchange", this.setStyle.bind(this), false);
  }
  handleClick() {
    router.push(this.path);
  }
  static get observedAttributes() {
    return ["title", "data-url"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "title") {
      this.oTitle.textContent = newValue;
    }
    if (name === "data-url") {
      this.path = newValue;
    }
  }
}
customElements.define("m-menu-item", NavItem);
