- react + ts + i18n hooks
  webpack

- src 代码开发目录
  context

- webpack 是现代最强大的工作流套件, 管理者
  未来一段时间 webpack 任是主流, 因为强大而完善的社区和插件
  vite 快 轻, 缺点 差点和生态

- resolve .tsx .jsx .css

- webpack 启动, 根目录下找 webpack.config.js 默认配置文件, 确定当前打包上下文(context),
  从 entry 入口开始, 根据文件后缀, 是否输入 resolve 范围, module 里, 根据 rules 匹配其中一个(test) 启用相应 loader 做相应的处理,
  处理完后的内容, 输出给 output, 打包只为响应环境(浏览器 node 等等)打包

- "@babel/cli": "^7.14.5",
  "@babel/core": "^7.14.6", 核心的转义 let ==> var
  "@babel/preset-env": "^7.14.5", list env: last version 1%
  "@babel/preset-react": "^7.14.5", .jsx -> .js
  "@babel/preset-typescript": "^7.14.5" .tsx -> .jsx

- webpack 的下一级是 loader, loader 的下一级是各种转移工具或插件
- babel-loader 使用了 8.0+ 加载器
  entry -> index.tsx -> resolve -> module(test) -> babel-loader -> .babelrc -> style-loader -> css

- webpack-dev-server 基于 webpack 编译的结果 dev-server 3000 启动
  dev-server 启动 http 服务 express
  index.html http 服务的入口文件
  index.tsx 编译的入口文件 遇到一堆需要编译的文件 import 从此处开始打包
