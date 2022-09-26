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
    description: {
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
    content: {
        type: Array
    },
    meta: {
        author:{
            type: String,
        },
        createdAt: {
            type: Date,
            
         
        },
        scope: {
            type: String,
            enum: ['Public', 'Private'],
            default: 'Private'
        }, 
        category: {
            type: String,
            enum: ['News', 'Tutorial', 'Swag'],
            default: 'News'
        }

    }
})
export default mongoose.models.Post ||  mongoose.model(`Post`, postSchema, 'Posts')