const Cat = require('../models/Cat');
const Person = require('../models/Person');

function createCat(name, owner) {
    let person = new Person({ name: owner, age: 50 });
    person.save()
        .then(createdPerson => {
            let cat = new Cat({ name, age: 5, breed: 'Persian', owner: createdPerson });
            return cat.save()
                .then(createdCat => {
                    console.log(createdCat);
                });
        })
}

module.exports = createCat;