const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const router = new Router();

router.get('/abc', (ctx,next) => {
    ctx.body = ctx.query;// 接收参数是对象的格式
})

app.use(router.routes());// 装载
app.use(router.allowedMethods());// 如果允许用get方法，用其他的方法就会报错

app.use(async ctx => {

})

app.listen(3000, () => {
    console.log("服务在3000端口启动成功")
})