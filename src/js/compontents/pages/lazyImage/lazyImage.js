import loading from "@/static/images/lazyImgs/loading.gif";

export default class LazyImage {
  constructor(options) {
    this.obox = options.doc.querySelector(options.el);
    this.ocontainer = this.obox.querySelector(".container");
    this.oList = [];
    this.dataImg = options.data;
    this.ocontainer.querySelectorAll(".item");
    this.init();
  }
  init() {
    this.createItem();
    this.observer();
  }
  createItem() {
    const fangment = new DocumentFragment();
    this.dataImg.forEach((item) => {
      const odiv = document.createElement("div");
      odiv.classList.add("item");
      const oimg = document.createElement("img");
      oimg.src = loading;
      oimg.setAttribute("data-src", item);
      odiv.appendChild(oimg);
      this.oList.push(odiv);
      fangment.appendChild(odiv);
    });
    this.ocontainer.appendChild(fangment);
  }
  observer() {
    if (IntersectionObserver) {
      let lazyImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
          let _lazyImage = entry.target.firstElementChild;
          if (entry.intersectionRatio > 0) {
            const dataSrc = _lazyImage.getAttribute("data-src");
            if (_lazyImage.getAttribute("src") !== dataSrc) {
              _lazyImage.setAttribute("src", dataSrc);
            }
            lazyImageObserver.unobserve(_lazyImage);
          }
        });
      });
      for (let i = 0; i < this.oList.length; i++) {
        lazyImageObserver.observe(this.oList[i]);
      }
    }
  }
}
