'use strict';
import mysql from 'mysql2/promise';
import config from '../config/db';

class Mission {

    async find(ctx) {
        let sql = 'Select * from web_mission where 1 = 1';
        if (ctx.query.type != undefined) {
            sql += ' and missiontype = ' + "'" + ctx.query.type + "'";
        };
        if (ctx.query.location != undefined) {
            sql += ' and missionlocation = ' + "'" + ctx.query.location + "'"
        };
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query(sql + ' limit 1000');
            return rows;
        } catch (e) {
            return false;
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
            let params = [
                ctx.request.body.missionname,
                ctx.request.body.missiontype,
                ctx.request.body.missioncontent,
                ctx.request.body.missionlevel,
                ctx.request.body.missionlink,
                ctx.request.body.missioncreatetime,
                ctx.request.body.missionfinaltime,
                ctx.request.body.missionlocation
            ];
            const connection = await mysql.createConnection(config);
            const [result] = await connection.query(
                'insert into web_mission (missionname, missiontype, missioncontent, missionlevel, missionlink,missioncreatetime,missionfinaltime,missionlocation) values (?, ?, ?, ?, ?, ?, ?, ?)', params
            );
            return result;
        } catch (e) {
            return false;
        }
    }
    async update(ctx) {
        try {
            let params = [
                ctx.request.body.missionname,
                ctx.request.body.missiontype,
                ctx.request.body.missioncontent,
                ctx.request.body.missionlevel,
                ctx.request.body.missionlink,
                ctx.request.body.missioncreatetime,
                ctx.request.body.missionfinaltime,
                ctx.request.body.missionlocation,
                ctx.request.body.id
            ];
            const connection = await mysql.createConnection(config);
            const [result] = await connection.query(
                'Update web_mission set missionname = ? , missiontype = ? , missioncontent = ?, missionlevel = ? , missionlink = ? , missioncreatetime = ? ,missionfinaltime = ? , missionlocation = ? where id = ?', params
            );
            return result;
        } catch (e) {
            return false;
        }
    }
    async delete(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [result] = await connection.query(
                'delete from web_mission where id = ?', [ctx.request.body.id]
            );
            return result;
        } catch (e) {
            return false;
        }
    }
    async join_find(ctx) {
        let sql = 'Select * from web_mission_join where 1 = 1';
        if (ctx.query.username != undefined) {
            sql += ' and childusername = ' + "'" + ctx.query.username + "'";
        };
        if (ctx.query.status != undefined) {
            sql += ' and status = ' + "'" + ctx.query.status + "'"
        };
        if (ctx.query.missionid != undefined) {
            sql += ' and missionid = ' + "'" + ctx.query.missionid + "'"
        }
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query(sql + ' limit 1000');
            return rows;
        } catch (e) {
            return false;
        }
    }
    async join_add(ctx) {
        try {
            let params = [
                ctx.request.body.missionid,
                ctx.request.body.childusername,
                ctx.request.body.createtime,
                ctx.request.body.finishtime,
                ctx.request.body.status,
                ctx.request.body.experience,
                ctx.request.body.verifytime,
                ctx.request.body.picture,
                ctx.request.body.verifyusername
            ];
            const connection = await mysql.createConnection(config);
            const [result] = await connection.query(
                'insert into web_mission_join (missionid, childusername, createtime, finishtime, status,experience,verifytime,picture,verifyusername) values (?, ?, ?, ?, ?, ?, ?, ?, ?)', params
            );
            return result;
        } catch (e) {
            return false;
        }
    }
    async join_update(ctx) {
        try {
            let params = [
                ctx.request.body.missionid,
                ctx.request.body.childusername,
                ctx.request.body.createtime,
                ctx.request.body.finishtime,
                ctx.request.body.status,
                ctx.request.body.experience,
                ctx.request.body.verifytime,
                ctx.request.body.picture,
                ctx.request.body.verifyusername,
                ctx.request.body.id
            ];
            const connection = await mysql.createConnection(config);
            const [result] = await connection.query(
                'Update web_mission_join set missionid = ? , childusername = ? , createtime = ?, finishtime = ? , status = ? , experience = ? ,verifytime = ? , picture = ? , verifyusername = ? where id = ?', params
            );
            return result;
        } catch (e) {
            return false;
        }
    }
    async join_delete(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [result] = await connection.query(
                'delete from web_mission_join where id = ?', [ctx.request.body.id]
            );
            return result;
        } catch (e) {
            return false;
        }
    }
}
export default new Mission();

