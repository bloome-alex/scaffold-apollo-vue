import mongoose from 'mongoose'

const BookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        requierd: true,
        unique: false
    }
})

const Book = mongoose.model('Book', BookSchema)

export default Book