const template = `
  <div id="search-container">
    <div class="input">
      <input type="text"/>
      <ul class="result">
        
      </ul>
    </div>
    <div class="hnit">
      百度查询接口存在跨域问题，所以我们只能用jsonp去请求。平时的开发中使用
      <span class="sign">XMLHttpRequest，用abort终止未响应的请求。</span>
      <hr/>
      <span class="sign">为什么需要终止:</span>
      当请求响应比较慢时，若不取消，一旦发生<span class="sign">先</span>请求的接口<span class="sign">后</span>返回。会导致查询的出内容与关键字不符。
    </div>
  </div>
`;

export default template;