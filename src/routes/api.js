'use strict';

import Router from 'koa-router';
import jwt from 'jsonwebtoken';
import util from 'util';

import testControllers from '../controllers/test';
import ChildControllers from '../controllers/child';
import StoreControllers from '../controllers/store';
import RecordControllers from '../controllers/record';
import UserControllers from '../controllers/user';
import MissionControllers from '../controllers/mission';
import TeacherControllers from '../controllers/teacher';

const verify = util.promisify(jwt.verify); // 解密 
const secret = require('../config/secret.json');

const router = new Router();

router.get('/', async(ctx, next) => {
    ctx.body = {
        status: true
    }
})

// Child
router.get('/child', ChildControllers.find);            
router.get('/child/:id', ChildControllers.findById);
router.post('/child/add', ChildControllers.add);
router.post('/child/update', ChildControllers.login);
router.post('/child/delete', ChildControllers.login);

// Store
router.get('/store', StoreControllers.find);
router.get('/store/:id', StoreControllers.findById);
router.post('/store/add', StoreControllers.add);
router.post('/store/update', StoreControllers.update);
router.post('/store/delete', StoreControllers.delete);

// Record
router.get('/record', RecordControllers.find);
router.get('/record/:id', RecordControllers.findById);
router.post('/record/add', RecordControllers.add);
router.post('/record/update', RecordControllers.update);
router.post('/record/delete', RecordControllers.delete);

// Mission
router.get('/mission', MissionControllers.find);
router.get('/mission/:id', MissionControllers.findById);
router.post('/mission/add', MissionControllers.add);
router.post('/mission/update', MissionControllers.update);
router.post('/mission/delete', MissionControllers.delete);

// User Login
router.post('/user/login', UserControllers.login);

// Teacher
router.get('/teacher', TeacherControllers.find);
router.get('/teacher/:id', TeacherControllers.findById);
router.post('/teacher/add', TeacherControllers.add);
router.post('/teacher/update', TeacherControllers.update);
router.post('/teacher/delete', TeacherControllers.delete);
// Log
// ....

export default router;