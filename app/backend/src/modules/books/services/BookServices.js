import { DefaultLogger as winston } from '../../logger/index.js'
import Book from '../models/Book.js'

export const fetchBooks = async () => {
    return await Book.find()
}

export const fetchBooksByAuthor = async (author) => {
    return await Book.find({author: author})
}

export const createBook = async ({title, author}) => {
    try {
        if(!title || !author) throw new Error('Need params.')
        const book = new Book({
            title: title,
            author: author
        })
        
        return await book.save()
    } catch (error) {
        winston.error(error.message)
    }
}

export const updateBook = async (id, update) => {
    return await Book.findByIdAndUpdate(id, update, {new: true})
}

export const deleteBook = async (id) => {
    return await Book.findByIdAndDelete(id)
}