const express = require('express');
const app = express();
const path = require('path');
const Redis = require('ioredis') 
// 内存数据可 redis 比 mysql 快
// 引入数据库 M V C   M
const redis = new Redis({
    port: 6379,
    host:'127.0.0.1'
})


// let count = 0; // 持久化存储里读取 mysql(I/O操作)不适合  -> redis 

//引入模板 ejs

app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');


app.get('/',async (req,res) => {
    // res.send('hello')
    // 用户来的时候,来到了内存中,再去到文件里拿到 index.html (I/O过程)  fs.readFile
    // 文件支持操作
    let count = Number(await redis.get('count') || 0);
    count ++;
    await redis.set('count',count);
    res.render('index',{count : count});    
})
app.listen(1234);