const template = document.createElement("template");
template.innerHTML = `
   <style>
     .m-button {
        width: 100px;
        height: 34px;
        background-color: #fff;
        border: 1px solid #DCDFE6;
        outline: none;
        cursor: pointer;
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
    this.parent = this.parentElement;
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
    const maxLeft = this.parent.offsetWidth - this.mButton.offsetWidth;
    const maxTop = this.parent.offsetHeight - this.mButton.offsetHeight;
    const move = (en) => {
      const top = en.offsetY - offsetY - 80;
      const left = en.offsetX - offsetX - 220;
      if (top >= 0 && top <= maxTop && left >= 0 && left <= maxLeft) {
        this.style.top = top + "px";
        this.style.left = left + "px";
      }
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
