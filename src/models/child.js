'use strict';

import mysql from 'mysql2';
//ERROR: app crash-waiting for file changes before starting.. 
//solution: npm install mysql

import config from '../config/db';

const connection = mysql.createConnection(config);
let temp;
class Child {

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
        connection.query('select * from web_store where storeusername = ' + ctx.params.id, function (err, results, fields) {
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
        connection.query('select * from web_store where storeusername = ? and storepassword = ?', [ctx.request.body.childId, ctx.request.body.childPwd], function (err, results, fields) {
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

export default new Child();