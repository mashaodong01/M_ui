import loading from "@/static/images/lazyImgs/loading.gif";

export default class PrestrainImage {
  constructor(options) {
    this.obox = options.doc.querySelector(options.el);
    this.ocontainer = this.obox.querySelector(".container");
    this.dataImg = options.data;
    this.oimg = null;
    this.init();
  }
  init() {
    this.createImg();
    this.uploadImg();
  }
  createImg() {
    this.oimg = document.createElement("img");
    this.setImgSrc(loading);
    this.ocontainer.appendChild(this.oimg);
  }
  uploadImg() {
    const oimg = new Image();
    oimg.src = this.dataImg;
    oimg.onload = this.imgLoad.bind(this);
  }
  imgLoad() {
    this.setImgSrc(this.dataImg);
  }
  setImgSrc(url) {
    this.oimg.src = url;
  }
}
