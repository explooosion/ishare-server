import mysql from 'mysql'
//ERROR: app crash-waiting for file changes before starting.. 
//solution: npm install mysql
import config from '../config/db'

const connection = mysql.createConnection(config)//建立連線

class Exchange {

    async find(ctx) {

        await connection.connect();//連線資料庫

        const result = await connection.query(`select * from ExchangeList order by id desc`, function(error){
            if(error){//檢查是否有錯誤
                console.log('查詢失敗！');
                throw error;
            }
        })
        console.dir(result)
        
        await connection.end()
        return result['recordsets']
    }

    async add(ctx) {

        await connection.connect();//連線資料庫

        // 剩餘點數 = 原有點數 - 使用點數
        const resPoint = Number(ctx.request.body.point) - Number(ctx.request.body.pointCost)

        // Reduce Point
        let reReduce = await connection.request()
            .input('account', sql.NVarChar, ctx.request.body.childId)
            .input('point', sql.Int, resPoint)
            .query(`update ChildList set point = @point where account = @account`, function(error){
                if(error){//檢查是否有錯誤
                    console.log('查詢失敗！');
                    throw error;
                }
            })
        console.dir(reReduce)

        // Add Log
        let reLog = await connection.request()
            .input('childAccount', sql.NVarChar, ctx.request.body.childId)
            .input('storeAccount', sql.NVarChar, ctx.request.body.storeId)
            .input('point', sql.Int, ctx.request.body.pointCost)
            .input('time', sql.NVarChar, ctx.request.body.time)
            .query(`insert into ExchangeList ( childAccount, storeAccount, point, time ) 
                        values ( @childAccount, @storeAccount, @point, @time )`, function(error){
                            if(error){//檢查是否有錯誤
                                console.log('查詢失敗！');
                                throw error;
                            }
                        })
        console.dir(reLog)
  
        await connection.end()
        return reLog['recordsets']
    }

}

export default new Exchange()