'use strict';

import User from '../models/user';

class UserControllers {
    async login(ctx) {
        //console.log(await User.login());
        ctx.body = await User.login();
    }
}

export default new UserControllers();