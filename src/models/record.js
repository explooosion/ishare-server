'use strict';
import mysql from 'mysql2';
//ERROR: app crash-waiting for file changes before starting.. 
//solution: npm install mysql
import config from '../config/db';
class Record {
    async find(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query('select * from web_record order by id desc'); //待修改
            return rows;
        } catch (e) {
            return false;
        }
    }
}
export default new Record();