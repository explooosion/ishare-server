import jwt from 'jsonwebtoken'
import util from 'util';

const secret = require('../config/secret.json');
const verify = util.promisify(jwt.verify);

const authorization = () => {

    return async(ctx, next) => {

        try {

            // const token = jwt.sign('robby', 'ishare');
            // console.log(`token ====== ${token}`);
            // console.log('===========');

            const token = ctx.header.authorization;
            console.log(token);

            if (token) {
                try {
                    const payload = await verify(token, 'ishare');
                } catch (err) {
                    console.log(err);
                }
            }
            // console.log('payload：', payload);
            // console.log(`token = ${token}`);

            await next();
        } catch (err) {
            if (err.status === 401) {
                ctx.body = {
                    message: 'author - 驗證失敗',
                    log: err
                }
            } else {
                err.status = 404
                ctx.body = {
                    message: 'author - 404',
                    log: err
                }
                // console.log('author 404：', err)
            }
        }
    }

};


module.exports = authorization;

// export default function authorization() {
//     return async function (ctx, next) {
//         try {
//             const token = ctx.header.authorization
//             if (token) {
//                 let payload
//                 try {
//                     payload = await verify(token, secret.sign)
//                     console.log('payload：', payload)
//                     ctx.user = {
//                         name: payload.name,
//                         password: payload.password


//                         1
//                     }
//                 } catch (err) {
//                     console.log('token verify fail：'.err)
//                 }
//             }

//             console.log(`token: ${token}`)
//             await next()

//         } catch (err) {
//             if (err.status === 401   ) {
//                 ctx.body = {
//                     message: 'author - 驗證失敗',
//                     log: err
//                 }
//             } else {
//                 err.status = 404
//                 ctx.body = {
//                     message: 'author - 404',
//                     log: err
//                 }
//                 console.log('author 404：', err)
//             }
//         }
//     }
// }