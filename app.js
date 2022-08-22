const express = require('express')
const app = express()
const PORT = 3000;
const { db } = require('./config')

app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
    const books = await db.table('buku').getAll()

    console.log('books: ', books)

    res.render('pages/index', { books, title: 'Hello' })
})


app.listen(PORT, console.log(`Listening on port ${PORT}...`))