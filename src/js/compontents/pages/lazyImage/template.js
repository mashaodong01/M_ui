const template = `
  <div id="lazyImg" class="lazy-img"> 
    <div class="container">
    </div>
    <div class="annotation">
      <div class="scheme">
        <span class="sign">
          常用方法：
        </span>
        <p>1.获取所有img的容器DOM</p>
        <p>2.给window绑定scroll事件，并设置节流(throttle)</p>
        <p>3.获取看见高度window.innerHeight和滚动条当前到顶部距离document.documentElementscrollTop || document.body.scrollTop</p>
        <p>4.每次触发事件，遍历容器DOM，获取每个DOM距离浏览器顶部距离imgs[i].offsetTop</p>
        <p>5.对比，若：imgs[i].offsetTop < window.innerHeight + document.body.scrollTop，则把data-src属性值给src</p>
      </div>
      <hr />
      <div class="scheme">
        <span class="sign">
          本例使用的方法：IntersectionObserver
        </span>
        <p>1.创建const lazyImageObserver = new IntersectionObserver(传入方法)</p>
        <p>2.遍历DOM，用lazyImageObserver.onserve(dom[i])，添加监听</p>
        <p>3.在传入方法中，可以监听到每个DOM漏出的占比innersectionRatio大于0，则把data-src属性值给src</p>
        <p>4.然后用lazyImageObserver.unobserve(dom)取消对其监听</p>
      </di>
    </div>
  </div>
`;
export default template;
