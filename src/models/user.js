'use strict';

import mysql from 'mysql2';
//ERROR: app crash-waiting for file changes before starting.. 
//solution: npm install mysql2

import config from '../config/db';
const connection = mysql.createConnection(config);
let temp = [];
class User {
    async login(ctx) {

        await connection.connect();
        switch (2) {
            case 1: //社福單位
                connection.query('select * from web_service where serviceusername = ? and servicepassword = ?', [ctx.request.body.userId, ctx.request.body.userPwd], function (err, results, fields) {
                    if (error) {
                        console.log('查詢失敗！');
                        throw error;
                    }
                    console.log(results);
                    temp = results;
                });
                break;
            case 2: //店家單位
                await connection.query('select * from web_store where storeusername = ? and storepassword = ?', ['carie8655', 'popo1001'], function (err, results, fields) {
                    if (err) {
                        console.log('查詢失敗！');
                        throw err;
                    }
                    (temp = results);
                    //  console.log(temp);                    
                });
                break;
            case 3: //老師單位
                connection.query('select * from web_teacher where teacherusername = ? and teacherpassword = ?', [ctx.request.body.userId, ctx.request.body.userPwd], function (err, results, fields) {
                    if (err) {
                        console.log('查詢失敗！');
                        throw err;
                    }
                    // console.log(results);
                    temp = results;
                });
                break;
            case 4: //學生單位
                connection.query('select * from web_student where childusername = ? and childpassword = ?', [ctx.request.body.userId, ctx.request.body.userPwd], function (err, results, fields) {
                    if (error) {
                        console.log('查詢失敗！');
                        throw error;
                    }
                    console.log(results);
                    temp = results;
                });
                break;
        }
        //console.log(temp);
        //connection.end();
        return temp;

    }
}

export default new User();