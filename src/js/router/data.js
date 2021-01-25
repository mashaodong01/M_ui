const routerData = [{
        title: "首页",
        path: "/",
        redirect: "/mvvm",
        component: "",
        meta: {
            hidden: true
        }
    }, {
        title: "简单的MVVM",
        path: "/mvvm",
        component: "router-mvvm",
    },
    {
        title: "标签页tab2",
        path: "/tab2",
        component: "router-tab2",
    },
    {
        title: "标签页tab3",
        path: "/tab3",
        component: "router-tab3",
    },
    {
        title: "标签页tab4",
        path: "/tab4",
        component: "router-tab4",
    },
];
export default routerData;