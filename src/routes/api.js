'use strict';

import Router from 'koa-router';
import jwt from 'jsonwebtoken';
import util from 'util';

import testControllers from '../controllers/test';
import ChildControllers from '../controllers/child';
import StoreControllers from '../controllers/store';
import ExchangeControllers from '../controllers/exchange';
import UserControllers from '../controllers/user';
import MissionControllers from '../controllers/mission';
const verify = util.promisify(jwt.verify); // 解密 
const secret = require('../config/secret.json');

const router = new Router();

router.get('/', async (ctx, next) => {
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
router.get('/test/find', testControllers.find);
// exchange
router.get('/exchange', ExchangeControllers.find);
router.post('/exchange/add', ExchangeControllers.add);

// Mission
router.get('/mission', MissionControllers.find);
router.get('/mission/:id', MissionControllers.findById);
router.get('/mission/:type', MissionControllers.findByType);
router.get('/mission/:location', MissionControllers.findByLocation);
// User
router.post('/user/login', UserControllers.login);

// Record
// ....

// Log
// ....

export default router;