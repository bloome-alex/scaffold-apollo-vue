import apollo from '@/apollo'
import { gql } from 'graphql-tag'

import fetchBooks from './gql/fetchBooks.graphql'
import fetchBooksByAuthor from './gql/fetchBooksByAuthor.graphql'
import createBook from './gql/createBook.graphql'

class BooksProviders{
    constructor(gqlc){
        this.gqlc = gqlc
    }
    
    fetchBooks(){
        return this.gqlc.query({
            query: gql`${fetchBooks}`
        })
    }

    fetchBooksByAuthor({author}){
        return this.gqlc.query({
            query: gql`${fetchBooksByAuthor}`,
            variables: {author},
            'fetchPolicy': 'network-only'
        })
    }

    createBook({author, title}){
        return this.gqlc.mutate({
            mutation: gql`${createBook}`,
            variables: {author, title}
        })
    }
}

export default new BooksProviders(apollo)
