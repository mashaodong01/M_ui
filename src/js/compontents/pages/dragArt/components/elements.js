import elementsData from "./elementsData";
const template = document.createElement("template");
template.innerHTML = `
   <style>
     .elements {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
     }
     button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 34px;
        margin-bottom: 10px;
        color: #fff;
        background-color: #409eff;
        border: none;
        outline: none;
        border-radius: 2px;
        cursor: pointer;
     }
     button:hover {
        background-color: #66b1ff;
        color: #fff;
     }
     button svg {
         margin-right: 3px;
     }
   </style>
   <div class="elements">
   </div>
`;

export default class DragElements extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(
            template.content.cloneNode(true)
        );
        this.elementsBox = this.shadowRoot.querySelector(".elements");
    }
    connectedCallback() {
        this.createDom();
    }
    createDom() {
        const fragment = new DocumentFragment();
        elementsData.forEach((ele, index) => {
            const dom = document.createElement("button");
            dom.classList.add(ele.class);
            dom.setAttribute("draggable", true);
            dom.setAttribute("data-index", index);
            dom.innerHTML = ele.icon + ele.label;
            this.bindEvent(dom, index);
            fragment.appendChild(dom);
        });
        this.elementsBox.appendChild(fragment);
    }
    bindEvent(dom, index) {
        dom.addEventListener("dragstart", function(e) {
            this.handleDragStart(e, index)
        }.bind(this), false);
    }
    handleDragStart(e, index) {
        e.dataTransfer.setData(
            "param",
            JSON.stringify({
                index: index,
                offsetX: e.offsetX,
                offsetY: e.offsetY,
            })
        );
    }
}
customElements.define("drag-elements", DragElements);