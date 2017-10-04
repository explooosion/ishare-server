'use strict';

import Router from 'koa-router';
import jwt from 'jsonwebtoken';
import util from 'util';

import ChildControllers from '../controllers/child';
import StoreControllers from '../controllers/store';
import ExchangeControllers from '../controllers/exchange';

const verify = util.promisify(jwt.verify); // 解密 
const secret = require('../config/secret.json');

const router = new Router();

router.get('/', async(ctx, next) => {
    ctx.body = {
        status: true
    }
})

// child
router.get('/child', ChildControllers.find);
router.get('/child/:id', ChildControllers.findById);
router.post('/child/login', ChildControllers.login);

// store
router.post('/store/login', StoreControllers.login);

// exchange
router.get('/exchange', ExchangeControllers.find);
router.post('/exchange/add', ExchangeControllers.add);

// Mission
// ....

// User
// .... 

// Record
// ....

// Log
// ....

export default router;