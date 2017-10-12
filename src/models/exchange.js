'use strict';

import mysql from 'mysql2';
//ERROR: app crash-waiting for file changes before starting.. 
//solution: npm install mysql

import config from '../config/db';

const connection = mysql.createConnection(config); //建立連線
let temp;
class Exchange {

    async find(ctx) {


        connection.connect();

        connection.query('select * from web_store order by id desc', function (err, results, fields) {
            if (err) {
                console.log('查詢失敗！');
                throw err;
            }
            console.log(results);
            temp = results;
        });
        return temp;

    }

    async add(ctx) {
        const resPoint = Number(ctx.request.body.point) - Number(ctx.request.body.pointCost)
        connection.connect();
        connection.query('update web_store set point = ? where account = ?', [ctx.request.body.childId, resPoint], function (err, results, fields) {
            if (err) {
                console.log('查詢失敗！');
                throw err;
            }
            console.log(results);
            temp = results;
        });
        connection.query('update web_store set point = ? where account = ?', [ctx.request.body.childId, resPoint], function (err, results, fields) {
            if (err) {
                console.log('查詢失敗！');
                throw err;
            }
            console.log(results);
            temp = results;
        });
        return temp;

        await connection.connect(); //連線資料庫

    }

}

export default new Exchange();