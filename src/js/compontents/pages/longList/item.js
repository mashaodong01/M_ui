const template = document.createElement("template");
template.innerHTML = `
  <style>
    .list-item {
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      color: #606266;
      border-bottom: 1px solid #eaeefb;
    }
  </style>
  <div class="list-item">无敌淦饭人</div>
`;

export default class ListItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );
  }
}
customElements.define("list-item", ListItem);
