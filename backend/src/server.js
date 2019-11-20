const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://tindevsuper:admin1234@tindev-sm9zv.gcp.mongodb.net/tindev?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true    
});

server.use(express.json());
server.use(routes);

server.listen(3333);

