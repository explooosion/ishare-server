'use strict';

import mysql from 'mysql2/promise';
import config from '../config/db';

class User {
    async login(ctx) {
        let group = ctx.request.body.loginbar;
        console.log(ctx.request.body);
        switch (group) {
            case 1: //社福單位
                try {
                    const connection = await mysql.createConnection(config);
                    const [rows, fields] = await connection.query(
                        'select * from web_service where serviceusername = ? and servicepassword = ?', [ctx.request.body.userId, ctx.request.body.userPwd]
                    );
                    console.log(rows);
                    return rows;
                } catch (e) {
                    return false;
                }
                break;
            case 2: //店家
                try {
                    const connection = await mysql.createConnection(config);
                    const [rows, fields] = await connection.query(
                        'select * from web_store where storeusername = ? and storepassword = ?', [ctx.request.body.userId, ctx.request.body.userPwd]
                    );
                    console.log(rows);
                    return rows;
                } catch (e) {
                    return false;
                }
                break;
            case 3: //老師
                try {
                    const connection = await mysql.createConnection(config);
                    const [rows, fields] = await connection.query(
                        'select * from web_teacher where teacherusername = ? and teacherpassword = ?', [ctx.request.body.userId, ctx.request.body.userPwd]
                    );
                    console.log(rows);
                    return rows;
                } catch (e) {
                    return false;
                }
                break;
            case 4: //學生
                try {
                    const connection = await mysql.createConnection(config);
                    const [rows, fields] = await connection.query(
                        'select * from web_student where childusername = ? and childpassword = ?', [ctx.request.body.userId, ctx.request.body.userPwd]
                    );
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