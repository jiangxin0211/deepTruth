// get请求获取参数，get请求在请求头中（体积小），post在请求体中（体积大）
const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
    let url = ctx.url;
    let query = ctx.query;// 返回的是一个格式化好的对象
    let queryString = ctx.querystring;// 返回的是url后面拼接的所有内容的字符串

    ctx.body = {
        url,
        query,
        queryString
    }
});

app.listen(3000, () => {
    console.log('服务在3000端口开启成功')
});//监听3000端口