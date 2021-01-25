import logo from "@/static/images/logo.png"
const template = document.createElement("template");
template.innerHTML = `
  <style>
    .header {
      position: relative;
      display: flex;
      height: 55px;
      padding: 0 40px;
      box-shadow: 0 2px 8px #f0f1f2;
    }
    .title {
      display: flex;
      align-items: center;
      color: rgba(0,0,0,.85);
      font: bolder 20px Avenir;
    }
    .title img {
      height: 50px;
    }
  </style>
  <header class="header">
    <div class="title">
      <img src="${logo}" />
      <span>Welcome to M-UI</span>
    </div>
  </header>
`;

export default class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(
            template.content.cloneNode(true)
        );
    }
}

customElements.define("m-header", Header);