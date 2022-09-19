import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        unique: [true, `Title in use.`],
        required: [true, `Field required.`],
        minlength: [3, 'Must be at least 3 characters long.'],
        validate:{
            validator: (v)=> {
                if(v.match(/[^-_a-z.,\ \s\?!A-Z0-9_']/g)){
                    return false
                } else {
                    return v
                }
            }, message: props =>`${props.value} is not a valid title, please use only letters and digits.`
        }
    },
    excerpt: {
        type: String,
        required: [true, `Field required.`],
        minlength: [3, 'Must be at least 3 characters long.'],
        validate:{
            validator: (v)=> {
                if(v.match(/[^-_a-z.,\ \s\?!A-Z0-9_]/g)){
                    return false
                } else {
                    return v
                }
            }, message: props =>`${props.value} is not a valid input, please use only letters and digits.`
        }
    },
    meta: {
        author:{
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
         
        },
        scope: {
            type: String,
            enum: ['Public', 'Private'],
            default: 'Private'
        }

    }
})
export default mongoose.models.Post ||  mongoose.model(`Post`, postSchema, 'Posts')