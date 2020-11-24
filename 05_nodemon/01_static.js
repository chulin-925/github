// 1.导入http模块
const http=require('http');
const path=require('path');
const fs=require('fs');
// 2.创建web服务器实例
const server=http.createServer();
// 3.监听request请求
server.on('request',(req,res)=>{
    let pathname=req.url;
    pathname=pathname==='/'?'/index.html':pathname;
    
    let filename=path.join(__dirname,'public',pathname);
    console.log(filename);
    fs.readFile(filename,(err,data)=>{
        if(err){
            res.statusCode=500;
            res.end('server internal error.');
        }else{
            res.end('come baby lets go');
        }
    })
})

// 4.启动服务
server.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');
})