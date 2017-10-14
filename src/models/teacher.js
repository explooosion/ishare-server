'use strict';
import mysql from 'mysql2/promise';
//ERROR: app crash-waiting for file changes before starting.. 
//solution: npm install mysql
import config from '../config/db';
class Teacher {
    async find(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query('select * from web_teacher');
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
    async login(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query(
                'select * from web_teacher where account = ? and password = ?', [ctx.request.body.teacherId, ctx.request.body.teacherPwd]
            );
            return rows;
        } catch (e) {
            return false;
        }
    }
    async add(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            await connection.query(
                'insert into web_teacher (teacherusername, teacherpassword, teachername, teachergender, teachertel) values (?, ?, ?, ?, ?)', [ctx.request.body.teacherusername, ctx.request.body.teacherpassword, ctx.request.body.teachername, ctx.request.body.teachergender, ctx.request.body.teachertel]);
            return true;
        } catch (e) {
            return false;
        }
    }
}
export default new Teacher();
