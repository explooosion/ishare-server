import mysql from 'mysql'
import config from '../config/db'

const connection = await mysql.createConnection(config)//建立連線

class Child {

    async find(ctx) {

        await connection.connect();//連線資料庫

        const result = await connection.query(`select * from ChildList`, function(error){
            if(error){//檢查是否有錯誤
                console.log('查詢失敗！');
                throw error;
            }
        })
        console.dir(result)

        return result['recordsets']
        await connection.end()
    }

    async findById(ctx) {

        await connection.connect();//連線資料庫
        
        let result = await connection.request()
            .input('account',sql.NVarChar,ctx.params.id)
            .query('select * from ChildList where account = @account', function(error){
            if(error){//檢查是否有錯誤
                console.log('查詢失敗！');
                throw error;
            }
        })
        console.dir(result)

        return result['recordsets']
        await connection.end()
    }

    async login(ctx) {

        await connection.connect();//連線資料庫

        console.log(ctx)

        let result = await connection.request()
            .input('account', sql.NVarChar, ctx.request.body.childId)
            .input('password', sql.NVarChar, ctx.request.body.childPwd)
            .query('select * from ChildList where account = @account and password = @password', function(error){
                if(error){//檢查是否有錯誤
                    console.log('查詢失敗！');
                    throw error;
                }
        })
        console.dir(result)

        return result['recordsets']
        await connection.end()
    }
}

export default new Child()