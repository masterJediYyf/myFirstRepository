const express = require('express');
const app = express();
const todosRouter = require('./routes/todo');
const bodyParser = require('body-parser');
const cors = require('cors'); // 允许跨域   解决前端向后端请求数据导致跨域的问题
// 中间件

app.use(bodyParser.json());
// 解析 application / x-www-form-urlencoded
app.use(bodyParser.urlencoded()); 

// 跨域中间件
app.use(cors())
// 路由中间件
app.use('/todo',todosRouter);

app.listen(4000,() => {
    console.log('服务器启动了...')
})