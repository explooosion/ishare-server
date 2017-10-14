'use strict';

import Teacher from '../models/teacher';

class TeacherControllers {

    async find(ctx) {
        ctx.body = await Teacher.find(ctx);
    }

    async findById(ctx) {
        ctx.body = await Teacher.findById(ctx);
    }

    async login(ctx) {
        ctx.body = await Teacher.login(ctx);
    }

    async add(ctx) {
        ctx.body = await Teacher.add(ctx);
    }
}

export default new TeacherControllers()