'use strict';

import mysql from 'mysql2/promise';
import config from '../config/db';
import datetime from 'date-time';
class Log {
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
        let c_ip = ctx.request.headers['x-forwarded-for'];
        if (c_ip == undefined) {
            c_ip = ctx.request.ip == '::1' ? '127.0.0.1' : ctx.request.ip;
        }
        ctx.body = {
            status: c_ip
        }
        console.log(ctx.body.status)
        try {
            let params = [
                ctx.request.body.userId,
                datetime(),
                ctx.body.status 
            ];
            const connection = await mysql.createConnection(config);
            const [result] = await connection.query(
                'insert into web_log (loginusername, logintime, loginip) values (?, ?, ?)', params);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}

export default new Log();