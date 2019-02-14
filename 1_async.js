async function timeout () {
    return new Promise(res => {
        setTimeout(() => {
            console.log(1);
            res();
        },2000);
    });
}

async function fn () {
    await timeout();// 解决回调地狱,一层一层的callback；await只能在async函数内部使用
    console.log(2);// 会先输出1，后输出2；因为async会等await执行结束后再执行
}

fn();

// console.log(timeout());// 返回的是一个promise对象
// timeout().then(res => {
//     console.log(res)// 异步的后执行
// })
//
// console.log("2")
