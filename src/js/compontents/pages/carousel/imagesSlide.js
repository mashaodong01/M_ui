export default class Carousel {
    constructor(options) {
        this.obox = options.doc.querySelector(options.el);
        this.oimgC = this.obox.querySelector(".imgC");
        this.oindicatorC = this.obox.querySelector(".car-indicator");
        this.pages = options.pages;
        this.sliderW = this.obox.offsetWidth;
        this.oImgCItem = [];
        this.indicatorItem = [];
        this.speed = options.speed;
        this.curIdx = 0;
        this.timer = null;
        this.init()
    }
    init() {
        this.createPage();
        this.playAuto()
        this.bindEvent();
    }
    createPage() {
        const imgFangment = new DocumentFragment();
        const itemFangment = new DocumentFragment();
        this.pages.forEach((page, index) => {
            const odiv = this.createDiv(page, index)
            this.oImgCItem.push(odiv);
            imgFangment.appendChild(odiv);

            const oi = this.createI(index);
            this.indicatorItem.push(oi);
            itemFangment.appendChild(oi);
        })
        imgFangment.appendChild(this.createDiv(this.pages[0]))
        this.oimgC.appendChild(imgFangment);
        this.oindicatorC.appendChild(itemFangment);
    }
    createDiv(page, index) {
        const odiv = document.createElement("div");
        if (index !== 0) {
            odiv.classList.add("itemImg");
        } else {
            odiv.classList.add("itemImg", "active");
        }
        const oimg = new Image();
        oimg.src = page;
        odiv.appendChild(oimg);
        return odiv
    }
    createI(index) {
        const oi = document.createElement("i");
        oi.setAttribute("index", index);
        if (index !== 0) {
            oi.classList.add("indicator-item");
        } else {
            oi.classList.add("indicator-item", "active");
        }
        return oi
    };
    playAuto() {
        this.timer = setInterval(() => {
            this.run()
        }, this.speed)
    }
    run() {
        this.changeIndex("next");
    }
    changeIndex(type) {
        let timer;
        if (type === "next") {
            if (this.curIdx === this.oImgCItem.length - 1) {
                this.curIdx++;
                this.pageChange("", this.curIdx, ".5s");
                setTimeout(() => {
                    this.curIdx = 0;
                    this.pageChange("", this.curIdx, "initial");
                }, 500);
                timer = setTimeout(() => {
                    this.pageChange("", this.curIdx, ".5s");
                    clearInterval(timer);
                }, 100);
            } else {
                this.curIdx++;
                this.pageChange("", this.curIdx, ".5s");
            }
        } else if (type === "prev") {
            if (this.curIdx === 0) {
                this.curIdx = this.oImgCItem.length - 1;
                this.pageChange("length", this.curIdx, "initial");
                timer = setTimeout(() => {
                    this.pageChange("", this.curIdx, ".5s");
                    clearInterval(timer);
                }, 100);
            } else {
                this.curIdx--;
                this.pageChange("", this.curIdx, ".5s");
            }
        }
    }
    pageChange(tpye, index, duratuin) {
        const num = tpye === "length" ? this.oImgCItem.length : index;
        this.oimgC.style.transform = `translate3d(${-this.sliderW * num}px,0px,0px)`;
        this.oimgC.style.transitionDuration = duratuin;
        this.changeItem(index);
    }
    changeItem(index) {
        index = index === this.oImgCItem.length ? 0 : index;
        const indicatorItem = this.indicatorItem;
        for (let i = 0; i < indicatorItem.length; i++) {
            if (index !== i) {
                indicatorItem[i].classList.remove("active")
            } else {
                indicatorItem[i].classList.add("active")
            }
        }
    }
    bindEvent() {
        this.obox.addEventListener("mouseover", this.mousemove.bind(this), false);
        this.obox.addEventListener("mouseout", this.mousemove.bind(this), false);
        this.obox.addEventListener("click", this.mouseClick.bind(this), false);
    }
    mousemove(e) {
        let ev = e.type;
        if (ev === "mouseover") {
            clearInterval(this.timer);
        } else {
            this.playAuto();
        }
    }
    mouseClick(ev) {
        const e = ev || window.event,
            tar = e.target || e.srcElement,
            tagName = tar.tagName.toLowerCase();
        if (tagName === "button") {
            const dir = tar.dataset.dir;
            this.changeIndex(dir);
        } else if (tagName === "i") {
            this.curIdx = Number(tar.getAttribute("index"));
            this.pageChange("", this.curIdx, ".5s");
        }
    }
}