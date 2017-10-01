'use strict';

import compose from 'koa-compose';
import Router from 'koa-router';

import qrcode from './qrcode';
import dashboard from './dashboard';
import api from './api';
import activity from './activity';

const router = new Router();

router.get('/', async(ctx, next) => {
    await ctx.render('size')
})

router.use('/qrcode', qrcode.routes(), qrcode.allowedMethods())
router.use('/dashboard', dashboard.routes(), dashboard.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())
router.use('/activity', activity.routes(), activity.allowedMethods())

router.get('*', async(ctx, next) => {
    ctx.throw(404);
})

//export default router
export default function routes() {
    return compose(
        [
            router.routes(),
            router.allowedMethods()
        ]
    )
}