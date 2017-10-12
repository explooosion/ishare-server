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

        connection.query('select * from ChildList', function (err, results, fields) {
            if (error) {
                console.log('查詢失敗！');
                throw error;
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
            .query('select * from ChildList where account = @account', function (err, results, fields) {
                if (error) {
                    console.log('查詢失敗！');
                    throw error;
                }
                console.log(results);
                temp = results;
            });
        return temp;
    }

    async login(ctx) {
        connection.connect();

        connection.request()
            .input('account', sql.NVarChar, ctx.request.body.childId)
            .input('password', sql.NVarChar, ctx.request.body.childPwd)
            .query('select * from ChildList where account = @account and password = @password', function (err, results, fields) {
                if (error) {
                    console.log('查詢失敗！');
                    throw error;
                }
                console.log(results);
                temp = results;
            });
        return temp;
    }
}

export default new Child();