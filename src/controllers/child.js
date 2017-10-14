'use strict';

import Child from '../models/child';

class ChildControllers {

    async find(ctx) {
        ctx.body = await Child.find(ctx);
    }

    async findById(ctx) {
        ctx.body = await Child.findById(ctx);
    }

    async login(ctx) {
        ctx.body = await Child.login(ctx);
    }

    async add(ctx) {
        ctx.body = await Child.add(ctx);
    }
    
}

export default new ChildControllers();