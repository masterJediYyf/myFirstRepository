- css 模块化过程
  1. 工程化配合
  - vite index.module.css 水平
  - webpack.config.js, css-loader?module
  - 以对象的方式输出
  - 生成了 hash 的类名

hello-txt-asd11
"css-loader?module&localIdentName=[path][name]-[local]-[hash:5]"

- webpack 是怎么让我们看到页面的

  1. npm run start|dev 运行一个脚本 webpack-dev-server --mode development

  2. 首先先交给 webpack 根据根目录下的 webpack.config.js 编译
     entry main.tsx --> js 文件 bundle.js
     引入 bundle.js

  3. plugin 中的 htmlWebpackPlugin 中的 index.html
     引入 bundle.js 尾部 script
     在开发阶段, dist 目录下的 bundle.js 是放在内存中

  4. 由 webpack-dev-server 根据 devServer 部分 port
     基于 express 启动 http 服务,

  5. 边写边更新 hot 热更新(在内粗中打补丁, 局部更新)
