// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from "vue";
import router from "router";
import store from "vuexs";
import App from "./App";

// click事件
import vueTap from "v-tap";
Vue.use(vueTap);

// 全局引入自定义组件
import components from "components";
Object.keys(components).forEach(key => Vue.component(key, components[key]));

// 全局过滤器
import "filters";

// 全局样式
import "./scss/common.scss";

// 生产环境关闭日志打印
if(process.env.NODE_ENV === "production")
{
    newlife.logger.settings.logModel = "none";
}

// 全局文本资源
import { text } from "utils";
Vue.prototype.text = text;

// 全局枚举资源
import enums from "enums";
Vue.prototype.enum = enums;

// 是否开启浏览器vue-devtools调试
Vue.config.productionTip = (process.env.NODE_ENV !== "production");

Object.defineProperties(Vue.prototype,
{
    /**
     * 图片缩放处理
     * @param imageUrl    [string] 图片
     * @param width       [string] 指定图片裁剪的宽度    传了宽度必须传高度，否则无效
     * @param height      [string] 指定图片裁剪的高度
     * @param cropType    [number] 指定要下载的图片是缩放或者裁剪。 0 缩放；1 裁剪(能等比缩放就缩放)；2 强制裁剪;
     * @param positonType [number] 指定要裁剪的图片从哪里开始裁剪 0中间；1左边；2右边;
     */
    cropImage:
    {
		value: newlife.Nextends.cropImage
	}
});

const app = new Vue
({
    el: "#app",
    router,
    store,
    render: h => h(App)
});

// 失败执行函数。
let baseFailureHandler = newlife.ajax.handlers["failure"];

// 重写失败执行函数。
newlife.ajax.handlers["failure"] = (request, response) =>
{
    // 弹出提示
    app.$vux.toast.show
    ({
        type: "warn",
        text: reponse.Message
    });

    // 调用父类请求失败函数
    failureHandlers.call(this, request, reponse);
};
