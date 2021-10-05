const mongoose = require('mongoose');
const Person = require('./models/Person');

const uri = 'mongodb://localhost:27017/mongotest'; // v koq baza danni e poslednoto query

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected to database'));

let person = new Person({ name: "Dilyan", age: 27 }); // nova instanciq na nashiq model

//save to my databse

// person.save();
//     .then(result => {
//         console.log(result);
//     }); 

//take from my database (extract);
Person.find({})
    .then((people) => {
        people.forEach(person => console.log(`I am born ${person.birthYear}`));
    })
    .catch(err => console.log(err));

// Person.findById('615c3631a61e0f6c74a75cfa')
//     .then(res => {
//         console.log(res);
//     });

// Person.find({ _id: '615c3631a61e0f6c74a75cfa' })
//     .then(res => {
//         console.log(res);
//     })

// Person.updateOne({ _id: '615c3631a61e0f6c74a75cfa' }, { $set: { name: "Dilqn4o", age: 54 } })
//     .then(res => {
//         console.log(res);
//     });

// Person.remove({ name: "Dilqn4o" })
//     .then(res => console.log(res));
;

async function run() {
    // let count = await Person.countDocuments({ age: { $gte: 30 } });
    let names = await Person.find({}).select('name age');
    let names = await Person.find({}, { _id: 0, name: 1 });
    console.log(names);
};

run();