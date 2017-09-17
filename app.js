const Koa = require('koa');
const app = new Koa();
app.use(async ctx =>{
console.log("访问了当前页面");
ctx.body = "Hello World";
});
console.log("开启监听3000端口 如需关闭Ctrl+C");
app.listen(3000);
