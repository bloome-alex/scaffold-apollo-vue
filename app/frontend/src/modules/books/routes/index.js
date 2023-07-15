const routes = [
    {
      path: '/books',
      name: 'books',
      component: () => import('../pages/BooksPage.vue')
    },
]

export { routes }