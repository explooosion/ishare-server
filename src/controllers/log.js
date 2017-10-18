'use strict';

import Log from '../models/log'

class MissionControllers{
    async find(ctx){
        ctx.body = await Log.find(ctx);
    }
    async add(ctx){
        ctx.body = await Log.add(ctx);
    }
}

export default new LogControllers();