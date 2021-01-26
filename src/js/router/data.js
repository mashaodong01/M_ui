const routerData = [
  {
    title: "首页",
    path: "/",
    redirect: "/mvvm",
    component: "",
    meta: {
      hidden: true,
    },
  },
  {
    title: "简单的MVVM",
    path: "/mvvm",
    component: "page-mvvm",
  },
  {
    title: "轮播图",
    path: "/carousel",
    component: "page-carousel",
  },
  {
    title: "百度搜索",
    path: "/search",
    component: "page-search",
  },
  {
    title: "标签页tab2",
    path: "/tab2",
    component: "page-tab2",
  },
  {
    title: "标签页tab3",
    path: "/tab3",
    component: "page-tab3",
  },
  {
    title: "标签页tab4",
    path: "/tab4",
    component: "page-tab4",
  },
];
export default routerData;
