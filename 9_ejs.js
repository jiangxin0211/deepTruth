const Koa = require('koa')
const app = new Koa()
const views = require('koa-views');
const path = require('path');

// 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}));

app.use(async ctx => {
    let title = 'hello jiangxin';

    await ctx.render('index',{
        title,
        list: [
            {name: 'xiaobai', age: 13},
            {name: 'xiaohuang', age: 14},
            {name: 'xiaolv', age: 15},
            {name: 'xiaolan', age: 16},
            {name: 'xiaohei', age: 17}
        ]
    })
})

app.listen(3000, () => {
    console.log('服务在3000端口开启成功')
});//监听3000端口