const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/mongotest'; // v koq baza danni e poslednoto query

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected to database'));

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model('Person', personSchema);

let person = new Person({ name: "Grigor", age: 36 }); // nova instanciq na nashiq model
// person.save((err, result) => {
//     if (err) return console.log(err);

//     console.log(result);

// }); //zapametqva go v bazata danni

person.save()
    .then(result => {
        console.log(result);
    });