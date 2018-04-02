import API from "./api-urls";
import { ajaxTimeout }  from "settings";
import { ajax } from "utils/core";

let send = (options, url, method) =>
{
    // 如果未传入url以及参数抛出异常
    if (!url || !options)
    {
        throw new Error('url or options is null.');
    }

    // 如果没有设置请求方式默认请求方式为POST
    method = method || 'post';

    let request =
    {
        url: url,
        data: options.params,
        timeout: ajaxTimeout,
        success(response)
        {
            // 调用回调函数
            options.success && options.success.call(options.scope || this, response);
        },
        failure: options.failure,
        complete: options.complete
    };

    // 开始发送请求
    ajax[method](request);
};