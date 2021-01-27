import { debounce, removeAllChild } from "@/utils/minTools.js";
import request from "@/utils/request.js";
import jsonp from "@/utils/myJsonp.js";

export default class Search {
    constructor(options) {
        this.odom = options.doc.querySelector(options.el);
        this.oinput = this.odom.querySelector("input");
        this.oresult = this.odom.querySelector(".result")
        this.init();
    }
    init() {
        this.initEvent();
    }
    initEvent() {
        this.oinput.addEventListener(
            "input",
            debounce(this.handleInput.bind(this), 500, false),
            false
        );
        document.addEventListener("click", this.docClick.bind(this), false);
        this.oresult.addEventListener("click", this.itemClick.bind(this), false);
    }
    docClick(e) {
        if (e.path[0] !== this.oinput) {
            this.oresult.style.display = "none"
        }
    }
    itemClick(e) {
        const target = e.target;
        const tagName = target.tagName.toLowerCase()
        switch (tagName) {
            case "span":
                this.oinput.value = target.innerText;
                break;
            case "li":
                this.oinput.value = target.firstElementChild.innerText;
                break;
            default:
                break;
        }
    }
    searchCb(data) {
        const list = data.g ? data.g : []
        const fangment = new DocumentFragment();
        list.forEach(ele => {
            const oli = document.createElement("li");
            oli.classList.add("item");
            oli.innerHTML = `<span>${ele.q}</span>`;
            fangment.appendChild(oli);
        })
        removeAllChild(this.oresult)
        this.oresult.appendChild(fangment);
        this.oresult.style.display = list.length ? "block" : "none";
    }
    async handleInput(e) {
        const { value } = e.path[0];

        // const res = await request(`https://www.baidu.com/sugrec?prod=pc&from=pc_web&wd=${value}`, true);
        // this.searchCb(res)

        jsonp("https://www.baidu.com/sugrec", { prod: "pc", from: "pc_web", wd: value }, this.searchCb.bind(this))
    }
}