const Koa = require('koa')
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');
const session = require('koa-session');
const passport = require('./utils/passport');
const router = require('./routes/index');
const app = new Koa();

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.status} ${ctx.url} - ${ms} ms`);
});

app.keys = ['qqkey'];
app.use(bodyParser());
app.use(session({}, app));
app.use(passport.initialize());
app.use(passport.session());
app.use(router.routes())
app.use(router.allowedMethods());

app.listen(3001);