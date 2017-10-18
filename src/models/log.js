'use strict';

import mysql from 'mysql2/promise';
import config from '../config/db';

class Child {

    async find(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query('select * from web_log limit 1000');
            return rows;
        } catch (e) {
            return false
        }
    }
    async Login(ctx) {
        try {
            let params = [
                ctx.request.body.loginusername,
                ctx.request.body.logintime,
                ctx.request.body.logouttime,
            ];
            const connection = await mysql.createConnection(config);
            const [result] = await connection.query(
                'insert into web_child (loginusername, logintime, logouttime) values (?, ?, ?)', params);
            return result;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
    async Logout(ctx){
        try {
            let params = [
                ctx.request.body.logouttime,
                ctx.request.body.loginusername
            ];
            const connection = await mysql.createConnection(config);
            const [result] = await connection.query(
                'Update web_child set logouttime = ? where loginusername = ?', params);
            return result;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}

export default new Child();