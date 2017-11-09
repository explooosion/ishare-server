'use strict';

import mysql from 'mysql2/promise';
import config from '../config/db';

class Child {

    async find(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query('SELECT * FROM web_child LIMIT 1000');
            return rows;
        } catch (e) {
            return false
        }
    }
    async findById(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query(
                'SELECT * FROM web_child WHERE id = ?', [ctx.params.id]
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
                'INSERT INTO web_child (childusername, childpassword, childname, childgender, childpoint, childcode, childschool, childstudentid) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', params);
            return result;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    async update(ctx){
        try {
            let params = [
                ctx.request.body.childname,
                ctx.request.body.childgender,
                ctx.request.body.childpoint,
                ctx.request.body.childcode,
                ctx.request.body.childschool,
                ctx.request.body.childstudentid,
                ctx.request.body.id
            ];
            const connection = await mysql.createConnection(config);
            const [result] = await connection.query(
                'UPDATE web_child SET childname = ? , childgender = ? , childpoint = ? , childcode = ? , childschool = ? , childstudentid = ? WHERE id = ?', params);
            return result;
        } catch(e) {
            return false;
        }
    }

    async delete(ctx){
        try {
            const connection = await mysql.createConnection(config);
            const [result] = await connection.query(
                'DELETE FROM web_child WHERE id = ?', [ctx.request.body.id]
            );
            return result;
        } catch (e) {
            return false;
        }
    }
}

export default new Child();