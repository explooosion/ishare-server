'use strict';
import mysql from 'mysql2/promise';
//ERROR: app crash-waiting for file changes before starting.. 
//solution: npm install mysql
import config from '../config/db';
class Record {
    async find(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query('select * from web_record order by id desc'); //待修改
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
            const [rows, fields] = await connection.query('select * from web_record where id = ?', [ctx.params.id]); //待修改
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
                'insert into web_record (recordchild, recordpoint, recordcost, recordstore, recordtime) values (?, ?, ?, ?, ?)', params);
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
                'Update web_record set recordchild = ? , recordpoint = ? , recordcost = ?, recordstore = ? , recordtime = ? where id = ?', params
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
                'delete from web_record where id = ?', [ctx.request.body.id]
            );
            return result;
        } catch (e) {
            return false;
        }
    }
}
export default new Record();