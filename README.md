# Drip.Wechat.Client

> 滴水之家微信客户端。

* 安装依赖 `npm i`.

## 生成步骤

``` bash
# 安装依赖
npm install

# 运行开发环境 localhost:8080
npm run dev

# 运行生产编译
npm run build

```

## 文件结构

```bash
├── config                  # webpack配置
├── dist                    # 打包之后的文件
├── node_modules            # 依赖
├── src             		# main
│    ├── api 				# API接口地址以及获取数据函数
│    ├── assets     		# 字体或图片文件
│    │    └── images   		# 图片文件
│    ├── common 		    # common
│    │    ├── configs  		# 自定义配置
│    │    ├── enums  		# 枚举
│    │    ├── filters  		# 过滤器
│    │    ├── mixins  		# 混淆js
│    │    ├── setting  		# 设置
│    │    └── utils   		# 扩展相关函数以及封装
│    ├── components 		# 组件
│    ├── router    			# vue-router定义文件
│    ├── scss  				# scss
│    │    ├── base  		# 基础的全局scss变量以及全局css
│    │    └── views   		# 页面相关样式，页面内单独引用
│    ├── views      		# views
│    ├── vuexs  	  		# vuex数据状态管理相关
│    │    └── modules   	# 按模块使用
│	 ├── App.vue  			# 入口
│    └── main.js   			# 入口
├── .babelrc                # babel config
├── .editorconfig	        # 通用编辑器配置
├── .gitignore		        # git忽略提交配置
├── .eslintignore           # 暂时添加了src/*,去掉了监控
├── .eslintrc.js            # eslint配置
└── package.json            # package info
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
