'use strict';

import test from '../models/test';

class testControllers {

    async find(ctx) {
        ctx.body = await test.find(ctx);

    }
}

export default new testControllers();