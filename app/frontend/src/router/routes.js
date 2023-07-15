import merge from 'deepmerge'

import { routes as booksRouts } from '@/modules/books/routes'


const routes = merge.all([booksRouts])

export default routes;