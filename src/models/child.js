import mysql from 'mysql'
//ERROR: app crash-waiting for file changes before starting.. 
//solution: npm install mysql
import config from '../config/db'

const connection = mysql.createConnection(config)

class Child {
    
    async find(ctx) {

        await connection.connect();

        const result = await connection.query(`select * from ChildList`, function(error){
            if(error){
                console.log('查詢失敗！');
                throw error;
            }
        })
        console.dir(result)

        return result['recordsets']
        await connection.end()
    }

    async findById(ctx) {

        await connection.connect();
        
        let result = await connection.request()
            .input('account',sql.NVarChar,ctx.params.id)
            .query('select * from ChildList where account = @account', function(error){
            if(error){
                console.log('查詢失敗！');
                throw error;
            }
        })
        console.dir(result)

        return result['recordsets']
        await connection.end()
    }

    async login(ctx) {

        await connection.connect();

        console.log(ctx)

        let result = await connection.request()
            .input('account', sql.NVarChar, ctx.request.body.childId)
            .input('password', sql.NVarChar, ctx.request.body.childPwd)
            .query('select * from ChildList where account = @account and password = @password', function(error){
                if(error){
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