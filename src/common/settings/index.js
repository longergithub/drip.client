/**
 * 优票用户端设置集合
 */
let isDev = process.env.NODE_ENV === "development";

export const ajaxTimeout    = 10000;                                        // AJAX 超时时间
export const apiUrl         = isDev ? "/api" : window.wechatConfig.apiUrl; // 接口地址