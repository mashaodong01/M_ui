const template = document.createElement("template");
template.innerHTML = `
   <style>
     .m-button {
        
        width: 100px;
        height: 40px;
        background-color: #fff;
     }
   </style>
   <button class="m-button">按钮</button>
`;

export default class MButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );
    this.mButton = this.shadowRoot.querySelector(".m-button");
  }
  connectedCallback() {
    this.bindEvent();
  }

  bindEvent() {
    this.mButton.addEventListener(
      "mousedown",
      this.handleMousedown.bind(this),
      false
    );
  }
  handleMousedown(e) {
    const offsetY = e.offsetY;
    const offsetX = e.offsetX;
    const move = (en) => {
      this.style.top = en.offsetY - offsetY - 80 + "px";
      this.style.left = en.offsetX - offsetX - 220 + "px";
    };
    const up = () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
  }
  static get observedAttributes() {
    return ["parent"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "parent") {
      console.log(newValue);
    }
  }
}
customElements.define("m-button", MButton);
