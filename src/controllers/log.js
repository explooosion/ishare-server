'use strict';

import Log from '../models/log'

class MissionControllers{
    async find(ctx){
        ctx.body = await Log.find(ctx);
    }
    async login(ctx){
        ctx.body = await Log.login(ctx);
    }
    async logout(ctx){
        ctx.body = await Log.logout(ctx);        
    }
}

export default new LogControllers();