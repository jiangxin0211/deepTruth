const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    // 叠加数据
    let data = '';

    // 监听data事件，收到表单的数据时就会执行
    ctx.req.on('data', chunk => {
        console.log(chunk);//chunk是一个二进制的数
        data += chunk;//+=相当于toString

    });

    //接收表单提交数据完成后执行
    ctx.req.on('end', () => {
        data = decodeURI(data);// 解码
        console.log(data);// 服务端接收的是这样的username=jiangxinn&password=12345字符串，需要解析成key:value
        // koa提供了一个中间件省去我们自己写解析函数，安装npm install koa-bodyparser --save
    })

    ctx.body = '123';// ctx.body这个值必须有，否则报404错误
});

app.listen(3000, () => {
    console.log("服务在3000端口监听成功")
})