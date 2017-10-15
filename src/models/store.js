'use strict';
import mysql from 'mysql2/promise';
//ERROR: app crash-waiting for file changes before starting.. 
//solution: npm install mysql
import config from '../config/db';
class Store {
    async find(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query('select * from web_store');
            return rows;
        } catch (e) {
            return false;
        }
    }
    async findById(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query(
                'select * from web_store where id = ?', [ctx.params.id]
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
                'select * from web_store where account = ? and password = ?', [ctx.request.body.storeId, ctx.request.body.storePwd]
            );
            return rows;
        } catch (e) {
            return false;
        }
    }
    async add(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [result] = await connection.query(
                'insert into web_store (storeusername, storepassword, storename, storeaddr, storeadminstore, storetel, storeein, storetype, storephoto) values (?, ?, ?, ?, ?, ?, ?, ?, ?)', [ctx.request.body.storeusername, ctx.request.body.storepassword, ctx.request.body.storename, ctx.request.body.storeaddr, ctx.request.body.storeadminstore, ctx.request.body.storetel, ctx.request.body.storeein,ctx.request.body.storetype,ctx.request.storephoto]
            );
            return result;
        } catch (e) {
            return false;
        }
    }
}
export default new Store();
