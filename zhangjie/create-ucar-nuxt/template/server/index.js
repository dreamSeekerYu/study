const Koa = require('koa');
const session = require('koa-session');
const koaBody = require('koa-body');
const { Nuxt, Builder } = require('nuxt');
const router = require('./router.js');
const config = require('../nuxt.config.js');
const app = new Koa();
const sessionConfig = {
  key: 'ucar',
  maxAge: 31536000000,
};

app.keys = ['ucar secret'];
async function startApp() {
  const nuxt = new Nuxt(config);
  const { host, port } = nuxt.options.server;

  if (nuxt.options.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  app.use(koaBody({ multipart: true }));
  app.use(session(sessionConfig, app));
  app.use(router.routes()).use(router.allowedMethods());

  app.use((ctx, next) => {
    if (/^\/action/.test(ctx.path)) {
      next();
    } else {
      ctx.status = 200;
      ctx.respond = false;
      ctx.req.ctx = ctx;
      nuxt.render(ctx.req, ctx.res);
    }
  });

  app.listen(port, host);
  console.log(`Server listening on http://<%= localip %>:${port}`);
}

startApp();
