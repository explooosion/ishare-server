'use strict';
import mysql from 'mysql2/promise';
import config from '../config/db';
class Mission {
    async find(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query('Select * from web_mission');
            return rows;
        } catch (e) {
            return false;
        }
    }
    async findById(ctx){
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query(
                'Select * from web_mission where id = ?',[ctx.params.id]
            );
            return rows;
        } catch (e) {
            return false;
        }
    }
    async findByType(ctx){
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query(
                'Select * from web_mission where missiontype = ?',[ctx.params.Type]
            );
            return rows;
        } catch (e) {
            return false;
        }
    }
    async findByLocation(ctx){
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query(
                'Select * from web_mission where missionlocation = ?',[ctx.params.location]
            );
            return rows;
        } catch (e) {
            return false;
        }
    }
}
export default new Mission();

