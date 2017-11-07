'use strict';
import mysql from 'mysql2/promise';
import config from '../config/db';

import R from 'ramda';

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

            const obj = ctx.request.body;

            let params = [];
            let sql = 'INSERT INTO web_mission (';

            Object.keys(obj).forEach((value, index, array) => {
                params.push(ctx.request.body[value]);
                sql += ` ${value},`;
            });
            sql = sql.substr(0, sql.length - 1) + ' ) values (';
            for (let i = 0; i < params.length; i++) {
                sql += ' ?,';
            }
            sql = sql.substr(0, sql.length - 1) + ' )';

            const connection = await mysql.createConnection(config);
            const [result] = await connection.query(sql, params);
            return result;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    async update(ctx) {
        try {
            const params = [
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
        try {
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
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query(sql + ' limit 1000');
            return rows;
        } catch (e) {
            return false;
        }
    }


    /**
     * 尋找任務且具有任務資訊
     * @param {*} ctx 
     */
    async join_find_mission(ctx) {
        try {
            let sql = `SELECT * from web_mission LEFT JOIN web_mission_join 
            ON web_mission.id = web_mission_join.missionid WHERE 1=1`;
            if (ctx.query.username != undefined) {
                sql += ' and web_mission_join.childusername = ' + "'" + ctx.query.username + "'";
            };
            if (ctx.query.status != undefined) {
                sql += ' and web_mission_join.status = ' + "'" + ctx.query.status + "'"
            };
            if (ctx.query.missionid != undefined) {
                sql += ' and web_mission_join.missionid = ' + "'" + ctx.query.missionid + "'"
            }

            sql += ' ';
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query(sql + ' limit 1000');
            return rows;
        } catch (e) {
            return false;
        }
    }


    async join_add(ctx) {
        try {

            // 有些欄位請初始化格式

            const params = [
                ctx.request.body.missionid,
                ctx.request.body.childusername,
                ctx.request.body.createtime,
                '已參加',
                JSON.stringify({
                    "家人": false,
                    "朋友": false
                }),
                JSON.stringify({
                    "彩繪": false,
                    "捏塑": false,
                    "雕刻": false,
                    "平面設計": false,
                    "立體設計": false
                })
            ];
            console.log(params);
            const connection = await mysql.createConnection(config);
            const [result] = await connection.query(
                'insert into web_mission_join (missionid, childusername, createtime, status, travelmember, arttype) values (?, ?, ?, ?, ?, ?)', params
            );
            return result;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    async join_update(ctx) {

        try {

            const obj = ctx.request.body;

            let params = [];
            let _param = [ctx.request.body.missionid, ctx.request.body.childusername];
            let sql = 'UPDATE web_mission_join SET';

            Object.keys(obj).forEach((value, index, array) => {
                if (R.and(value !== 'missionid', value !== 'childusername')) {
                    params.push(ctx.request.body[value]);
                    sql += ` ${value} = ?,`;
                }
            });

            params = R.concat(params, _param);
            sql = sql.substr(0, sql.length - 1) + ' WHERE missionid = ? AND childusername = ?';

            const connection = await mysql.createConnection(config);
            const [result] = await connection.query(sql, params);
            return result;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    async join_delete(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [result] = await connection.query(
                'delete from web_mission_join where missionid = ? and childusername=?', [ctx.request.body.missionid, ctx.request.body.childusername]
            );
            return result;
        } catch (e) {
            return false;
        }
    }

    /**
     * 任務審核-通過
     * @param {*} ctx 
     */
    async verify(ctx) {
        try {
            const params = [
                ctx.request.body.status,
                ctx.request.body.verifytime,
                ctx.request.body.verifyusername,
                ctx.request.body.id
            ];
            const connection = await mysql.createConnection(config);
            const [result] = await connection.query(
                'Update web_mission set status = ? , verifytime = ? , verifyusername = ? where id = ?', params
            );
            return result;
        } catch (e) {
            return false;
        }
    }

}
export default new Mission();