'use strict';

import Teacher from '../models/teacher';

class TeacherControllers {

    async find(ctx) {
        ctx.body = await Teacher.find(ctx);
    }

    async findById(ctx) {
        ctx.body = await Teacher.findById(ctx);
    }

    async add(ctx) {
        ctx.body = await Teacher.add(ctx);
    }

    async update(ctx) {
        ctx.body = await Teacher.update(ctx);
    }

    async delete(ctx) {
        ctx.body = await Teacher.delete(ctx);
    }
}

export default new TeacherControllers()