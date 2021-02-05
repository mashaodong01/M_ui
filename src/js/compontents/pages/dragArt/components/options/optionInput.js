import { debounce } from "../../utils/index.js";
import observer from "../../utils/observer.js";
import store from "../../store/index.js";

const template = document.createElement("template");
template.innerHTML = `
    <style>
        .option-input {
            margin-bottom: 20px;
        }
        .label {
            font-size: 14px;
            color: #606266;
            line-height: 25px;
        }
        .value {
            display: inline-block;
            height: 34px;
            background-color: #FFF;
            border-radius: 4px;
            border: 1px solid #DCDFE6;
            box-sizing: border-box;
            color: #606266;
            outline: 0;
        }
        .value.number {
            width: 100%;
            padding: 0 15px;
            letter-spacing: 0px;
            line-height: 34px;
        }
        .value.file {
            width: 0px;
            height: 0px;
        }
        .value.file:before {
            content: "上传图片";
            position: absolute;
            width: 80px;
            height: 34px;
            line-height: 34px;
            box-sizing: border-box;
            text-align: center;
            background: #fff;
            cursor: pointer;
            border: 1px solid #DCDFE6;
            border-radius: 4px;
        }
        .value.color {
            width: 34px;
            cursor: pointer;
        }
    </style>
    <div class="option-input">
        <div class="label-box">
            <span class="label"></span> 
        </div>
        <div class="value-box">
            <input class="value" />
        </div>
    </div>
`;

export default class OptionInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );
    this.olabel = this.shadowRoot.querySelector(".label");
    this.ovalue = this.shadowRoot.querySelector(".value");
    this.key = null;
    this.componentId = null;
  }
  connectedCallback() {
    this.bindEvent();
  }
  bindEvent() {
    if (this.key === "srcImg") {
      this.ovalue.addEventListener(
        "change",
        this.handleChange.bind(this),
        false
      );
    } else {
      this.ovalue.addEventListener(
        "input",
        debounce(this.handleInput.bind(this), 500, false),
        false
      );
    }
  }
  handleChange(e) {
      const url = window.URL.createObjectURL(e.path[0].files[0]);
      const param = { componentId: this.componentId, key: this.key, value: url };
      observer.setData("componentStyle", param);
      this.updateStore(param)
  }
  handleInput(e) {
    const param = {
      componentId: this.componentId,
      key: this.key,
      value: e.path[0].value,
    };
    observer.setData("componentStyle", param);
    this.updateStore(param);
  }
  updateStore({ componentId, key, value }) {
    const data = store.get("components");
    for (let i of data) {
      if (i.componentId == componentId) {
        i.style[key] = value;
        store.update("components", data);
        return;
      }
    }
  }
  static get observedAttributes() {
    return ["label", "defaultval", "type", "key", "componentid"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "label") {
      this.olabel.innerText = newValue;
    } else if (name === "defaultval" && newValue !== "none") {
      this.ovalue.value = newValue;
    } else if (name === "type") {
      this.ovalue.setAttribute("type", newValue);
      this.ovalue.classList.add(newValue);
    } else if (name === "key") {
      this.key = newValue;
    } else if (name === "componentid") {
      this.componentId = newValue;
    }
  }
}
customElements.define("option-input", OptionInput);
