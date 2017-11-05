'use strict';

// koa
import Koa from 'koa';
import views from 'koa-views';
import mount from 'koa-mount';
import serve from 'koa-static';
import logger from 'koa-logger';
import convert from 'koa-convert';
import bodyParser from 'koa-bodyparser';
import helmet from 'koa-helmet';
import jwt from 'koa-jwt';
import cors from 'kcors';

// unit
import open from 'open';
import middleware from './middleware';
import routes from './routes';
import env from './config/env';

const secret = require('./config/secret.json');
const app = new Koa();

app
    .use(logger())
    .use(bodyParser())
    .use(middleware())
    .use(helmet())
    .use(cors())
    .use(mount("/", convert(serve(__dirname + '/public/'))))
    .use(views(__dirname + '/view/', {
        extension: 'html'
    }))
    // .use(jwt({
    //     secret: 'ishare',
    //     // passthrough: true
    // }).unless({
    //     // path: ['/', /^\/activity/, /^\/qrcode/, /^\/dashboard/]
    //     path: ['/', '/api', '/api/user/login']
    // }))
    .use(routes())

app.listen(env.ip,
    () => {
        console.log(`✅  The server is running at http://localhost:${env.ip}/`);
        // open(`http://localhost:${env.ip}/`);
    }
)

export default app;