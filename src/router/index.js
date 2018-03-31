import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const test = r => require.ensure([], () => r(require("views/test")), "test");
// 游戏中心
const gameCenter = r => require.ensure([], () => r(require("views/game-center")), "game");
// 游戏详情
const gameDetail = r => require.ensure([], () => r(require("views/game-detail")), "game");

export default new Router
({
    routes:
    [
    ]
})
