const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 7000;
const cheaf = require('./data/cheaf.json')

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/cheaf', (req, res) => {
    res.send(cheaf);
})

app.get('/cheaf/:id', (req, res) => {
    const id = req.params.id;
    const item = cheaf.find(item => item.id == id)
    res.send(item);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})