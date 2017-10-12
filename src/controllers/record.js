'use strict';

import Record from '../models/record';

class RecordControllers {

    async find(ctx) {
        ctx.body = await Record.find(ctx);
    }

    async add(ctx) {
        ctx.body = await Record.add(ctx);
    }

}

export default new RecordControllers();