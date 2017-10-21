'use strict';
import mysql from 'mysql2/promise';
//ERROR: app crash-waiting for file changes before starting.. 
//solution: npm install mysql
import config from '../config/db';
class Store {
    async find(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query('select * from web_store limit 1000');
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
    async add(ctx) {
        try {
            let params = [
                ctx.request.body.storeusername,
                ctx.request.body.storepassword,
                ctx.request.body.storename,
                ctx.request.body.storeaddr,
                ctx.request.body.storeadminstore,
                ctx.request.body.storetel,
                ctx.request.body.storeein,
                ctx.request.body.storetype,
                ctx.request.body.storephoto
            ];
            const connection = await mysql.createConnection(config);
            const [result] = await connection.query(
                'insert into web_store (storeusername, storepassword, storename, storeaddr, storeadminstore, storetel, storeein, storetype, storephoto) values (?, ?, ?, ?, ?, ?, ?, ?, ?)', params
            );
            return result;
        } catch (e) {
            return false;
        }
    }
    async update(ctx){
        try {
            let params = [
                ctx.request.body.storename,
                ctx.request.body.storeaddr,
                ctx.request.body.storeadminstore,
                ctx.request.body.storetel,
                ctx.request.body.storeein,
                ctx.request.body.storetype,
                ctx.request.body.storephoto,
                ctx.request.body.id
            ];
            const connection = await mysql.createConnection(config);
            const [result] = await connection.query(
                'Update web_store set storename = ?, storeaddr = ? , storeadminstore = ? , storetel = ? , storeein = ? , storetype = ? , storephoto = ? where id = ?', params
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
                'delete from web_store where id = ?', [ctx.request.body.id]
            );
            return result;
        } catch (e) {
            return false;
        }
    }
}
export default new Store();
