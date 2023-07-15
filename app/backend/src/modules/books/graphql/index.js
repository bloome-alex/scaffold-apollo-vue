import path from 'path'
import { fileURLToPath } from 'url'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'
import { bookResolvers } from './resolvers/bookResolvers.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const typeDefsArray = loadFilesSync(path.join(__dirname, './types'))

const mergedTypes = mergeTypeDefs(typeDefsArray)

const mergedResolvers = mergeResolvers([bookResolvers])

export const types = mergedTypes
export const resolvers = mergedResolvers