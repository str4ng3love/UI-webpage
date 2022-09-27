import mongoose from 'mongoose'


const postSchema = new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        unique: [true, `Title in use.`],
        required: [true, `Field required.`],
        minlength: [3, 'Must be at least 3 characters long.'],
    },
    description: {
        type: String,
        required: [true, `Field required.`],
        minlength: [3, 'Must be at least 3 characters long.'],
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