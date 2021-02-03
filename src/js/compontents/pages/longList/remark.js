const template = document.createElement("template");
template.innerHTML = `
  <style>
    .remark {
      margin-left: 40px;
      color: #606266;
    }
    .remark .scheme {
      width: 400px;
      font-size: 14px;
      color: #606266;
      line-height: 32px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    .remark .scheme .sign {
      color: #42b983;
    }
    .remark .scheme p {
      margin: 0;
      padding: 0;
    }
  </style>
  <div class="remark">
    <div class="scheme">
      <span class="sign">计时器：</span>
      <p>利用eventLoop宏任务触发渲染。</p>
    </div>
    <hr />
    <div class="scheme">
      <span class="sign">动画</span>
      <p>用window.requestAnimationFrame(cb)。回调函数在浏览器下一次重绘之前执行。主动触发渲染。</p>
    </div>
  </div>
`;

export default class Remark extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(
            template.content.cloneNode(true)
        );
    }
}
customElements.define("list-remark", Remark);