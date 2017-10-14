'use strict';
import mysql from 'mysql2/promise';
import config from '../config/db';

class Mission {

    async find(ctx) {
        const connection = await mysql.createConnection(config);
        if (ctx.query.type != undefined & ctx.query.location != undefined) {
            const [rows, fields] = await connection.query(
                'Select * from web_mission where missiontype = ? and locationid = ?', [ctx.query.type, ctx.query.location]
            );
            if (rows.length == 0) {
                return false
            }
            return rows;
        } else if (ctx.query.type == undefined) {
            const [rows, fields] = await connection.query(
                'Select * from web_mission where locationid = ?', [ctx.query.location]
            );
            if (rows.length == 0) {
                return false
            }
            return rows;
        } else if (ctx.query.location == undefined) {
            const [rows, fields] = await connection.query(
                'Select * from web_mission where missiontype = ?', [ctx.query.type]
            );
            if (rows.length == 0) {
                return false
            }
            return rows;
        } else {
            const [rows, fields] = await connection.query('Select * from web_mission');
        }
    }
    async findById(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query(
                'Select * from web_mission where id = ?', [ctx.params.id]
            );
            return rows;
        } catch (e) {
            return false;
        }
    }
    async add(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query(
                'insert into web_mission (missionname, missiontype, missioncontent, missionlevel, missionlink,missiondate,locationid) values (?, ?, ?, ?, ?, ?, ?)', [ctx.request.body.name, ctx.request.body.type, ctx.request.body.content, ctx.request.body.level, ctx.request.body.link, ctx.request.body.date, ctx.request.body.location]
            );
            return true;
        } catch (e) {
            return false;
        }
    }
    async update(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query(
                'Update web_mission set missionname = ? , missiontype = ? , missioncontent = ?, missionlevel = ? , missionlink = ? , missiondate = ? , locationid = ? where id = ?', [ctx.request.body.name, ctx.request.body.type, ctx.request.body.content, ctx.request.body.level, ctx.request.body.link, ctx.request.body.date, ctx.request.body.location, ctx.request.body.id]
            );
            return true;
        } catch (e) {
            return false;
        }
    }
    async delete(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query(
                'delete from web_mission where id = ?', [ctx.request.body.id]
            );
            return true;
        } catch (e) {
            return false;
        }
    }
}
export default new Mission();

