'use strict';
import mysql from 'mysql2/promise';
import config from '../config/db';

import R from 'ramda';

class Mission {

    async find(ctx) {
        let sql = 'SELECT * FROM web_mission WHERE 1 = 1';
        if (ctx.query.type != undefined) {
            sql += ' AND missiontype = ' + "'" + ctx.query.type + "'";
        };
        if (ctx.query.location != undefined) {
            sql += ' AND missionlocation = ' + "'" + ctx.query.location + "'"
        };
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query(sql + ' LIMIT 1000');
            return rows;
        } catch (e) {
            return false;
        }
    }

    async findById(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query(
                'SELECT * FROM web_mission WHERE id = ?', [ctx.params.id]
            );
            return rows;
        } catch (e) {
            return false;
        }
    }


    async findByCreater(ctx) {
        try {
            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query(
                'SELECT * FROM web_mission WHERE missioncreateuser = ?', [ctx.params.uid]
            );
            return rows;
        } catch (e) {
            console.log(e)
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
                'UPDATE web_mission SET missionname = ? , missiontype = ? , missioncontent = ?, missionlevel = ? , missionlink = ? , missioncreatetime = ? ,missionfinaltime = ? , missionlocation = ? WHERE id = ?', params
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
                'DELETE FROM web_mission WHERE id = ?', [ctx.request.body.id]
            );
            return result;
        } catch (e) {
            return false;
        }
    }

    async join_find(ctx) {
        try {
            let sql = 'SELECT * FROM web_mission_join WHERE 1 = 1';
            if (ctx.query.username != undefined) {
                sql += ' AND childusername = ' + "'" + ctx.query.username + "'";
            };
            if (ctx.query.status != undefined) {
                sql += ' AND status = ' + "'" + ctx.query.status + "'"
            };
            if (ctx.query.missionid != undefined) {
                sql += ' AND missionid = ' + "'" + ctx.query.missionid + "'"
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
            let sql = `SELECT * FROM web_mission RIGHT JOIN web_mission_join 
            ON web_mission.id = web_mission_join.missionid WHERE 1=1`;
            if (ctx.query.username != undefined) {
                sql += ' AND web_mission_join.childusername = ' + "'" + ctx.query.username + "'";
            };
            if (ctx.query.status != undefined) {
                sql += ' AND web_mission_join.status = ' + "'" + ctx.query.status + "'"
            };
            if (ctx.query.missionid != undefined) {
                sql += ' AND web_mission_join.missionid = ' + "'" + ctx.query.missionid + "'"
            }
            if (ctx.query.missioncreateuser != undefined) {
                sql += ' AND web_mission.missioncreateuser = ' + "'" + ctx.query.missioncreateuser + "'"
            }

            const connection = await mysql.createConnection(config);
            const [rows, fields] = await connection.query(`${sql} limit 1000`);
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
                'INSERT INTO web_mission_join (missionid, childusername, createtime, status, travelmember, arttype) VALUES (?, ?, ?, ?, ?, ?)', params
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
                if (R.AND(value !== 'missionid', value !== 'childusername')) {
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
                'DELETE FROM web_mission_join WHERE missionid = ? AND childusername=?', [ctx.request.body.missionid, ctx.request.body.childusername]
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
                ctx.request.body.missionid,
                ctx.request.body.childusername
            ];
            const connection = await mysql.createConnection(config);
            const [result] = await connection.query(
                'UPDATE web_mission_join SET status = ? , verifytime = ? , verifyusername = ? WHERE missionid = ? AND childusername = ?', params
            );
            return result;
        } catch (e) {
            return false;
        }
    }

}
export default new Mission();