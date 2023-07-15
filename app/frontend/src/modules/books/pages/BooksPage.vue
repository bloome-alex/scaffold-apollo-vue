<template>
    <v-container>
        <v-card>
            <v-card-title>Books Page</v-card-title>
            <v-row>
                <v-col cols="6">
                    <v-text-field label="author" v-model="author"></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field label="title" v-model="title"></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-btn block color="primary" @click="createBook">createBook</v-btn>
                </v-col>
            </v-row>
            <v-btn @click="fetchBooks">fetchBooks</v-btn>
            <v-card-text>
                <v-table>
                    <thead>
                    <tr>
                        <th class="text-left">
                        Titulo
                        </th>
                        <th class="text-left">
                        Autor
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="item in items"
                        :key="item.title"
                    >
                        <td>{{ item.title }}</td>
                        <td>{{ item.author }}</td>
                    </tr>
                    </tbody>
                </v-table>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
    import BooksProvider from '../providers/BooksProviders'

    export default {
        name: 'BooksPage',
        data(){
            return {
                items: [],
                author: '',
                title: ''
            }
        },
        methods: {
            async fetchBooks(){
                const { data: { fetchBooksByAuthor } } = await BooksProvider.fetchBooksByAuthor({
                    author: 'author1'
                })
                this.items = fetchBooksByAuthor
            },
            async createBook(){
                await BooksProvider.createBook({
                    author: this.author,
                    title: this.title
                })

                this.fetchBooks()
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>