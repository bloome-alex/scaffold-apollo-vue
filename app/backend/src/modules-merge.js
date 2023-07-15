import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'

import {types as booksTypes, resolvers as booksResolvers} from './modules/books/index.js'

const mergedTypes = mergeTypeDefs([booksTypes])
const mergedResolvers = mergeResolvers([booksResolvers])

export const types = mergedTypes
export const resolvers = mergedResolvers