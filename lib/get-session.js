import nextSession from 'next-session'
import { expressSession, promisifyStore } from 'next-session/lib/compat'
import MongoStore from 'connect-mongodb-session'


const store = MongoStore(expressSession)



export const getSession = nextSession({
    store: promisifyStore( new store({
        databaseName: `sessions`,
        collection: `sessions`,
        uri: process.env.DB_URL,
        connectionOptions:{
            keepAlive: true,
            maxIdleTimeMS: 1000 * 60,
            
        }, 
    }, (err)=> {
        if(err){
            console.log(err)
        } else {
            console.log(`Connected to sessions DB...`)
        }
    })), touchAfter: 86400 ,
    
        cookie: {
            secure: true,
            httpOnly: true
        }
})