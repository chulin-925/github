// 1.导入模块
const express=require('express');
// 2.创建web实例
const app=express();
// 3.监听request
// 用户访问地址是'/'时，输出'hello world'
app.get('/',(req,res)=>{
    res.send('hello world');
})
// 用户访问'/html5'时，输出'2003'
app.get('/html5',(req,res)=>{
    res.end('2003');
})
// 用户通过post方式访问'/post'时，输出'post'
app.post('/post',(req,res)=>{
    res.send('post方式');
})
// 4.启动服务
app.listen(8080,()=>{
    console.log('app is running at http://127.0.0.1:8080');
})