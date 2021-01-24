import routerData from "@/js/router/data";
import router from "@/js/router/index.js";

const template = document.createElement("template");
template.innerHTML = `
  <style>
    .nav {
      display: flex;
      flex-direction: column;
      width: 250px;
      height: 100%;
      background-color: #fff;
      border-right: 1px solid #f0f0f0
    }
  </style>
  <div class="nav"></div>
`;

export default class Nav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );
  }
  connectedCallback() {
    this.createContent();
    router.forceRefresh();
  }

  createContent() {
    const div = this.shadowRoot.querySelector("div");
    routerData.forEach((router) => {
      const routerItem = document.createElement("m-menu-item");
      routerItem.setAttribute("title", router.title);
      routerItem.setAttribute("data-url", router.path);
      div.appendChild(routerItem);
    });
  }
}

customElements.define("m-menu", Nav);
