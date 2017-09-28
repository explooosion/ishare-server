'use strict';

import Router from 'koa-router';

const router = new Router();

router.get('/', async(ctx, next) => {
    await ctx.render('dashboard')
})

export default router;