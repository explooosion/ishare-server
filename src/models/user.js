'use strict';

import mysql from 'mysql2/promise';
import config from '../config/db';
import log from './log';

import jwt from 'jsonwebtoken';

const secret = require('../config/secret.json');

class User {
    async login(ctx) {
        let group = ctx.request.body.logingroup;
        console.log(ctx.request.body)
        switch (Number(group)) {
            case 1: //社福單位
                try {
                    const connection = await mysql.createConnection(config);
                    const [rows, fields] = await connection.query(
                        'SELECT * FROM web_service WHERE serviceusername = ? AND servicepassword = ?', [ctx.request.body.userId, ctx.request.body.userPwd]
                    );
                    if (rows.length != 0) {
                        log.add(ctx)
                    }
                    return rows;
                } catch (e) {
                    return false;
                }
                break;
            case 2: //店家
                try {
                    const connection = await mysql.createConnection(config);
                    const [rows, fields] = await connection.query(
                        'SELECT * FROM web_store WHERE storeusername = ? AND storepassword = ?', [ctx.request.body.userId, ctx.request.body.userPwd]
                    );
                    if (rows.length != 0) {
                        log.add(ctx)
                    }
                    return rows;
                } catch (e) {
                    return false;
                }
                break;
            case 3: //老師
                try {
                    const connection = await mysql.createConnection(config);
                    const [rows, fields] = await connection.query(
                        'SELECT * FROM web_teacher WHERE teacherusername = ? AND teacherpassword = ?', [ctx.request.body.userId, ctx.request.body.userPwd]
                    );

                    // 測試 JWT 用
                    // if (rows.length !== 0) {
                    //     log.add(ctx);
                    // }
                    // let userToken = {
                    //     userId: ctx.request.userId,
                    //     userPwd: ctx.request.userPwd,
                    //     logingroup: ctx.request.logingroup
                    // };
                    // const token = jwt.sign(userToken, secret.sign, {
                    //     expiresIn: '1h'
                    // });
                    // let _rows = rows[0];
                    return rows;
                } catch (e) {
                    return false;
                }
                break;
            case 4: //學生
                try {
                    const connection = await mysql.createConnection(config);
                    const [rows, fields] = await connection.query(
                        'SELECT * FROM web_child WHERE childusername = ? AND childpassword = ?', [ctx.request.body.userId, ctx.request.body.userPwd]
                    );
                    console.log(rows.length);
                    if (rows.length != 0) {
                        log.add(ctx)
                    }
                    return rows;
                } catch (e) {
                    return false;
                }
                break;
            case 5: //管理員
                try {
                    const connection = await mysql.createConnection(config);
                    const [rows, fields] = await connection.query(
                        'SELECT * FROM web_admin WHERE adminusername  = ? AND adminpassword  = ?', [ctx.request.body.userId, ctx.request.body.userPwd]
                    );
                    if (rows.length != 0) {
                        log.add(ctx)
                    }
                    return rows;
                } catch (e) {
                    return false;
                }
                break;
            default:
                return false;
                break;
        }
    }

}

export default new User();