'use strict';

import Record from '../models/record';

class RecordControllers {

    async find(ctx) {
        ctx.body = await Record.find(ctx);
    }

    async findById(ctx) {
        ctx.body = await Record.findById(ctx);
    }

    async add(ctx) {
        ctx.body = await Record.add(ctx);
    }

    async update(ctx) {
        ctx.body = await Record.update(ctx);
    }

    async delete(ctx) {
        ctx.body = await Record.delete(ctx);
    }
}

export default new RecordControllers();