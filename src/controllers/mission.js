'use strict';

import Mission from '../models/mission'

class MissionControllers{
    async find(ctx){
        ctx.body = await Mission.find(ctx);
    }
    async findById(ctx){
        ctx.body = await Mission.findById(ctx);
    }
    async add(ctx){
        ctx.body = await Mission.add(ctx);
    }
    async update(ctx){
        ctx.body = await Mission.update(ctx);
    }
    async delete(ctx){
        ctx.body = await Mission.delete(ctx);
    }
    async join_find(ctx){
        ctx.body = await Mission.find(ctx);
    }
    async join_add(ctx){
        ctx.body = await Mission.join_add(ctx);
    }
    async join_update(ctx){
        ctx.body = await Mission.join_update(ctx);
    }
    async join_delete(ctx){
        ctx.body = await Mission.join_delete(ctx);
    }
}

export default new MissionControllers();