import logo from "@/static/images/logo.png"
// 公共样式
const commonStyle = {
  rotate: "",
  opacity: 1,
};

// 编辑器左侧组件列表
const elementsData = [
  {
    component: "v-text",
    class: "ele-input",
    label: "文字",
    propValue: "文字",
    icon: "el-icon-edit",
    animations: [],
    events: {},
    style: {
      width: 200,
      height: 33,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "",
      letterSpacing: 0,
      textAlign: "",
      color: "",
    },
  },
  {
    component: "v-button",
    label: "按钮",
    class: "ele-button",
    propValue: "按钮",
    icon: "el-icon-thumb",
    animations: [],
    events: {},
    style: {
      width: 100,
      height: 34,
      borderWidth: "",
      borderColor: "",
      borderRadius: "",
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "",
      letterSpacing: 0,
      textAlign: "",
      color: "",
      backgroundColor: "",
    },
  },
  {
    component: "Picture",
    label: "图片",
    class: "ele-img",
    icon: "el-icon-picture",
    propValue: logo,
    animations: [],
    events: {},
    style: {
      width: 300,
      height: 200,
      borderRadius: "",
    },
  },
];

elementsData.forEach((item) => {
  item.style = { ...item.style, ...commonStyle };
});

export default elementsData;
