const Koa = require('koa')

const app = new Koa()

app.use(async (ctx) => {
    ctx.body = `Hi PM2 , ${process.env.NODE_ENV}`
})

app.listen(9000)