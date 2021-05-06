const express = require('express');
const mongoose = require('mongoose');
const Cors = require('cors');
const {username, password} = require('./secret.json');
// const { default: dbCards } = require('./dbCards');
// const Cards = require('dbCards.js')

const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://${username}:${password}@cluster0.ziepk.mongodb.net/tinderdb?retryWrites=true&w=majority`;

// console.log({connection_url});

app.use(express.json());
app.use(Cors());

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
})

const Cards = mongoose.model('Cards', cardSchema);

app.get('/', (req, res) => {
    res.status(200).send("Hello, World!");
})

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
});

app.get('/tinder/cards', (req, res) => {
    // console.log("ABC");
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    });
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
})