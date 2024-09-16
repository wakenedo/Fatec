const express = require('express')
//fake database
let books = [];
const app = express();


app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/book_register', (req, res) => {
    const {id, title, author, pages, price } = req.body;
    const book = {id: id, title: title, author: author, pages: pages, price: price}
    books.push(book);
    return res.status(200).json(book);
});

app.get('/all_books', (req, res) => {
    const allBooks = books;
    return res.status(200).json(allBooks);
});

app.get('/all_books/:id', (req, res) => {
    const {id} = req.params;
    const book = books.find(book => book.id === id);
    if(!book) {
        return res.status(404).json({message: 'Book not found'});
        
    } else {
        return res.status(200).json(book);
    }
});

app.delete('/delete_book/:id', (req, res) => {
    const {id} = req.params;
    const bookIndex = books.findIndex(book => book.id === id);
    if(bookIndex < 0) {
        return res.status(404).json({message: 'Book not found'});
    } else {
        books.splice(bookIndex, 1);
        return res.status(200).json({message: 'Book deleted'});
    }
});

app.patch('/update_book/:id', (req, res) => {
    const {title, author, price} = req.body;
    const {id} = req.params;
    const book = books.find(book => book.id === id);
    book.id = book.id;
    book.title = title ? title : book.title;
    book.author = author ? author : book.author;
    book.price = price ? price : book.price;
    return res.status(200).json(book);
})

app.listen(8081, () => console.log('app listening on port 8081!'))