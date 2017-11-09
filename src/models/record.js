'use strict';
import mysql from 'mysql2/promise';
//ERROR: app crash-waiting for file changes before starting.. 
//solution: npm install mysql
import config from '../config/db';
class Record {
    async find(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query('SELECT * FROM web_record ORDER BY id DESC'); //待修改
            console.log(rows);
            return rows;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
    async findById(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query('SELECT * FROM web_record WHERE id = ?', [ctx.params.id]); //待修改
            console.log(rows);
            return rows;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
    async add(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            let params = [
                ctx.request.body.recordchild,
                ctx.request.body.recordpoint,
                ctx.request.body.recordcost,
                ctx.request.body.recordstore,
                ctx.request.body.recordtime
            ];
            await connection.query(
                'INSERT INTO web_record (recordchild, recordpoint, recordcost, recordstore, recordtime) VALUES (?, ?, ?, ?, ?)', params);
            return true;
        } catch (e) {
            return false;
        }
    }
    async update(ctx){
        try {
            let params = [
                ctx.request.body.recordchild,
                ctx.request.body.recordpoint,
                ctx.request.body.recordcost,
                ctx.request.body.recordstore,
                ctx.request.body.recordtime,
                ctx.request.body.id
            ];
            const connection = await mysql.createConnection(config);
            const [result] = await connection.query(
                'UPDAte web_record SET recordchild = ? , recordpoint = ? , recordcost = ?, recordstore = ? , recordtime = ? WHERE id = ?', params
            );
            return result;
        } catch (e) {
            return false;
        }
    }
    async delete(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [result] = await connection.query(
                'DELETE FROM web_record WHERE id = ?', [ctx.request.body.id]
            );
            return result;
        } catch (e) {
            return false;
        }
    }
}
export default new Record();