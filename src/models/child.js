'use strict';

import mysql from 'mysql2/promise';
import config from '../config/db';

class Child {

    async find(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query('select * from web_student');
            return rows;
        } catch (e) {
            return false
        }
    }
    async findById(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query(
                'select * from web_student where id = ?', [ctx.params.id]
            );
            return rows;
        } catch (e) {
            return false;
        }
    }
    async login(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query(
                'select * from web_student where childusername = ? and childpassword = ?', [ctx.request.body.childId, ctx.request.body.childPwd]
            );
            return rows;
        } catch (e) {
            return false;
        }
    }

    async add(ctx) {
        try {

            let params = [
                ctx.request.body.childusername,
                ctx.request.body.childpassword,
                ctx.request.body.childname,
                ctx.request.body.childgender,
                ctx.request.body.childpoint,
                ctx.request.body.childcode,
                ctx.request.body.childschool,
                ctx.request.body.childstudentid
            ];
            const connection = await mysql.createConnection(config);
            const [result] = await connection.query(
                'insert into web_student (childusername, childpassword, childname, childgender, childpoint, childcode, childschool, childstudentid) values (?, ?, ?, ?, ?, ?, ?, ?)', params);
            return result;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}

export default new Child();