import mongoose from 'mongoose'


const ConnectDB = async () => {
    if(mongoose.connection.readyState === 0){
            
        mongoose.connect(process.env.DB_URL)
        const db = mongoose.connection
        db.on('error', () => {
            console.log('DB connection failed...')
        })
        db.on('open', ()=>{
            console.log(`DB connected...`)
        })
    }
}
export default ConnectDB