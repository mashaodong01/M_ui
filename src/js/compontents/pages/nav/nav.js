export default class Nav {
  constructor(options) {
    this.$el = options.doc.getElementById(options.el);
    this.navList = this.$el.querySelector(".list");
    this.navItemsList = this.$el.querySelectorAll(".nav-item");
    this.navContentList = this.$el.querySelectorAll(".content-item");
    this.timer = null;
    // 把左上角当作0，0坐标
    const { width, height } = this.navList.getBoundingClientRect();
    this.positions = [
      { left: 0, top: 0, key: "进入" },
      { left: width, top: 0, key: "右上" },
      { left: width, top: -height, key: "右下" },
    ];
    this.time = Date.now();
    this.init();
  }
  init() {
    this.eventBind();
  }
  eventBind() {
    for (let [index, item] of this.navItemsList.entries()) {
      item.addEventListener(
        "mouseover",
        this.mouseover.bind(this, index),
        false
      );
      item.addEventListener("mouseout", this.mouseout.bind(this, index), false);
    }
  }
  mouseover(index, e) {
    this.time = Date.now();
    this.target = {
      left: e.offsetX,
      top: -(e.offsetY + index * 44.5),
      key: "滑出",
    };
    if (this.timer) {
      clearTimeout(this.timer);
    }
    const target = e.target;
    if (!this.isSkip()) {
      this.time = Date.now();
      this.timer = this.getTimer(500, target, index);
      return;
    }
    this.timer = this.getTimer(100, target, index);
  }
  getTimer(time, target, index) {
    return setTimeout(() => {
      for (let i = 0; i < this.navContentList.length; i++) {
        this.navContentList[i].classList.remove("active");
        this.navItemsList[i].classList.remove("active");
      }
      target.classList.add("active");
      this.navContentList[index].classList.add("active");
    }, time);
  }
  isSkip() {
    const [_point1, _point2, _point3] = this.positions;
    this.positions.splice(0, 1, {
      ...this.target,
      key: "进入",
    });
    return !this.compare({
      target: this.target,
      targetPoint: _point1,
      point1: _point2,
      point2: _point3,
    });
  }
  mouseout() {
    if(Date.now() - this.time < 500) {
        clearTimeout(this.timer);
    }
  }
  compare({ target, targetPoint, point1, point2 }) {
    var PA = this.vec(target, targetPoint),
      PB = this.vec(target, point1),
      PC = this.vec(target, point2),
      R1 = this.vecProdiuct(PA, PB),
      R2 = this.vecProdiuct(PB, PC),
      R3 = this.vecProdiuct(PC, PA);
    return this.sameSymbols(R1, R2) && this.sameSymbols(R2, R3);
  }
  vec(a, b) {
    return {
      x: b.left - a.left,
      y: b.top - a.top,
    };
  }
  vecProdiuct(v1, v2) {
    return v1.x * v2.y - v2.x * v1.y;
  }
  sameSymbols(a, b) {
    return (a ^ b) >= 0;
  }
}
