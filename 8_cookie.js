const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    if (ctx.url === '/jiang') {
        ctx.cookies.set(
            'name','jiangxin',{// singed cookie,签名值;secure 安全cookie
                domain: 'localhost',// 域名
                path: '/jiang',// 路径
                maxAge: 24 * 60 * 60 * 1000,// 有效时间
                expires: new Date('2019-12-31'),// 过期时间
                httpOnly: false,// 服务器可访问cookie，默认是TRUE
                overwrite: false// 是否覆盖以前同名的cookie
            }
        );
        ctx.body = 'cookie success';
    } else {
        ctx.body = 'no cookie';
    }

})

app.listen(3000, () => {
    console.log("服务在3000端口启动成功")
})