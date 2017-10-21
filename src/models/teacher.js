'use strict';
import mysql from 'mysql2/promise';
//ERROR: app crash-waiting for file changes before starting.. 
//solution: npm install mysql
import config from '../config/db';
class Teacher {
    async find(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query('select * from web_teacher limit 1000');
            return rows;
        } catch (e) {
            return false;
        }
    }
    async findById(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query(
                'select * from web_teacher where id = ?', [ctx.params.id]
            );
            return rows;
        } catch (e) {
            return false;
        }
    }
    async add(ctx) {
        try {
            let params = [
                ctx.request.body.teacherusername,
                ctx.request.body.teacherpassword,
                ctx.request.body.teachername,
                ctx.request.body.teachergender,
                ctx.request.body.teachertel
            ];
            const connection = await mysql.createConnection(config);
            const [result] = await connection.query(
                'insert into web_teacher (teacherusername, teacherpassword, teachername, teachergender, teachertel) values (?, ?, ?, ?, ?)', params);
            return result;
        } catch (e) {
            return false;
        }
    }
    async update(ctx){
        try {
            let params = [
                ctx.request.body.teachername,
                ctx.request.body.teachergender,
                ctx.request.body.teachertel,
                ctx.request.body.id
            ];
            const connection = await mysql.createConnection(config);
            const [result] = await connection.query(
                'Update web_teacher set teachername = ?, teachergender = ? , teachertel = ? where id = ?', params
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
                'delete from web_teacher where id = ?', [ctx.request.body.id]
            );
            return result;
        } catch (e) {
            return false;
        }
    }
}
export default new Teacher();
