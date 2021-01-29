import "./item.js";
import "./remark.js";
const template = document.createElement("template");
template.innerHTML = `
  <style>
    .long-list {
      display: flex;
    }
    .container {
      width: 400px;
      height: 700px;
      padding: 10px;
      border: 1px solid #42b983;
      border-radius: 10px;
      overflow-y: auto;
    }
    .container::-webkit-scrollbar {
      width: 8px;
      height: 0px;
    }
    .container::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: rgb(225, 243, 216);
    }
    .container::-webkit-scrollbar-track {
      border-radius: 10px;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: #fff;
    }
  </style>
  <div class="long-list">
    <div class="container">
    </div>
    <list-remark />
  </div>
`;

export default class LongList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );
    this.ocontainer = this.shadowRoot.querySelector(".container");
    this.count = 0;
    this.fragment = new DocumentFragment();
  }
  connectedCallback() {
    // this.timeOut();
    this.animation();
  }
  timeOut() {
    const timer = setInterval(() => {
      this.count++;
      for (let i = 0; i < 20; i++) {
        const oitem = document.createElement("list-item");
        this.fragment.appendChild(oitem);
      }
      this.ocontainer.appendChild(this.fragment);
      if (this.count > 100) {
        clearInterval(timer);
      }
    }, 16);
  }
  animation() {
    this.loop();
  }
  loop() {
    if (this.count < 100) {
      window.requestAnimationFrame(this.create.bind(this));
    }
  }
  create() {
    this.count++;
    for (let i = 0; i < 20; i++) {
      const oitem = document.createElement("list-item");
      this.fragment.appendChild(oitem);
    }
    this.ocontainer.appendChild(this.fragment);
    this.loop();
  }
}
customElements.define("page-long-list", LongList);
