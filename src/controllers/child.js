'use strict';

import Child from '../models/child';

class ChildControllers {

    async find(ctx) {
        ctx.body = await Child.find(ctx);
    }

    async findById(ctx) {
        ctx.body = await Child.findById(ctx);
    }

    async add(ctx) {
        ctx.body = await Child.add(ctx);
    }
    
    async update(ctx) {
        ctx.body = await Child.update(ctx);
    }

    async delete(ctx) {
        ctx.body = await Child.delete(ctx);
    }
}

export default new ChildControllers();