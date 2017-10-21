'use strict';

import mysql from 'mysql2/promise';
import config from '../config/db';

class Log{
    async find(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query('select * from web_log limit 1000');
            return rows;
        } catch (e) {
            return false
        }
    }
    async add(ctx) {
        try {
            let params = [
                ctx.request.body.loginusername,
                ctx.request.body.logintime,
                ctx.request.body.loginip,
            ];
            const connection = await mysql.createConnection(config);
            const [result] = await connection.query(
                'insert into web_child (loginusername, logintime, loginip) values (?, ?, ?)', params);
            return result;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}

export default new Log();