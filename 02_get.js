// 导入模块
const http=require('http');
const url=require('url');
// 创建web服务器实例
const server=http.createServer();

// 监听request请求
server.on('request',(req,res)=>{
    let {query}=url.parse(req.url,true);
    // console.log(url.parse(req.url,true));
    console.log(query);
    console.log(query.name);
})
// 启动服务
server.listen('8080',()=>{
    console.log('server is running at http://127.0.0.1:8080');
})