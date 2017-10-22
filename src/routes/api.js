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
import LogControllers from '../controllers/log';

const verify = util.promisify(jwt.verify); // 解密 
const secret = require('../config/secret.json');
const router = new Router();

router.get('/', async(ctx, next) => {

    let c_ip = ctx.request.headers['x-forwarded-for'];
    if (c_ip == undefined) {
        c_ip = ctx.request.ip == '::1' ? '127.0.0.1' : ctx.request.ip;
    }
    ctx.body = {
        status: c_ip
    }
})

// Child
router.get('/child', ChildControllers.find);
router.get('/child/:id', ChildControllers.findById);
router.post('/child/add', ChildControllers.add);
router.post('/child/update', ChildControllers.update);
router.post('/child/delete', ChildControllers.delete);

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
router.get('/mission/join', MissionControllers.join_find);
router.post('/mission/add', MissionControllers.add);
router.post('/mission/join/add', MissionControllers.join_add);
router.post('/mission/update', MissionControllers.update);
router.post('/mission/join/update', MissionControllers.join_update);
router.post('/mission/delete', MissionControllers.delete);
router.post('/mission/join/delete', MissionControllers.join_delete);
router.get('/mission/:id', MissionControllers.findById);

// User Login
router.post('/user/login', UserControllers.login);

// Teacher
router.get('/teacher', TeacherControllers.find);
router.get('/teacher/:id', TeacherControllers.findById);
router.post('/teacher/add', TeacherControllers.add);
router.post('/teacher/update', TeacherControllers.update);
router.post('/teacher/delete', TeacherControllers.delete);

// Log
router.get('/log', LogControllers.find);
router.post('/log/add', LogControllers.add);

// Mission_Join


export default router;