import elementsData from "./elementsData";
import "./elements/mButton.js";
import "./elements/mImage.js";
import "./elements/mInput.js";
import store from "../store/index"

const template = document.createElement("template");
template.innerHTML = `
   <style>
      .drag-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden
      }
   </style>
   <div class="drag-container">
   </div>
`;

export default class DragContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(
            template.content.cloneNode(true)
        );
        this.dragContainer = this.shadowRoot.querySelector(".drag-container");
    };
    connectedCallback() {
        this.bindEvent();
    };
    bindEvent() {
        this.dragContainer.addEventListener(
            "drop",
            this.handleDrog.bind(this),
            false
        );
        this.dragContainer.addEventListener(
            "dragover",
            this.handleDragover.bind(this),
            false
        );
    };
    handleDrog(e) {
        e.preventDefault();
        e.stopPropagation();
        const { offsetY, offsetX, index } = JSON.parse(e.dataTransfer.getData("param"));
        const ele = elementsData[index];
        const top = this._getTop(e.offsetY, offsetY, ele.style.height) + "px";
        const left = this._getLeft(e.offsetX, offsetX, ele.style.width) + "px";
        const componentId = store.getId();
        this._createdom(top, left, componentId)(ele.component);
        store.add("components", {...ele, componentId });
    };
    handleDragover(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy";
    };
    _getTop(boxY, eleY, eleH) {
        const top = boxY - eleY;
        const minTop = 0;
        const maxTop = this.dragContainer.offsetHeight - eleH;
        if (top < minTop) {
            return minTop;
        } else if (top > maxTop) {
            return maxTop;
        }
        return top;
    }
    _getLeft(boxX, eleX, eleW) {
        const left = boxX - eleX;
        const minLeft = 0;
        const maxLeft = this.dragContainer.offsetWidth - eleW;
        if (left < minLeft) {
            return minLeft;
        } else if (left > maxLeft) {
            return maxLeft;
        }
        return left;
    }
    _createdom(top, left, componentId) {
        return (tag) => {
            const otag = document.createElement(tag);
            otag.style.top = top;
            otag.style.left = left;
            otag.style.position = "absolute";
            otag.setAttribute("componentId", componentId);
            this.dragContainer.appendChild(otag);
        }
    }
}

customElements.define("drag-container", DragContainer);