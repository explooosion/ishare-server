'use strict';

import Store from '../models/store';

class StoreControllers {

    async find(ctx) {
        ctx.body = await Store.find(ctx);
    }

    async findById(ctx) {
        ctx.body = await Store.findById(ctx);
    }

    async login(ctx) {
        ctx.body = await Store.login(ctx);
    }

    async add(ctx) {
        ctx.body = await Store.add(ctx);
    }
}

export default new StoreControllers()