import observer from "../utils/observer.js";
import "./options/optionInput.js";
import store from "../store/index.js";
import { optionStyle } from "./elementsData.js";
import { removeChild } from "../utils/index.js";

const template = document.createElement("template");
template.innerHTML = `
    <style>
        .options {
            height: 100%;
            padding-right: 6px;
            overflow-y: auto;
        }     
        .options::-webkit-scrollbar {
            width: 6px;
            height: 0px;
        }
        .options::-webkit-scrollbar-thumb {
            border-radius: 10px;
            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
            background: rgb(225, 243, 216);
        }
        .options::-webkit-scrollbar-track {
            border-radius: 10px;
            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
            background: #fff;
        }
    </style>
    <div class="options">
    </div>
`;

export default class DragOptions extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
    this.optionsBox = this.querySelector(".options");
  }
  connectedCallback() {
    observer.subscribe(this.currentDomChange.bind(this), "currentComponentId");
  }
  currentDomChange(componentId) {
    this.optionsBox = this.querySelector(".options");
    const data = store.get("components");
    const { style, propValue, srcImg } = data.find(
      (ele) => ele.componentId == componentId
    );
    removeChild(this.optionsBox);
    this.createDom({ propValue, srcImg, ...style }, componentId);
  }
  createDom(optiosData, componentId) {
    const fragment = new DocumentFragment();
    for (let key in optiosData) {
      if (optiosData[key]) {
        const { type, label } = optionStyle[key];
        let optionEle = null;
        optionEle = document.createElement("option-input");
        optionEle.setAttribute("defaultval", optiosData[key]);
        optionEle.setAttribute("type", type);
        optionEle.setAttribute("key", key);
        optionEle.setAttribute("label", label);
        optionEle.setAttribute("componentid", componentId);
        fragment.appendChild(optionEle);
      }
    }
    this.optionsBox.appendChild(fragment);
  }
}
customElements.define("drag-options", DragOptions);
