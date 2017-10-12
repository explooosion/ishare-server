'use strict';

import mysql from 'mysql2';
//ERROR: app crash-waiting for file changes before starting.. 
//solution: npm install mysql
import config from '../config/db';

const connection = mysql.createConnection(config) //建立連線
let temp;
class Store {

    async find(ctx) {

        connection.connect();
        connection.query('select * from web_store', function (err, results, fields) {
            if (err) {
                console.log('查詢失敗！');
                throw err;
            }
            console.log(results);
            temp = results;
        });
        return temp;

    }

    async findById(ctx) {

        connection.connect();

        connection.request()
            .input('account', sql.NVarChar, ctx.params.id)
            .query('select * from web_store where account = @account', function (err, results, fields) {
                if (err) {
                    console.log('查詢失敗！');
                    throw err;
                }
                console.log(results);
                temp = results;
            });
        return temp;
    }

    async login(ctx) {

        connection.connect();
        connection.query('select * from web_store where account = ? and password = ?',[ctx.request.body.storeId,ctx.request.body.storePwd], function (err, results, fields) {
                if (err) {
                    console.log('查詢失敗！');
                    throw err;
                }
                console.log(results);
                temp = results;
            });
        return temp;

    }
}

export default new Store();
