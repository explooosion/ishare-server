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

        connection.query('select * from ExchangeList order by id desc', function (err, results, fields) {
            if (error) {
                console.log('查詢失敗！');
                throw error;
            }
            console.log(results);
            temp = results;
        });
        return temp;

    }

    async add(ctx) {
        const resPoint = Number(ctx.request.body.point) - Number(ctx.request.body.pointCost)
        connection.connect();

        connection.request()
            .input('account', sql.NVarChar, ctx.request.body.childId)
            .input('point', sql.Int, resPoint)
            .query('update ChildList set point = @point where account = @account', function (err, results, fields) {
                if (error) {
                    console.log('查詢失敗！');
                    throw error;
                }
                console.log(results);
                temp = results;
            });

        connection.request()
            .input('account', sql.NVarChar, ctx.request.body.childId)
            .input('point', sql.Int, resPoint)
            .query('update ChildList set point = @point where account = @account', function (err, results, fields) {
                if (error) {
                    console.log('查詢失敗！');
                    throw error;
                }
                console.log(results);
                temp = results;
            });
        return temp;

        await connection.connect(); //連線資料庫

    }

}

export default new Exchange();