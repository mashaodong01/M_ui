import Mvvm from "./mvvm.js";

const template = document.createElement("template");
template.innerHTML = `
    <style>
    .view-item,
    .inputs-item {
        display: flex;
        align-items: center;
        height: 40px;
    }
    
    .view-item,
    .inputs-item {
        display: flex;
        align-items: center;
        height: 40px;
    }
    
    .view-item .label,
    .inputs-item .label {
            text-align: right;
            vertical-align: middle;
            font-size: 14px;
            color: #606266;
            line-height: 32px;
            padding: 0 12px 0 0;
            box-sizing: border-box;
        }
    
    .view-item .value {
        line-height: 32px;
    }
    
    .inputs-item input {
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 32px;
        line-height: 32px;
        outline: none;
        padding: 0 15px;
        width: 100%;
    }
    
    .divider {
        display: block;
        height: 1px;
        width: 100%;
        margin: 24px 0;
        background-color: #dcdfe6;
    }
    </style>
    <div id="mvvm">
        <div id="inputs">
            <div class="inputs-item">
                <span class="label">
                  姓名
                </span>
                <span class="value">
                    <input v-model="name" type="text" />
                </span>
            </div>
            <div class="inputs-item">
                <span class="label">
                    年龄
                </span>
                <span class="value">
                    <input v-model="age" type="text" />
                </span>
            </div>
            <div class="inputs-item">
                <span class="label">
                    性别
                </span>
                <span class="value">
                    <input v-model="sex" type="text" />
                </span>
            </div>
            <div class="inputs-item">
                <span class="label">
                    身高
                </span>
                <span class="value">
                    <input v-model="height" type="text" />
                </span>
            </div>
        </div>
        <div class="divider"></div>
        <div>
            <div class="view-item">
                <span class="label">姓名：</span><span class="value">{{name}}</span>
            </div>
            <div class="view-item">
                <span class="label">年龄：</span><span class="value">{{age}}</span>
            </div>
            <div class="view-item">
                <span class="label">性别：</span><span class="value">{{sex}}</span>
            </div>
            <div class="view-item">
                <span class="label">身高：</span><span class="value">{{height}}</span>
            </div>
        </div>
    </div>
`;

export default class MvvmComponent extends HTMLElement {
    constructor() {
        super();
        this.template = template.content.cloneNode(true)
        this.attachShadow({ mode: "open" }).appendChild(
            this.template
        );
        this.init()
    }
    init() {
        new Mvvm({
            el: "#mvvm",
            doc: this.shadowRoot,
            data: {
                name: "111",
                age: "222",
                sex: "333",
                height: "444",
            }
        })
    }
}
customElements.define("router-mvvm", MvvmComponent);