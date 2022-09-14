import mongoose from 'mongoose'
const { DB_URL } = process.env

const connectDB = async () => {
    if(mongoose.connection.readyState === 0){
      
        return mongoose.connect(DB_URL, (err)=> {
            if(err){
                console.log(err)
            } else {
                console.log(`Connected to DB...`)
            }
        })
    } else {
        // console.log('Already connected...')
        return
    }
}
export default connectDB