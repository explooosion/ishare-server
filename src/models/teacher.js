'use strict';
import mysql from 'mysql2/promise';
//ERROR: app crash-waiting for file changes before starting.. 
//solution: npm install mysql
import config from '../config/db';
class Teacher {
    async find(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query('SELECT * FROM web_teacher LIMIT 1000');
            return rows;
        } catch (e) {
            return false;
        }
    }
    async findById(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query(
                'SELECT * FROM web_teacher WHERE id = ?', [ctx.params.id]
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
                'INSERT INTO web_teacher (teacherusername, teacherpassword, teachername, teachergender, teachertel) VALUES (?, ?, ?, ?, ?)', params);
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
                'UPDATE web_teacher SET teachername = ?, teachergender = ? , teachertel = ? WHERE id = ?', params
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
                'DELETE FROM web_teacher WHERE id = ?', [ctx.request.body.id]
            );
            return result;
        } catch (e) {
            return false;
        }
    }
}
export default new Teacher();
