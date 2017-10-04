'use strict';

import mysql from 'mysql';
//ERROR: app crash-waiting for file changes before starting.. 
//solution: npm install mysql
import config from '../config/db';

const connection = mysql.createConnection(config) //建立連線

class Store {

    async find(ctx) {

        await connection.connect(); //連線資料庫

        const result = await connection.query(`select * from StoreList`, function (error) {
            if (error) { //檢查是否有錯誤
                console.log('查詢失敗！');
                throw error;
            }
        })
        console.dir(result);

        await connection.end();
        return result['recordsets'];
    }

    async findById(ctx) {

        await connection.connect(); //連線資料庫

        let result = await connection.request()
            .input('account', sql.NVarChar, ctx.params.id)
            .query('select * from StoreList where account = @account', function (error) {
                if (error) { //檢查是否有錯誤
                    console.log('查詢失敗！');
                    throw error;
                }
            })
        console.dir(result);

        await connection.end();
        return result['recordsets'];
    }

    async login(ctx) {

        await connection.connect(); //連線資料庫

        let result = await connection.request()
            .input('account', sql.NVarChar, ctx.request.body.storeId)
            .input('password', sql.NVarChar, ctx.request.body.storePwd)
            .query('select * from StoreList where account = @account and password = @password', function (error) {
                if (error) { //檢查是否有錯誤
                    console.log('查詢失敗！');
                    throw error;
                }
            })
        console.dir(result);

        await connection.end();
        return result['recordsets'];
    }
}

export default new Store();