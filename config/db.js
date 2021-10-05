const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/catagram'; // v koq baza danni e poslednoto query

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected to database'));