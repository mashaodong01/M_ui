import { debounce } from "../../utils/index.js";

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
    }
    connectedCallback() {
        this.bindEvent()
    }
    bindEvent(dom) {
        this.ovalue.addEventListener("input", debounce(this.handleInput.bind(this), 1000, false), false);
    }
    handleInput(e) {
       console.log(e.path[0].value);
    }
    static get observedAttributes() {
        return ["label", "defaultval", "type"]
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "label") {
            this.olabel.innerText = newValue;
        } else if (name === "defaultval") {
            this.ovalue.value = newValue;
        } else if (name === "type") {
            this.ovalue.setAttribute("type", newValue);
            this.ovalue.classList.add(newValue)
        }
    }
}
customElements.define("option-input", OptionInput);