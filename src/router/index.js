import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const index = r => require.ensure([], () => r(require("views/index")), "index");

export default new Router
({
    routes:
    [
        {
            path: "",
            redirect: "/index"
        },
        {
            path: "/index",
            name: "index",
            component: index
        }
    ]
})
