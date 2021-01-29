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
    title: "懒加载",
    path: "/lazy",
    component: "page-lazy",
  },
  {
    title: "长列表加载",
    path: "/longList",
    component: "page-long-list",
  },
];
export default routerData;
