const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Person"
    }
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat