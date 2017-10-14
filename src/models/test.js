'use strict';

import mysql from 'mysql2/promise';
//ERROR: app crash-waiting for file changes before starting.. 
//solution: npm install mysql

import config from '../config/db';
let temp;
const connection = mysql.createConnection(config);
class test {
    async find(ctx){

        connection.connect();

        connection.query('select storename from web_store',function(err, results, fields) {
            console.log(results[0].storename.toString());
            temp = results[0].storename.toString();
            }
        );
        return temp;
    }
    
}

export default new test();