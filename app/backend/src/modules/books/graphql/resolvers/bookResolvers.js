import { createBook, deleteBook, fetchBooks, fetchBooksByAuthor, updateBook } from "../../services/BookServices.js"

export const bookResolvers = {
    Query: {
        fetchBooks: async () => {
            return await fetchBooks()
        },

        fetchBooksByAuthor: async (_, { author }) => {
            return await fetchBooksByAuthor(author)
        }
    },
    Mutation: {
        createBook: async (_, {title, author}) => {
            return await createBook({title, author})
        },
        
        updateBook: async (_, {id, update}) => {
            return await updateBook(id, update)
        },

        deleteBook: async (_, {id}) => {
            return await deleteBook(id)
        }
    }
}