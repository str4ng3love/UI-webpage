import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    charName: {
        type: String,
        unique: true,
        required: true
    },
    charId: {
        type: String,
        required: true
    },
    refreshToken: {
        type:String,
        required: true
    },
    tokenExp: {
        type: Date,
        required: true,
    }
})

export default mongoose.models.User ||  mongoose.model(`User`, userSchema, 'Users')

