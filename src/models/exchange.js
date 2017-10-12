'use strict';
import mysql from 'mysql2';
//ERROR: app crash-waiting for file changes before starting.. 
//solution: npm install mysql
import config from '../config/db';
class Exchange {
    async find(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query('select * from web_store order by id desc');
            return rows;
        } catch (e) {
            return false;
        }
    }
    async add(ctx) {
        const resPoint = Number(ctx.request.body.point) - Number(ctx.request.body.pointCost)
        const connection = await mysql.createConnection(config);
        const [rows, fields] = await connection.query(
            'update web_store set point = ? where account = ?', [ctx.request.body.childId, resPoint]
        );
        return rows;
    }
}
export default new Exchange();