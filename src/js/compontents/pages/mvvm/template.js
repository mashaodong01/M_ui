const template = ` 
  <div id="mvvm">
    <div class="github-link">
      <a href="https://github.com/mashaodong01/M_ui/tree/master/src/js/compontents/pages/mvvm" target="_block">
        gihub地址
      </a>
    </div>
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
export default template;
