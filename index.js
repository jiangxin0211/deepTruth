const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
    ctx.body = 'Hello World';
});

app.listen(3000, () => {
    console.log('服务在3000端口开启成功')
});//监听3000端口