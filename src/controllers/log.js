'use strict';

import Log from '../models/log'

class LogControllers{
    async find(ctx){
        ctx.body = await Log.find(ctx);
    }
    async add(ctx){
        ctx.body = await Log.add(ctx);
    }
}

export default new LogControllers();