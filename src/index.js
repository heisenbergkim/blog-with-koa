const Koa = require("koa");

const app = new Koa();

app.use(async (ctx, next) => {
  console.log(1);
  await next();
  console.log("Good bye");
});

app.use(ctx => {
  ctx.body = "Hello Eric";
});

app.listen(4000, () => {
  console.log("Listen 4000 port");
});
