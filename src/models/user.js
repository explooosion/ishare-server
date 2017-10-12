'use strict';

import mysql from 'mysql2/promise';
import config from '../config/db';

class User {

    async login(ctx) {

        const group = 2;
        switch (group) {
            case 2:
                try {
                    const connection = await mysql.createConnection(config);
                    const [rows, fields] = await connection.query(
                        'select * from web_store where storeusername = ? and storepassword = ?', ['carie8655', 'popo1001']
                    );
                    return rows;
                } catch (e) {
                    return false;
                }
                break;

            default:
                return false;
                break;
        }
    }

}

export default new User();