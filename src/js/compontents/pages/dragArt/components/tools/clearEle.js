const template = document.createElement("template");
template.innerHTML = `
    <style>
        button {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 34px;
            padding: 0 10px;
            color: #fff;
            background-color: #F56C6C;
            border: none;
            outline: none;
            border-radius: 2px;
            cursor: pointer;
        }
        button:hover {
            background-color: #f78989;
            color: #fff;
        }
        button svg {
            margin-right: 3px;
        }
    </style>
    <button class="clear">
        <svg t="1612536384009" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8021" width="16" height="16"><path d="M517.59 21.609c-100.299 0-181.703 79.514-185.167 179.34H98.603c-25.979 0-47.235 21.099-47.235 47.236 0 25.98 21.099 47.237 47.236 47.237h52.117v528.416c0 99.196 67.233 180.285 150.37 180.285h423.55c82.98 0 150.37-80.616 150.37-180.285V295.737h47.236c25.98 0 47.236-21.1 47.236-47.237 0-25.98-21.099-47.236-47.236-47.236H702.441C699.449 101.124 617.888 21.61 517.59 21.61z m-96.677 179.34c3.464-51.172 45.19-90.85 96.834-90.85s93.37 39.835 96.362 90.85H420.913z m-119.98 714.842c-29.444 0-61.88-37.789-61.88-91.953V295.737h547.311V824.31c0 54.007-32.436 91.954-61.88 91.954H300.933v-0.473z m0 0" p-id="8022" fill="#ffffff"></path><path d="M364.387 802.267c21.57 0 39.363-21.571 39.363-48.653V476.022c0-27.082-17.635-48.654-39.363-48.654-21.572 0-39.364 21.572-39.364 48.654v277.592c0 26.924 17.32 48.653 39.364 48.653z m142.496 0c21.571 0 39.363-21.571 39.363-48.653V476.022c0-27.082-17.635-48.654-39.363-48.654-21.571 0-39.364 21.572-39.364 48.654v277.592c0 26.924 17.793 48.653 39.364 48.653z m149.896 0c21.571 0 39.364-21.571 39.364-48.653V476.022c0-27.082-17.635-48.654-39.364-48.654-21.571 0-39.363 21.572-39.363 48.654v277.592c0 26.924 17.162 48.653 39.363 48.653z m0 0" p-id="8023" fill="#ffffff"></path></svg>   
        清除
    </button>
`;

export default class ToolsClear extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(
        template.content.cloneNode(true)
        );
        this.oclear = this.shadowRoot.querySelector(".clear");
    }
    connectedCallback() {
        this.bindEvent();
    }
    bindEvent() {
        this.oclear.addEventListener("click", this.handleClick.bind(this), false);
    }
    handleClick() {
        alert("开发中");
    }
}
customElements.define("tools-clear", ToolsClear);
