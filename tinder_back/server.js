const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 8001;

app.get('/', (req,res) => {
    res.status(200).send("Hello, World!");
})

app.listen(port, () => {
    console.log(`listening on ${port}`);
})