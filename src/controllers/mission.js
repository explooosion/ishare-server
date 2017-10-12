'use strict';

import Mission from '../models/mission'

class MissionControllers{
    async find(ctx){
        ctx.body = await Mission.find(ctx);
    }
    async findById(ctx){
        ctx.body = await Mission.findById(ctx);
    }
    async findByType(ctx){
        ctx.body = await Mission.findByType(ctx);
    }
    async findByLocation(ctx){
        ctx.body = await Mission.findByLocation(ctx);
    }
}

export default new MissionControllers();